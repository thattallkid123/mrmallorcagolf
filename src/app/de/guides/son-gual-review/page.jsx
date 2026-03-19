import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'

export const metadata = {
  title: "Son Gual Golf Mallorca â€” Ehrliche Bewertung eines PGA Professionals 2026",
  description: "Son Gual Golfplatz Mallorca bewertet von einem PGA Professional, der dort regelmÃ¤ÃŸig spielt. Greenfees, Schwierigkeit, was Sie erwartet.",
  alternates: { canonical: 'https://mrmallorcagolf.com/de/guides/son-gual-review' },
}

const meta = {
  badge: 'Platz-Bewertung', badgeGold: true, readTime: '6 Min. Lesezeit', updated: 'MÃ¤rz 2026',
  title: "Son Gual Golf Mallorca â€” Ehrliche Bewertung eines PGA Professionals (2026)",
  intro: "Mein meistgespielter Platz auf der Insel. Der Wind, die Greens, die SchlusslÃ¶cher â€” und warum Obama und Nadal immer wiederkommen.",
  lang: 'de',
  related: [
    { slug: 'alcanada-review', title: 'Alcanada Golf â€” Ehrliche Bewertung 2026' },
    { slug: 'best-golf-courses-mallorca', title: 'Die besten GolfplÃ¤tze auf Mallorca 2026' },
    { slug: 'golf-cost-mallorca', title: 'Was kostet Golf auf Mallorca?' },
    { slug: 'best-time-play-golf-mallorca', title: 'Beste Reisezeit fÃ¼r Golf auf Mallorca' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="de">
      <RevealObserver />
      <PostLayout meta={meta} lang="de">

        <p style={{fontSize:'0.82rem',color:'var(--taupe)',fontStyle:'italic',borderBottom:'1px solid var(--linen)',paddingBottom:'1rem',marginBottom:'1.5rem'}}>Dieser Artikel wurde auf Englisch verfasst und ins Deutsche Ã¼bersetzt.</p>

        <p>Son Gual ist mein meistgespielter Platz auf Mallorca und derjenige, den ich am konsequentesten empfehle, wenn Kunden fragen, wo sie spielen sollen. Ich mÃ¶chte ehrlich darÃ¼ber sein, warum â€” und ehrlich darÃ¼ber, was ihn schwer macht, denn er ist schwer, und wer einen entspannten Tag erwartet, wird Ã¼berrascht sein.</p>

        <h2>Der erste Abschlag</h2>
        <p>Als ich Son Gual zum ersten Mal spielte, stand ich auf den schwarzen AbschlÃ¤gen, Wind kam hart von links, und ich spielte neben einem PGA-Profi-Freund, der gut spielt und scored. Die Kamera lief fÃ¼r einen Vlog, was zusÃ¤tzlichen Druck erzeugt. Ich war wirklich ein wenig nervÃ¶s.</p>
        <p>Der Drive traf die Ferse leicht. Er flog dennoch weiter als erwartet und vermied die Bunker â€” knapp. Es gibt so viele Bunker auf Son Gual, genau dort positioniert, wo leicht fehlgeschlagene SchlÃ¤ge landen. Man kalkuliert Wind, HÃ¶henunterschiede, inkonsistentes Ballschlagen â€” und die Bunker scheinen grÃ¶ÃŸer zu werden, je lÃ¤nger man sie betrachtet.</p>

        <h2>Der Wind</h2>
        <p>Son Gual scheint in seinem eigenen Ã–kosystem zu leben. Ich verlasse mein Haus im SÃ¼dwesten der Insel bei ruhigem Wetter und komme am ersten Abschlag an, um festzustellen, dass es ordentlich blÃ¤st â€” und das bleibt vier Stunden so. Mit dem Wind zu spielen ist ein VergnÃ¼gen. Gegen den Wind auf einem langen Par Vier, der plÃ¶tzlich ein lÃ¤cherlich langer Par Vier wird â€” das ist eine andere Erfahrung.</p>

        <div className="post-pull">
          <p>â€žIch habe mein Haus bei ruhigem Wetter verlassen und am ersten Abschlag starken Wind vorgefunden. Er blieb vier Stunden lang."</p>
        </div>

        <h2>Die Greens</h2>
        <p>Schnell, erhÃ¶ht und gnadenlos gegenÃ¼ber schlechtem Anspiel. Im Januar waren die Greens und das Vorgreen so eng gemÃ¤ht, dass es fÃ¼r diese Jahreszeit bemerkenswert war. Ideal fÃ¼r Spin-Erzeugung, aber unangenehm beim Blick auf einen engen Chip mit kleiner LandeflÃ¤che.</p>
        <p>Eine meiner Spielpartnerinnen â€” eine frÃ¼here SchÃ¼lerin aus China â€” griff nach dem Putter in der Ãœberzeugung, auf dem Green zu stehen. Sie hatte noch etwa 30 Yards Vorgreen vor sich. Die Pflege ist so akribisch.</p>

        <h2>Der Platz</h2>
        <p>Thomas Himmels Design von 2007 nutzt die HÃ¶henunterschiede intelligent. Das 2. Loch beherbergt einen der grÃ¶ÃŸten Bunker Europas. Die Schlusssequenz ab dem 15. gilt weithin als eine der feinsten Abschlussfolgen im europÃ¤ischen Golf â€” und nachdem ich sie gespielt habe, wÃ¼rde ich zustimmen. Der Blick Ã¼ber die Bucht von Palma ist zwischen den LÃ¶chern 8â€“12 am besten. Das Restaurant teilt diesen Blick und ist einen Aufenthalt nach der Runde wert.</p>

        <h2>Bekannte Besucher</h2>
        <p>Rafa Nadal spielt hier regelmÃ¤ÃŸig â€” sein erklÃ¤rter Lieblingsplatz auf der Insel. Barack Obama spielte im November 2024, und General Manager Andreas Pamer beschrieb ihn als ausgesprochen sympathisch und sagte, er habe versprochen, wiederzukommen.</p>

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">â‚¬80â€“165</span><span className="post-fact__label">Greenfee-Bereich 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">9/10</span><span className="post-fact__label">Schwierigkeit</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Championship-Layout</span></div>
          <div className="post-fact__item"><span className="post-fact__val">2007</span><span className="post-fact__label">Von Thomas Himmel entworfen</span></div>
        </div>

        <h2>Greenfees 2026</h2>
        <p>Nebensaison (Mitte November bis Dezember): â‚¬115. Januar-Wartungsfenster: â‚¬80 fÃ¼r 9 LÃ¶cher. FrÃ¼hjahr- und Herbstpeak (MÃ¤rzâ€“Mai, Septemberâ€“November): â‚¬165. Sommer (Juliâ€“August): â‚¬115. VollstÃ¤ndige saisonale Ãœbersicht auf son-gual.com.</p>
        <p>LeihausrÃ¼stung im Pro Shop: Callaway â‚¬35, Titleist â‚¬45 pro Runde. Buggy â‚¬45, Elektrotrolley ab â‚¬15. Ein gÃ¼ltiger WHS-Handicap-Nachweis ist fÃ¼r die Buchung erforderlich.</p>

        <h2>Fazit</h2>
        <p>Son Gual ist mein Lieblingsplatz auf Mallorca. Er wÃ¼rde gegenÃ¼ber jedem Platz bestehen, den ich auf meinen Reisen gespielt habe â€” die Pflege, die Designintelligenz und die Lage sind auÃŸergewÃ¶hnlich. Es ist kein Platz, auf dem man ohne ein gewisses Spielniveau erscheinen sollte, aber fÃ¼r jeden Golfer, der eine ernsthafte Runde in einem ernsthaften Ambiente sucht, ist dies der richtige.</p>

        <div className="post-cta">
          <p>Ich bringe regelmÃ¤ÃŸig GÃ¤ste nach Son Gual. MÃ¶chten Sie es mit jemandem spielen, der jeden Loch kennt?</p>
          <a href="/de/play-with-a-pro">Das Play-with-a-Pro-Erlebnis â†’</a>
        </div>

      </PostLayout>
    </PageLayout>
  )
}
