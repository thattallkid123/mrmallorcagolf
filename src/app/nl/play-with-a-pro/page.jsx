import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import { buildPlayWithAProMetadata } from '../../../lib/page-metadata'

export const metadata = buildPlayWithAProMetadata('nl')

export default function PlayWithAPro_NL() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb"><Link href="/nl" className="breadcrumb__link">Home</Link> &nbsp;/&nbsp; <span>Spelen met een Pro</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>Privegolfdagen · Mallorca</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>Een Privegolfdag op Mallorca.</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>Geen les. Geen standaard ronde. Een privitage dag op een van de mooiste banen van het eiland, begeleid door een UK PGA professional die met twee decennia ervaring op drie continenten heeft gecoacht.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>€350 p.p. + green fee</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/nl/contact" className="btn btn--gold">Reserveer uw dag &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">Bekijk pakketten</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">Wat de dag inhoudt</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>Voordat u aankomt, weet ik al waar ik op moet letten.</h2>
          <p>Voordat u aankomt vult u een korte vragenlijst in. Wat u frustreert, waar de kloof is. Wanneer we de eerste tee bereiken, weet ik al waar ik op moet letten.</p>
          <p>Tijdens de ronde wordt de coaching op natuurlijke wijze verweven — geen lopend commentaar, maar de juiste observatie op het juiste moment.</p>
          <p>Ik heb gecoacht in omgevingen waar de verwachting serieuze, meetbare verbetering was — nationaal team spelers in China, golffanaten door heel Azie.</p>
          <div className="pull-quote"><p>&ldquo;Wat de meeste golfers ontdekken: ze vertrekken merkbaar beter spelend en zelfverzekerder — en begrijpen waarom, wat het deel is dat blijft.&rdquo;</p></div>
          <p>De nabespreking tijdens de lunch is geen samenvatting. Het is het gesprek dat de hele dag zinvol maakt.</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>Al geboekt?</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>Vul je pre-ronde vragenlijst in &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>Duurt 3 minuten. Helpt me de dag op jou af te stemmen voor we bij de eerste tee staan.</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>Wat is inbegrepen</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>Baankeuze</strong>Afgestemd op uw spel, handicap en verwachtingen</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Starttijd</strong>Geboekt en volledig geregeld</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Briefing voor de ronde</strong>Wat te verwachten van de baan</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>18 holes naast Andy</strong>Spelend, als uw partner</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Coaching op de baan</strong>Baanbeheer, clubkeuze, besluitvorming</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Nabespreking</strong>Wat verbeterde, wat te werken</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>Lunch</strong>Op de baanrestaurant of lokaal (Signature Dag)</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>Welke baan?</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>De baan wordt altijd met u gekozen.</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>Een groep met beginners, een kortere halve dag — er zijn banen die beter werken, en ik vertel u eerlijk welke. Sommige zijn alleen voor leden — die toegang kan worden geregeld.</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">Voor wie dit is</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>De ervaring past zich aan uw spel aan.</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>De bezoekende golfer</h3><p>Een handicap-golfer die zijn Mallorca-ronde echt onvergetelijk wil maken.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>Het range/baan-gat</h3><p>Golfers wier oefenspel zich nooit vertaalt. Het probleem is bijna altijd baanbeheer.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>De directeurengroep</h3><p>Bedrijfsgroepen, leidinggevenden op bezoek, een premium, volledig geregelde dag.</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>De beginner</h3><p>Recreatieve golfers die deskundige begeleiding willen zonder intimidatie.</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>De vaste golfer</h3><p>Gevestigd op het eiland en op zoek naar regelmatig werk met een professional.</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>Iedereen die meer wil</h3><p>De enige voorwaarde is een genuien andere golfervaring willen.</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>Wat golfers zeggen</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>In hun eigen woorden.</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;Golf spelen met Andy was een geweldige ervaring. Hij heeft een ongeevenaardniveau van inzicht en brengt het op een subtiele en empathische manier over. Na slechts 18 holes heb ik een nieuw plafond voor mijn potentieel ontdekt.&rdquo;</p><span className="testimonial__author">— Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;Het inzicht in de berekeningen achter elk schot heeft mijn besluitvorming enorm verbeterd. Het moment dat opviel: zien hoe Andy een 3-ijzer 220 meter sloeg over een dogleg rechts met bomen en het op de green plaatste.&rdquo;</p><span className="testimonial__author">— Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andy veranderde volledig hoe ik over baanbeheer denk. Na 18 holes met hem op Son Gual speelde ik mijn beste score daar en begreep ik eindelijk waarom.&rdquo;</p><span className="testimonial__author">— Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">Ervaringen & Pakketten</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>Drie niveaus. Allemaal privé, allemaal persoonlijk begeleid.</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>Het verschil is hoe compleet de dag is. Alle drie bevatten hetzelfde niveau van expertise op de baan.</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">De Mallorca Ronde</p>
            <h3 className="tier__name">Spelen met een Pro</h3>
            <p className="tier__price">€350 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Baan afgestemd op uw spel</li>
              <li>Starttijd geregeld</li>
              <li>Briefing en warming-up</li>
              <li>18 holes naast Andy</li>
              <li>Coaching op de baan</li>
              <li>Nabespreking achteraf</li>
            </ul>
            <Link href="/nl/contact" className="tier__btn">Aanvragen &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">De Signature Dag</p>
            <h3 className="tier__name">Begeleide Golfdag</h3>
            <p className="tier__price">Vanaf €450 p.p. + green fee</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Alles van De Mallorca Ronde</li>
              <li>Son Gual of Alcanada</li>
              <li>Uitgebreide lunch op de baan</li>
              <li>Geselecteerde verrassing</li>
              <li>Ontspannen tempo — een volledige dag</li>
            </ul>
            <Link href="/nl/contact" className="tier__btn">Aanvragen &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">De Volledige Ervaring</p>
            <h3 className="tier__name">Maatwerk Golfreis</h3>
            <p className="tier__price">Op aanvraag</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>Meerbanendag of volledig programma</li>
              <li>Privevervoer vanuit Palma</li>
              <li>Diner in handgekozen restaurant</li>
              <li>Spa of herstelsessie</li>
              <li>Volledige conciergecordinatie</li>
              <li>Voor groepen, bedrijven & maatwerk</li>
            </ul>
            <Link href="/nl/contact" className="tier__btn">Aanvragen &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">Klaar om Mallorca goed te spelen?</p>
          <h2 className="serif-display" style={{color:'#fff'}}>Neem contact op en laten we uw dag regelen.</h2>
          <p>Vertel me uw data, uw handicap en wat u van de dag wilt. Ik kom terug met een aanbeveling — persoonlijk, binnen 24 uur.</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/nl/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>Reserveer uw dag &rarr;</Link>
          <Link href="/nl/golf-courses" className="btn btn--outline-white">Verken de banen</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">Pre-ronde vragenlijst &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

