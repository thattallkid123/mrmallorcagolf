import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest'
import { selectorAnswerSummary } from '../../src/lib/course-selector-logic'
import { COURSE_SELECTOR_T } from '../../src/lib/course-selector-translations'
const send = vi.hoisted(() => vi.fn())
vi.mock('resend', () => ({ Resend: class { emails = { send } } }))
vi.mock('../../src/lib/request-safety', async original => ({ ...(await original()), checkRateLimit: vi.fn().mockResolvedValue(true) }))
import { POST as sendItinerary } from '../../src/app/api/send-itinerary/route'
import { POST as sendPdf } from '../../src/app/api/lead-magnet-signup/route'
import { POST as sendQuestionnaire } from '../../src/app/api/questionnaire/route'
import { POST as sendHandicap } from '../../src/app/api/handicap-checker-submit/route'
import { PDF_REQUEST_GROUPS, PDF_REQUEST_LEADS_GROUP_ID, LEAD_MAGNET_GROUPS } from '../../src/lib/signup-config'
const post=(route,body)=>route(new Request('http://localhost:3000/api/test',{method:'POST',headers:{origin:'http://localhost:3000','content-type':'application/json'},body:JSON.stringify({email:'test@example.com',subscribeNewsletter:false,...body})}))
describe('customer email delivery and consent',()=>{
  beforeEach(()=>{vi.stubEnv('RESEND_API_KEY','test-key');vi.stubEnv('MAILERLITE_API_TOKEN','test-token');send.mockReset().mockResolvedValue({data:{id:'test'},error:null});vi.stubGlobal('fetch',vi.fn().mockImplementation(async(_,options)=>options?.method==='POST'?{ok:true,status:201,json:async()=>({})}:{ok:false,status:404,json:async()=>({})}));vi.spyOn(console,'error').mockImplementation(()=>{})})
  afterEach(()=>{vi.restoreAllMocks();vi.unstubAllGlobals();vi.unstubAllEnvs()})
  test('pre-round answers reach Andy and the customer copy without exposing HTML', async()=>{
    const response=await post(sendQuestionnaire,{summaryData:[{q:'Name',a:'Audit <guest>'},{q:'Email',a:'test@example.com'},{q:'Goal',a:'Choose <safe> targets; keep font-family:Georgia,serif; as text'}]})
    expect(response.status).toBe(200);expect(send).toHaveBeenCalledTimes(2)
    expect(send.mock.calls[0][0].to).toBe('andy@mrmallorcagolf.com');expect(send.mock.calls[1][0].to).toBe('test@example.com')
    expect(send.mock.calls[1][0].replyTo).toBe('andy@mrmallorcagolf.com');expect(send.mock.calls[1][0].html).toContain('Choose &lt;safe&gt; targets; keep font-family:Georgia,serif; as text')
  })
  test('a failed customer copy does not reject an already received pre-round enquiry', async()=>{
    send.mockResolvedValueOnce({error:null,data:{id:'received'}}).mockRejectedValueOnce(new Error('Copy unavailable'))
    expect((await post(sendQuestionnaire,{summaryData:[{q:'Email',a:'test@example.com'}]})).status).toBe(200)
  })
  test('a shortlist email includes the promised walking guidance, access condition and Andy note, escaped',async()=>{
    const response=await post(sendItinerary,{tool:'course-selector',data:{topCourses:[{name:'Son Termes',bestFor:'Scenery',areaLabel:'Palma',diff10:6,greenFee:'Peak EUR110',buggyNote:'Back nine steep; buggy advised',accessRequirement:'36 + certificate',andy:'Keep <script> notes as text'}]}})
    expect(response.status).toBe(200)
    const html=send.mock.calls[0][0].html
    expect(html).toContain('Back nine steep; buggy advised');expect(html).toContain('36 + certificate');expect(html).toContain('Keep &lt;script&gt; notes as text');expect(html).not.toContain('<script>')
    expect(fetch).not.toHaveBeenCalled()
  })
  test('a PDF-only request is recorded without joining marketing groups and notifies Andy',async()=>{
    expect((await post(sendPdf,{guide:'course-comparison'})).status).toBe(200)
    expect(send).toHaveBeenCalledTimes(2);expect(fetch).toHaveBeenCalledTimes(2)
    const record=JSON.parse(fetch.mock.calls[1][1].body)
    expect(record.status).toBe('unconfirmed');expect(record.groups).toEqual([PDF_REQUEST_LEADS_GROUP_ID,PDF_REQUEST_GROUPS['course-comparison']]);expect(record.groups).not.toContain(LEAD_MAGNET_GROUPS['course-comparison'])
    expect(send.mock.calls[0][0].html).toContain('/downloads/course-comparison.pdf')
    expect(send.mock.calls[1][0].to).toBe('andy@mrmallorcagolf.com');expect(send.mock.calls[1][0].text).toContain('test@example.com');expect(send.mock.calls[1][0].text).toContain('Planning emails opted in: No')
  })
  test('a truthy string is not an explicit marketing opt-in',async()=>{
    expect((await post(sendPdf,{guide:'course-comparison',subscribeNewsletter:'true'})).status).toBe(200)
    expect(fetch).toHaveBeenCalledTimes(2);expect(JSON.parse(fetch.mock.calls[1][1].body).status).toBe('unconfirmed')
  })
  test('an explicitly opted-in PDF request uses the confirmation form, keeping the request unconfirmed',async()=>{
    fetch.mockResolvedValueOnce({ok:false,status:404})
      .mockResolvedValueOnce({ok:true,status:201,json:async()=>({})})
      .mockResolvedValueOnce({ok:true,status:200,json:async()=>({success:true})})
    expect((await post(sendPdf,{guide:'course-comparison',subscribeNewsletter:true})).status).toBe(200)
    expect(fetch).toHaveBeenCalledTimes(3)
    expect(JSON.parse(fetch.mock.calls[1][1].body).status).toBe('unconfirmed')
    expect(fetch.mock.calls[2][0]).toContain('/forms/189284603205256243/subscribe')
    expect(new URLSearchParams(fetch.mock.calls[2][1].body).get('fields[signup_source]')).toBe('course-comparison')
  })
  test('an existing subscriber keeps their subscription status and existing groups',async()=>{
    fetch.mockResolvedValueOnce({ok:true,status:200,json:async()=>({data:{status:'unsubscribed'}})})
    expect((await post(sendPdf,{guide:'cost-guide'})).status).toBe(200)
    expect(JSON.parse(fetch.mock.calls[1][1].body)).not.toHaveProperty('status')
    expect(fetch.mock.calls[1][1].method).toBe('POST')
  })
  test('lead capture failure is reported before sending a PDF or notification',async()=>{
    fetch.mockResolvedValueOnce({ok:false,status:404}).mockResolvedValueOnce({ok:false,status:503})
    expect((await post(sendPdf,{guide:'cost-guide'})).status).toBe(502);expect(send).not.toHaveBeenCalled()
  })
  test('notifications can be disabled independently of capture and PDF delivery',async()=>{
    vi.stubEnv('PDF_REQUEST_NOTIFICATIONS_ENABLED','false')
    expect((await post(sendPdf,{guide:'cost-guide'})).status).toBe(200);expect(send).toHaveBeenCalledTimes(1);expect(fetch).toHaveBeenCalledTimes(2)
  })
  test('a notification failure does not undo successful capture or customer delivery',async()=>{
    send.mockResolvedValueOnce({data:{id:'customer'},error:null}).mockResolvedValueOnce({error:{message:'Notification rejected'}})
    expect((await post(sendPdf,{guide:'cost-guide'})).status).toBe(200);expect(send).toHaveBeenCalledTimes(2)
  })
  test('only a registered guide can be requested',async()=>{
    expect((await post(sendPdf,{guide:'__proto__'})).status).toBe(400);expect(fetch).not.toHaveBeenCalled();expect(send).not.toHaveBeenCalled()
  })
  test.each([
    ['pre-round',sendQuestionnaire,{summaryData:[]}],
    ['shortlist',sendItinerary,{tool:'course-selector',data:{topCourses:[]}}],
    ['PDF',sendPdf,{guide:'course-comparison'}],
    ['handicap access',sendHandicap,{handicap:'18',area:'Palma',recommendations:[],summary:[]}],
  ])('%s reports a provider rejection instead of claiming delivery',async(_,route,body)=>{
    send.mockResolvedValue({data:null,error:{message:'Provider rejected the send'}})
    const response=await post(route,body);expect(response.status).toBe(_ === 'pre-round' ? 500 : 502);expect((await response.json()).success).not.toBe(true);expect(fetch).toHaveBeenCalledTimes(_ === 'PDF' ? 2 : 0)
  })
})
describe('course-finder enquiry context',()=>{
  const answers={ability:'confident',group:'friends',style:['scenic','serious'],area:'Palma',budget:'mid',difficulty:'balanced',walking:'buggy',extras:['dining','hotel','transport']}
  test('all selected extras and the original golf preferences reach the summary',()=>{
    const summary=selectorAnswerSummary(answers);for(const label of ['Confident player','Friends group','Scenic','Serious golf','Palma and around','Mid-range','Balanced','Buggy please','Restaurants','Hotel','Transport'])expect(summary).toContain(label)
  })
  test('every locale keeps the complete summary within the enquiry message limit',()=>{
    for(const locale of Object.keys(COURSE_SELECTOR_T)){
      const t=COURSE_SELECTOR_T[locale];const summary=selectorAnswerSummary(answers,t.questions)
      for(const extra of answers.extras)expect(summary).toContain(t.questions.extras.options[extra].label)
      expect(summary.length).toBeLessThanOrEqual(1800)
    }
  })
})
