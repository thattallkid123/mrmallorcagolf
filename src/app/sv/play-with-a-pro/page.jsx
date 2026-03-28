import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Spela med ett Proffs — Privata Golfdagar på Mallorca',
  description: 'En privat golfrunda på Mallorca med UK PGA Advanced Professional Andy Griffiths. Coaching på banan, hel dag arrangerad. Från €350 per person.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/play-with-a-pro' },
}

export default function PlayWithAPro_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/sv" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Start</Link> &nbsp;/&nbsp; <span>Spela med ett Proffs</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Privata Golfdagar · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>En Privat Golfdag på Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Inte en lektion. Inte en vanlig runda. En privat dag på en av ons finaste banor, guidad av en UK PGA-proffs som coachat på högsta nivå på tre kontinenter.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 per person + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/sv/contact" className="btn btn--gold">Boka din dag &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Se paket</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Vad dagen innehåller</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Innan du anländer vet jag redan vad jag ska se efter.</h2>
          <p>Innan du anländer fyller du i ett kort frågeformulär. Vad som frustrerar dig, var glappet är. När vi når första teet vet jag redan vad jag ska se efter.</p>
          <p>Under rundan vavs coachingen in naturligt — inte en löpande kommentar, utan rätt observation vid rätt tillfälle.</p>
          <p>Jag har coachat i miljöer där förväntningen var seriös, mätbar förbättring — landslaget i Kina, golffanatiker över hela Asien.</p>
          <div className="pull-quote"><p>&ldquo;Det de flesta golfare upptacker är att de går därifrån och spelar märkbart bättre och med större självförtroende — och förstår varför.&rdquo;</p></div>
          <p>Genomgången över lunchen är inte en sammanfattning. Det är samtalet som ger hela dagen mening.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Redan bokat?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Fyll i ditt frågeformulär inför rundan &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Tar 3 minuter. Hjälper mig anpassa dagen för dig innan vi når första tee.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Vad som ingar</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Banval</strong>Matchat efter ditt spel, handicap och förväntning</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Starttid</strong>Säkrad och hanterad</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing före rundan</strong>Vad du kan vänta på banan</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hål bredvid Andy</strong>Spela, som din partner</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching på banan</strong>Banhantering, slagsval, beslutsfattande</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Genomgang</strong>Vad förbättrades, vad att jobba med</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Lunch</strong>På banrestaurangen eller ett handplockat ställe (Signature-dagen)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Vilken bana?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Banan väljs alltid med dig.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>En grupp med nybörjare, en kortare halvdag — det finns banor som passar bättre, och jag berättar ärligt vilken. Några är endast för medlemmar — tillgang kan arrangeras.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Vem det är för</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>Upplevelsen anpassas efter ditt spel.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>Den besökande golfaren</h3><p>En handicap-golfspelare som vill att Mallorca-rundan ska vara genuint minnesvärd.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>Rang/bana-glappet</h3><p>Golfare vars övningsspel aldrig förs över. Problemet är nästan alltid banhantering.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>Executivgruppen</h3><p>Företag, chefer på besök och alla som vill ha en premium, fullt arrangerad dag.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>Nybörjaren</h3><p>Avslappnade golfare som vill ha expertsällskap utan skrämseltaktik.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>Den bosatta golfaren</h3><p>Bor på ön och söker regelbundet arbete med en professionell.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Vem som helst som vill ha mer</h3><p>Det enda kravet är att vilja ha en genuint annorlunda golfupplevelse.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Vad golfare säger</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>Med egna ord.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Att golfa med Andy var en enastående upplevelse. Han har en oöverträffad nivå av insikt och förmedlar den på ett sätt som är både subtilt och empatiskt. Efter bara 18 hål har jag upptäckt en ny gräns för min potential.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Insikten i beräkningarna bakom varje slag har förbättrat mitt beslutsfattande enormt. Det ögonblick som stack ut var att se Andy slå ett 3-järn 220 meter över ett dogleg höger med träd och lägga det på greenen.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy förändrade helt hur jag tänker på banhantering. Efter 18 hål med honom på Son Gual slog jag mitt bästa resultat där och förstod faktiskt varför.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Upplevelser & Paket</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tre nivåer. Alla privata, alla personligt guidade.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Skillnaden är hur komplett dagen är. Alla tre inkluderar samma nivå av coachingexpertis.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Mallorca-rundan</p>
            <h3 className="tier__name">Spela med ett Proffs</h3>
            <p className="tier__price">€350 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Bana matchad efter ditt spel</li>
              <li>Starttid säkrad och hanterad</li>
              <li>Briefing och uppvarmning</li>
              <li>18 hål bredvid Andy</li>
              <li>Coaching på banan</li>
              <li>Genomgång efteråt</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Förfrågan &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">Signature-dagen</p>
            <h3 className="tier__name">Guidad Golfdag</h3>
            <p className="tier__price">Från €450 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Allt i Mallorca-rundan</li>
              <li>Son Gual eller Alcanada</li>
              <li>Lång lunch på banrestaurangen</li>
              <li>Utvald överraskning</li>
              <li>Avspänt tempo — en hel dag</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Förfrågan &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">Den Kompletta Upplevelsen</p>
            <h3 className="tier__name">Skräddarsydd Golfresa</h3>
            <p className="tier__price">På förfrågan</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Flerbanorsdag eller fullständigt program</li>
              <li>Privat transport från Palma</li>
              <li>Middag på handplockat restaurang</li>
              <li>Spa eller återhämtning</li>
              <li>Fullständig concierge-koordination</li>
              <li>För grupper, företag & skräddarsydda önskningar</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Förfrågan &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela Mallorca ordentligt?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Hör av dig och låt oss arrangera din dag.</h2>
          <p>Berätta om dina datum, ditt handicap och vad du vill ha ut av dagen. Jag återkommer med en rekommendation — personligen, inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Boka din dag &rarr;</Link>
          <Link href="/sv/golf-courses" className="btn btn--outline-white">Utforska banorna</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Frågeformulär inför rundan &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}
