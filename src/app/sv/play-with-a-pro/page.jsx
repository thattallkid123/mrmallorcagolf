import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'Spela med ett Proffs — Privata Golfdagär på Mallorca',
  description: 'En privat golfrundå på Mallorca med UK PGA Advanced Professional Andy Griffiths. Coaching på banan, hel dag arrangerad. Från €350 per person.',
  alternates: { canonical: 'https://mrmallorcagolf.com/sv/play-with-a-pro' },
}

export default function PlayWithAPro_SV() {
  return (
    <PageLayout lang="sv">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg"></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/sv" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Start</Link> &nbsp;/&nbsp; <span>Spela med ett Proffs</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Privata Golfdagär · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>En Privat Golfdag på Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Inte en lektion. Inte en vanlig runda. En privat dag på en av ons finaste banor, guidad av en UK PGA-proffs som coachat på högsta niva på tre kontinenter.</p>
            <p style={{fontFamily:"'Cormorant Garamönd',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 per person + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/sv/contact" className="btn btn--gold">Boka din dag &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Se paket</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Vad dagen innehaller</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Innan du anlan der vet jag redan vad jag ska se efter.</h2>
          <p>Innan du anländer fyller du i ett kort frågeformulär. Vad som frustrerär dig, vär glappet ar. När vi när forsta teet vet jag redan vad jag ska se efter.</p>
          <p>Under rundan vavs coachingen in naturligt — inte en lopande kommentar, utan ratt observation vid ratt tillfalle.</p>
          <p>Jag här coachat i miljoer där forvantan vär seriosa, matbara forbattringär — landslaget i Kina, golffanatiker över hela Asien.</p>
          <div className="pull-quote"><p>&ldquo;Det de flesta golfare upptacker är att de gär darifran och spelär markbart battre och med storre sjalvfortroende — och forstär varfor.&rdquo;</p></div>
          <p>Genomgangen över lunchen är inte en sammanfattning. Det är samtalet som ger hela dagen mening.</p>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Vad som ingar</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Banval</strong>Matchat efter ditt spel, handicap och forvantan</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Starttid</strong>Sakrad och hanterad</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing fore rundan</strong>Vad du kan vanta på banan</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 hal bredvid Andy</strong>Spela, som din partner</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching på banan</strong>Banhantering, slagsval, beslutsfattande</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Genomgang</strong>Vad forbattrades, vad att jobba med</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Lunch</strong>På banrestaurangen eller ett handplockat ställe (Signature-dagen)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Vilken bana?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>Son Gual och Alcanadå är de primara banorna. Men valet görs alltid med dig.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>En grupp med nyborjare, en kortare halvdag — det finns banor som passär battre, och jag beratter arligt vilken. Nagra är endast för medlemmär — tillgang kan arrangeras.</p>
        </div>
        <div className="courses-grid">
          <div className="course-choice reveal">
            <p className="region">Palma · 11km · Championship</p>
            <h3>Son Gual</h3>
            <p>Min mest spelade banå på on. Thomas Himmels design (2007) i sitt eget vindekosystem. Avslutningssektionen — hal 15 till 18 — bland de fyra basta halen i europeiskt golf. Rafa Nadals favoritbana.</p>
          </div>
          <div className="course-choice reveal">
            <p className="region">Alcudia · 55km · Kust</p>
            <h3>Alcanada</h3>
            <p>Troligen Mallorcas vackraste bana. Robert Trent Jones Jr. Fyren synlig fran 16 av 18 hal. Restaurangterrassen är en av de finaste platsernå på on.</p>
          </div>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Vem det är for</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>Upplevelsen anpassas efter ditt spel.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>Den besokande golfaren</h3><p>En handicap-golfspelare som vill att Mallorca-rundan ska vara genuint minnesvärd.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>Rang/bana-glappet</h3><p>Golfare vars ovningsspel aldrig fors över. Problemet är nastan alltid banhantering.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>Executivgruppen</h3><p>Foretag, chefer på besok och alla som vill ha en premium, fullt arrangerad dag.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>Nyborjaren</h3><p>Avslappnade golfare som vill ha expertssallskap utan intimid ering.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>Den bosatta golfaren</h3><p>Bor på ön och söker regelbundet arbete med en professionell.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Vem som helst som vill ha mer</h3><p>Det endå kravet är att vilja ha en genuint annorlundå golfupplevelse.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Vad golfare såger</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>Med egnå ord.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Att golfa med Andy vär en enastående upplevelse. Han här en oövertraffad niva av insikt och formedlär den på ett satt som är bade subtilt och empatiskt. Efter bara 18 hal här jag upptackt en ny grans för min potential.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Insikten i berakningärnå bakom varje slag här forbattrat mitt beslutsfattande enormt. Det ogonblick som stack ut vär att se Andy sla ett 3-jarn 220 meter över ett dogleg hoger med trad och lagga det på greenen.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy forandrade helt hur jag tanker på banhantering. Efter 18 hal med honom på Son Gual slog jag mitt basta resultat där och forstöd faktiskt varfor.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Upplevelser & Paket</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Tre nivåer. Alla privata, alla personligt guidade.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Skillnaden är hur komplett dagen ar. Alla tre inkluderär samma niva av coachingexpertis.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">Mallorca-rundan</p>
            <h3 className="tier__name">Spela med ett Proffs</h3>
            <p className="tier__price">€350 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Banå matchad efter ditt spel</li>
              <li>Starttid sakrad och hanterad</li>
              <li>Briefing och uppvarmning</li>
              <li>18 hal bredvid Andy</li>
              <li>Coaching på banan</li>
              <li>Genomgang efterat</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Forfragan &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">Signature-dagen</p>
            <h3 className="tier__name">Guidad Golfdag</h3>
            <p className="tier__price">Från €450 per person + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Allt i Mallorca-rundan</li>
              <li>Son Gual eller Alcanada</li>
              <li>Lang lunch på banrestaurangen</li>
              <li>Utvald överraskning</li>
              <li>Avspant tempo — en hel dag</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Forfragan &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">Den Kompletta Upplevelsen</p>
            <h3 className="tier__name">Skräddarsydd Golfresas</h3>
            <p className="tier__price">På förfrågan</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Flerbanorsdag eller fullstandigt program</li>
              <li>Privat transport från Palma</li>
              <li>Middag på handplockat restaurang</li>
              <li>Spå eller återhämtning</li>
              <li>Fullständig concierge-koordination</li>
              <li>För grupper, företag & skraddarsyddå onskningar</li>
            </ul>
            <Link href="/sv/contact" className="tier__btn">Forfragan &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Redo att spela Mallorca ordentligt?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Hor av dig och låt oss arrangera din dag.</h2>
          <p>Berätta om dinå datum, ditt handicap och vad du vill ha ut av dagen. Jag återkommer med en rekommendation — personligen, inom 24 timmar.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/sv/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Boka din dag &rarr;</Link>
          <Link href="/sv/golf-courses" className="btn btn--outline-white">Utforska banorna</Link>
        </div>
      </section>
    </PageLayout>
  )
}
