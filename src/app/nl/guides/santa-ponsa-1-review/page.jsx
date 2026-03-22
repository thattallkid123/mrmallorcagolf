import PageLayout from '../../../../components/PageLayout'
import RevealObserver from '../../../../components/RevealObserver'
import PostLayout from '../../../guides/PostLayout'


function PostImage({ src, alt, caption }) {
  return (
    <figure style={{margin:'2rem 0',padding:0}}>
      <img src={src} alt={alt} loading="lazy"
        style={{width:'100%',height:'auto',maxHeight:520,objectFit:'cover',objectPosition:'center',display:'block'}} />
      {caption && <figcaption style={{fontSize:'0.78rem',color:'var(--taupe)',marginTop:'0.5rem',fontStyle:'italic',lineHeight:1.5}}>{caption}</figcaption>}
    </figure>
  )
}
export const metadata = {
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  description: "Santa Ponsa 1 golf course Mallorca reviewed by a PGA professional. One of Europe",
  alternates: { canonical: 'https://mrmallorcagolf.com/nl/guides/santa-ponsa-1-review' },
}

const meta = {
  badge: 'Course Review', badgeGold: true, readTime: '6 min read', updated: 'March 2026',
  title: "Golf Santa Ponsa 1, Mallorca — A PGA Professional",
  intro: "Een van de langste banen op het eiland. European Tour-geschiedenis. En de fairways zijn breed genoeg voor de driver.",
  lang: 'nl',
  related: [
    { slug: 'son-gual-review', title: 'Son Gual Golf — Honest Review 2026' },
  ],
}

export default function Post() {
  return (
    <PageLayout lang="nl">
      <RevealObserver />
      <PostLayout meta={meta} lang="nl">

        <PostImage
          src="/images/santa-ponsa-blog/sp-hero.jpg"
          alt="Golf Santa Ponsa 1 — waterreflectie en fairway"
          caption="Het 16e green. Het meer komt in het spel bij de benadering en scherpt de concentratie aanzienlijk."
        />

        <p>Santa Ponsa 1 is de enige publieke baan van de Santa Ponsa-groep en de baan met een echt European Tour-pedigree — het was gastheer van de DP World Tour Mallorca Golf Open 2021. Dit is de baan die professioneel golf van het hoogste niveau na een decennium afwezigheid terugbracht naar het eiland. De winnaar, Jeff Winther, speelde twee keer een 62 in de openingsrondes. De baan was er klaar voor.</p>

        <h2>Waarom het bij mijn spel past — en waarschijnlijk bij het jouwe</h2>
        <p>Ik zeg het direct: deze baan heeft me geholpen mijn vertrouwen in de driver terug te vinden. Na rondes op Son Gual of Alcanada, waar baanmanagement vaak betekent dat de driver in de tas blijft, is Santa Ponsa 1 een heel ander gesprek. De fairways zijn breed, de openingsholes zijn royaal, en de baan beloont een agressieve aanpak van de tee oprecht.</p>
        <p>Met mijn afstand hou ik na een goede drive vaak een pitching wedge over naar de par-4 greens. Voor spelers met meer gemiddelde afstanden biedt de baan een echte test als de wind aantrekt — maar het is het soort uitdaging dat vertrouwen opbouwt in plaats van het af te breken.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-1.jpg"
          alt="Santa Ponsa 1 fairway met bergen op de achtergrond"
          caption="De fairways zijn echt breed. Dit is een baan die de driver uitnodigt."
        />

        <h2>De 10e hole</h2>
        <p>Met 590 meter is de 10e hole een van de langste par-5s in Europa. Hem tegen de wind spelen maakt het nog langer aanvoelen. Er is een echt bevredigende versie van dit hole — driver, hybrid, wedge — en een veel minder bevredigende versie waarbij een van die drie misloopt. De par-3s zijn het andere uiterste: lang, met kleine greens. Schadebeperking, geen birdie-kansen.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-2.jpg"
          alt="Baanindeling en fairways van Santa Ponsa 1"
          caption="De lay-out. Op een rustige dag flatteert deze baan je. Voeg wind toe en hij verdient elke meter van zijn lengte."
        />

        <h2>De DP World Tour-connectie</h2>
        <p>Het organiseren van de DP World Tour Mallorca Golf Open 2021 was betekenisvol voor het eiland. Het was het eerste European Tour-evenement hier in tien jaar, en Santa Ponsa 1 hield stand onder kritisch oog. De baanconditie in de toernooiweek, het verloop onder druk, de scores die haalbaar waren zonder dat de baan capituleerde — het werkte allemaal. Dat pedigree is echt, en het is te zien in hoe de baan zich aan bezoekers presenteert.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-3.jpg"
          alt="Santa Ponsa 1, benadering van een par-3"
          caption="De Tramuntana-gebergten op de achtergrond. Holes 5, 6 en 7 hebben de beste bergzichten."
        />

        <h2>De bergzichten</h2>
        <p>Holes 5, 6 en 7 op de frontnine bieden enkele van de beste Tramuntana-uitzichten op het eiland. Hoog gras, volwassen bomen, wilde bloemen, en de bergen die alles erachter omlijsten. Het is het soort achtergrond dat een slechte slag iets draaglijker maakt. Iets.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-5.jpg"
          alt="Andy Griffiths vroeg in de ochtend op Santa Ponsa 1"
          caption="Vroeg vertrek. Tegen de ochtend vindt de wind normaal zijn weg naar de baan."
        />

        <div className="post-fact">
          <div className="post-fact__item"><span className="post-fact__val">€77–126</span><span className="post-fact__label">Green fee bereik 2026</span></div>
          <div className="post-fact__item"><span className="post-fact__val">8/10</span><span className="post-fact__label">Moeilijkheid</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Par 72</span><span className="post-fact__label">Kampioenschapsindeling</span></div>
          <div className="post-fact__item"><span className="post-fact__val">Public</span><span className="post-fact__label">Open voor alle bezoekers</span></div>
        </div>

        <h2>Green fees 2026</h2>
        <p>Hoogseizoen (half maart tot begin juni, half september tot begin november): €126. Middenseizoen: €106. Laagseizoen: €77. Volledige details op golf-santaponsa.com. Een geldig WHS-handicapcertificaat is vereist.</p>
        <p>Buggy €43 voor 18 holes. Clubverhuur €40. De baan is publiek en vrij te boeken — geen lidmaatschap vereist. Boek vooraf in het hoogseizoen; de DP World Tour-geschiedenis trekt bezoekers die weten waarvoor ze komen.</p>

        <h2>Oordeel</h2>
        <p>Als je de bal goed slaat en je daar goed bij wil voelen, speel dan Santa Ponsa 1. Als je twijfelt tussen Son Gual en Alcanada voor een serieuze dag en iets wil dat van beide afwijkt — opener, meer vertrouwen opbouwend, met echte European Tour-geschiedenis erbij — dit is de baan. De par-3s houden je eerlijk. De rest van de ronde geeft je iets terug.</p>

        <PostImage
          src="/images/santa-ponsa-blog/sp-4.jpg"
          alt="Uitzichten over Santa Ponsa 1"
          caption="De backnine opent zich. De 10e hole is 590 meter vanaf de achterste tees — een van de langste par-5s in Europa."
        />

        <div className="post-cta">
          <p>Wil je Santa Ponsa 1 spelen als onderdeel van een Mallorca-golfdag? Ik kan het regelen.</p>
          <a href="/play-with-a-pro">Bekijk de play-with-a-pro-ervaring →</a>
        </div>


      </PostLayout>
    </PageLayout>
  )
}
