import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Spela med ett Proffs â€” Privata Golfdagar pÃ¥ Mallorca',
  description: 'En privat golfrunda pÃ¥ Mallorca med UK PGA Advanced Professional Andy Griffiths. Coaching pÃ¥ banan, hel dag arrangerad. FrÃ¥n â‚¬350 per person.',
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
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Privata Golfdagar Â· Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>En Privat Golfdag pÃ¥ Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Inte en lektion. Inte en vanlig runda. En privat dag pÃ¥ en av ons finaste banor, guidad av en UK PGA-proffs som coachat pÃ¥ hÃ¶gsta nivÃ¥ pÃ¥ tre kontinenter.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>â‚¬350 per person + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/sv/contact" className="btn btn--gold">Boka din dag &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Se paket</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Vad dagen innehÃ¥ller</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Innan du anlÃ¤nder vet jag redan vad jag ska se efter.</h2>
          <p>Innan du anlÃ¤nder fyller du i ett kort frÃ¥geformulÃ¤r. Vad som frustrerar dig, var glappet Ã¤r. NÃ¤r vi nÃ¥r fÃ¶rsta teet vet jag redan vad jag ska se efter.</p>
          <p>Under rundan vavs coachingen in naturligt â€” inte en lÃ¶pande kommentar, utan rÃ¤tt observation vid rÃ¤tt tillfÃ¤lle.</p>
          <p>Jag har coachat i miljÃ¶er dÃ¤r fÃ¶rvÃ¤ntningen var seriÃ¶s, mÃ¤tbar fÃ¶rbÃ¤ttring â€” landslaget i Kina, golffanatiker Ã¶ver hela Asien.</p>
          <div className="pull-quote"><p>&ldquo;Det de flesta golfare upptacker Ã¤r att de gÃ¥r dÃ¤rifrÃ¥n och spelar mÃ¤rkbart bÃ¤ttre och med stÃ¶rre sjÃ¤lvfÃ¶rtroende â€” och fÃ¶rstÃ¥r varfÃ¶r.&rdquo;</p></div>
          <p>GenomgÃ¥ngen Ã¶ver lunchen Ã¤r inte en sammanfattning. Det Ã¤r samtalet som ger hela dagen mening.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Redan bokat?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Fyll i ditt frÃ¥geformulÃ¤r infÃ¶r rundan &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Tar 3 minuter. HjÃ¤lper mig anpassa dagen fÃ¶r dig innan vi nÃ¥r fÃ¶rsta tee.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Vad som ingar</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Banval</strong>Matchat efter ditt spel, handicap och fÃ¶rvÃ¤ntning</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Starttid</strong>SÃ¤krad och hanterad</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing fÃ¶re rundan</strong>Vad du kan vÃ¤nta pÃ¥ banan</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hÃ¥l bredvid Andy</strong>Spela, som din partner</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching pÃ¥ banan</strong>Banhantering, slagsval, beslutsfattande</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Genomgang</strong>Vad fÃ¶rbÃ¤ttrades, vad att jobba med</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Lunch</strong>PÃ¥ banrestaurangen eller ett handplockat stÃ¤lle (Signature-dagen)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Vilken bana?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Banan vÃ¤ljs alltid med dig.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>En grupp med nybÃ¶rjare, en kortare halvdag â€” det finns banor som passar bÃ¤ttre, och jag berÃ¤ttar Ã¤rligt vilken. NÃ¥gra Ã¤r endast fÃ¶r medlemmar â€” tillgang kan arrangeras.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Vem det Ã¤r fÃ¶r</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>Upplevelsen anpassas efter ditt spel.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>Den besÃ¶kande golfaren</h3><p>En handicap-golfspelare som vill att Mallorca-rundan ska vara genuint minnesvÃ¤rd.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>Rang/bana-glappet</h3><p>Golfare vars Ã¶vningsspel aldrig fÃ¶rs Ã¶ver. Problemet Ã¤r nÃ¤stan alltid banhantering.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>Executivgruppen</h3><p>FÃ¶retag, chefer pÃ¥ besÃ¶k och alla som vill ha en premium, fullt arrangerad dag.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>NybÃ¶rjaren</h3><p>Avslappnade golfare som vill ha expertsÃ¤llskap utan skrÃ¤mseltaktik.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>Den bosatta golfaren</h3><p>Bor pÃ¥ Ã¶n och sÃ¶ker regelbundet arbete med en professionell.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Vem som helst som vill ha mer</h3><p>Det enda kravet Ã¤r att vilja ha en genuint annorlunda golfupplevelse.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Vad golfare sÃ¤ger</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>Med egna ord.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Att golfa med Andy var en enastÃ¥ende upplevelse. Han har en oÃ¶vertrÃ¤ffad nivÃ¥ av insikt och fÃ¶rmedlar den pÃ¥ ett sÃ¤tt som Ã¤r bÃ¥de subtilt och empatiskt. Efter bara 18 hÃ¥l har jag upptÃ¤ckt en ny grÃ¤ns fÃ¶r min potential.&rdquo;</p><span className="testimonial__author">â€” Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Insikten i berÃ¤kningarna bakom varje slag har fÃ¶rbÃ¤ttrat mitt beslutsfattande enormt. Det Ã¶gonblick som stack ut var att se Andy slÃ¥ ett 3-jÃ¤rn 220 meter Ã¶ver ett dogleg hÃ¶ger med trÃ¤d och lÃ¤gga det pÃ¥ greenen.&rdquo;</p><span className="testimonial__author">â€” Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy fÃ¶rÃ¤ndrade helt hur jag tÃ¤nker pÃ¥ banhantering. Efter 18 hÃ¥l med honom pÃ¥ Son Gual slog jag mitt bÃ¤sta resultat dÃ¤r och fÃ¶rstod faktiskt varfÃ¶r.&rdquo;</p><span className="testimonial__author">â€” Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Upplevelser & Paket</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tre nivÃ¥er. Alla privata, alla personligt guidade.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Skillnaden Ã¤r hur komplett dagen Ã¤r. Alla tre inkluderar samma nivÃ¥ av coachingexpertis.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Mallorca-rundan</p>
            <h3 className="tier__name">Spela med ett Proffs</h3>
            <p className="tier__price">â‚¬350 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Bana matchad efter ditt spel</li>
              <li>Starttid sÃ¤krad och hanterad</li>
              <li>Briefing och uppvarmning</li>
              <li>18 hÃ¥l bredvid Andy</li>
              <li>Coaching pÃ¥ banan</li>
              <li>GenomgÃ¥ng efterÃ¥t</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">FÃ¶rfrÃ¥gan &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">Signature-dagen</p>
            <h3 className="tier__name">Guidad Golfdag</h3>
            <p className="tier__price">FrÃ¥n â‚¬450 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Allt i Mallorca-rundan</li>
              <li>Son Gual eller Alcanada</li>
              <li>LÃ¥ng lunch pÃ¥ banrestaurangen</li>
              <li>Utvald Ã¶verraskning</li>
              <li>AvspÃ¤nt tempo â€” en hel dag</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">FÃ¶rfrÃ¥gan &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">Den Kompletta Upplevelsen</p>
            <h3 className="tier__name">SkrÃ¤ddarsydd Golfresa</h3>
            <p className="tier__price">PÃ¥ fÃ¶rfrÃ¥gan</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Flerbanorsdag eller fullstÃ¤ndigt program</li>
              <li>Privat transport frÃ¥n Palma</li>
              <li>Middag pÃ¥ handplockat restaurang</li>
              <li>Spa eller Ã¥terhÃ¤mtning</li>
              <li>FullstÃ¤ndig concierge-koordination</li>
              <li>FÃ¶r grupper, fÃ¶retag & skrÃ¤ddarsydda Ã¶nskningar</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">FÃ¶rfrÃ¥gan &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela Mallorca ordentligt?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>HÃ¶r av dig och lÃ¥t oss arrangera din dag.</h2>
          <p>BerÃ¤tta om dina datum, ditt handicap och vad du vill ha ut av dagen. Jag Ã¥terkommer med en rekommendation â€” personligen, inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Boka din dag &rarr;</Link>
          <Link href="/sv/golf-courses" className="btn btn--outline-white">Utforska banorna</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">FrÃ¥geformulÃ¤r infÃ¶r rundan &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

