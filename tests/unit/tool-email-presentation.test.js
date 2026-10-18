import fs from 'node:fs'
import path from 'node:path'
import {beforeEach,afterEach,describe,test,expect,vi} from 'vitest'
import {buildToolEmail} from '../../src/app/api/_lib/tool-email'
import cost from '../fixtures/customer-email-cost.json'
import access from '../fixtures/customer-email-access.json'
import {buildItineraries,buildDayEnquiryBrief} from '../../src/lib/golf-day-planner'
import {POST as pdf} from '../../src/app/api/lead-magnet-signup/route'
import {POST as contact} from '../../src/app/api/contact/route'
import {POST as questionnaire} from '../../src/app/api/questionnaire/route'
import {POST as chinese} from '../../src/app/api/zh-selector-email/route'
import {HOTELS} from '../../src/lib/hotel-recommender-logic'
import {COURSES} from '../../src/lib/golf-day-builder-logic'
import {LUNCH_VENUES} from '../../src/lib/golf-day-lunch-venues'
const send=vi.hoisted(()=>vi.fn())
vi.mock('resend',()=>({Resend:class{emails={send}}}))
vi.mock('../../src/lib/request-safety',async original=>({...await original(),checkRateLimit:vi.fn().mockResolvedValue(true)}))
import {POST as itinerary} from '../../src/app/api/send-itinerary/route'
import {POST as handicap} from '../../src/app/api/handicap-checker-submit/route'
const post=(route,body)=>route(new Request('http://localhost:3000/api/test',{method:'POST',headers:{origin:'http://localhost:3000','content-type':'application/json'},body:JSON.stringify({email:'test@example.com',subscribeNewsletter:false,...body})}))
function preview(name,html){if(process.env.MMG_EMAIL_PREVIEW_DIR){fs.mkdirSync(process.env.MMG_EMAIL_PREVIEW_DIR,{recursive:true});fs.writeFileSync(path.join(process.env.MMG_EMAIL_PREVIEW_DIR,name+'.html'),html)}}
describe('customer-facing email presentation',()=>{
 beforeEach(()=>{vi.stubEnv('RESEND_API_KEY','test');vi.stubEnv('MAILERLITE_API_TOKEN','test-token');vi.stubGlobal('fetch',vi.fn().mockImplementation(async(_,options)=>options?.method==='POST'?{ok:true,status:201,json:async()=>({})}:{ok:false,status:404,json:async()=>({})}));send.mockReset().mockResolvedValue({error:null,data:{id:'test'}})})
 afterEach(()=>{vi.restoreAllMocks();vi.unstubAllEnvs();vi.unstubAllGlobals()})
 test('cost email collapses equal endpoints and gives the per-golfer figure a readable summary',async()=>{
  expect((await post(itinerary,{tool:'golf-cost-calculator',data:cost})).status).toBe(200)
  const html=send.mock.calls[0][0].html
  expect(html).not.toContain('€0 – €0');expect(html).not.toContain('€134 – €134');expect(html).toContain('€134')
  expect(html).toContain('font-family:Jost,Arial,Helvetica,sans-serif;font-size:28px');expect(html).toContain('Estimate per golfer');expect(html).toContain('€1,063 – €1,676');expect(html).toContain('Trip total for 2 golfers')
  expect(html).toContain('bgcolor="#2D4A3E"');expect(html).not.toContain('>mrmallorcagolf.com<')
  expect(html).not.toContain('color:rgba(');preview('cost-estimate',html)
 })
 test('access email groups bookable courses once and retains the important restrictions',async()=>{
  expect((await post(handicap,access)).status).toBe(200)
  const html=send.mock.calls[0][0].html
  expect(html).toContain('https://www.mrmallorcagolf.com/guides/son-gual-review');expect(html).toContain('https://www.mrmallorcagolf.com/guides/son-termes-review');expect(html).toContain('Can be booked');expect(html).not.toContain(': You can book')
  expect(html).toContain('playing off <strong>28</strong>');expect(html).toContain('Santa Ponsa 2 and 3');expect(html).toContain('Members &amp; guests only');expect(html).toContain('Hotel guests only')
  expect(html).toContain('I can check the available rates');preview('course-access',html)
 })
 test('every other website customer email uses the shared layout and retains its useful result',async()=>{
  const deliver=async(name,route,payload,last=false)=>{send.mockClear();expect((await post(route,payload)).status).toBe(200);const mail=send.mock.calls[last?send.mock.calls.length-1:0][0];expect(mail.html).toContain('font-family:Jost,Arial,Helvetica,sans-serif');expect(mail.html).not.toMatch(/<font\b|color:rgba/);preview(name,mail.html);return mail.html}
  const sonQuint=COURSES.find(c=>c.id==='son-quint')
  const course=await deliver('course-recommendations',itinerary,{tool:'course-selector',data:{topCourses:[{name:sonQuint.name,bestFor:sonQuint.blurb,areaLabel:'Palma',diff10:5,greenFee:'Pricing confirmed for your date',accessRequirement:'Handicap and certificate confirmed before booking',buggyNote:'Walking and buggy choice confirmed with your round'}]}})
  expect(course).toContain(sonQuint.blurb)
  const hotel=HOTELS.find(h=>h.id==='hotel-saratoga')
  const hotels=await deliver('hotel-recommendations',itinerary,{tool:'hotel-recommender',data:{answerSummary:'Palma · Friends · Classic style · Mid-range · Spa',results:[hotel]}})
  expect(hotels).toContain(hotel.why);expect(hotels).toContain(hotel.golf)
  for(const guide of ['cost-guide','trip-planner','beginners-guide','course-comparison']){const html=await deliver('pdf-'+guide,pdf,{guide});expect(html).toContain('/downloads/'+guide+'.pdf')}
  for(const lang of ['en','de','es','fr','nl','sv','zh']){await deliver('enquiry-'+lang,contact,{fname:'Audit',lname:'Guest',dates:'14–19 May 2027',groupsize:'4',handicap:'18–28',courses:'Son Quint',serviceType:'trip-planning',message:'Three rounds, buggies and time for lunch.',lang},true)}
  const copy=await deliver('pre-round-copy',questionnaire,{summaryData:[{q:'Name',a:'Audit Guest'},{q:'Email',a:'test@example.com'},{q:'What would make this a good day?',a:'Enjoy the course and get help choosing targets.'}]},true)
  expect(copy).toContain('Enjoy the course and get help choosing targets.')
  const zh=await deliver('course-recommendations-zh',chinese,{courses:[{en:sonQuint.name,zh:'Son Quint'}]});expect(zh).toContain('/zh/contact#wechat')
 })
 test('golf-only and lunch plans give distinct eligible choices and carry a verified lunch venue into the email',async()=>{
  const plans=buildItineraries({region:'palma',dayStyle:'relaxed',level:'confident',handicap:'low',start:'mid',courseType:'scenic',addons:['lunch'],transport:'yes',group:'friends'})
  expect(plans).toHaveLength(2);expect(plans[0].course.id).not.toBe(plans[1].course.id)
  const venue=LUNCH_VENUES[plans[1].course.id];expect(venue.source).toMatch(/^https:/)
  expect(plans[1].steps.some(step=>step.title.includes(venue.name))).toBe(true)
  expect(plans[0].steps).toHaveLength(4);expect(plans[1].steps).toHaveLength(5)
  expect(JSON.stringify(plans)).not.toContain('kitchen hours');expect(JSON.stringify(plans)).not.toContain('after the activities');expect(plans[1].steps.at(-1).desc).toContain('after lunch');expect(JSON.stringify(plans)).not.toContain('local travel partner')
  expect((await post(itinerary,{tool:'golf-day-builder',data:{answerSummary:'Palma · Relaxed golf · Confident player · Up to 28 · Mid-morning · Scenery · Lunch · Ask about transfers · Friends',itineraries:plans.map(p=>({...p,courseName:p.course.name,courseSummary:p.course.blurb}))}})).status).toBe(200)
  const html=send.mock.calls[0][0].html;expect(html).toContain(venue.name);expect(html).not.toContain('local travel partner');preview('golf-day-plan',html)
 })
})

test('the selected day enquiry keeps the transport, certificate range, extras and restaurant context',()=>{
 const answers={region:'palma',dayStyle:'relaxed',level:'confident',handicap:'low',start:'mid',courseType:'scenic',addons:['lunch'],transport:'yes',group:'friends'}
 const plan=buildItineraries(answers)[1],brief=buildDayEnquiryBrief(answers,plan)
 expect(brief).toContain('Ask about transfers');expect(brief).toContain('Up to 28');expect(brief).toContain('Friends')
 expect(brief).toContain('Son Quint Restaurant');expect(brief.split('\n').length).toBeGreaterThan(9);expect(brief.length).toBeLessThanOrEqual(1800)
})

 test('an unrecognised language cannot inject HTML into the shared email frame',()=>{const html=buildToolEmail('Example','<p>Safe</p>',{lang:'"><img src=x onerror=alert(1)>'});expect(html).toContain('<html lang="en">');expect(html).not.toContain('<img')})
