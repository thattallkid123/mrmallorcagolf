import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'
import CareerStrip from '../../../components/CareerStrip'

export const metadata = {
  title: 'å…³äºŽå®‰è¿ªÂ·æ ¼é‡Œè²æ€ â€” PGAèŒä¸šé€‰æ‰‹ï¼Œé©¬æ´›å¡',
  description: "å®‰è¿ªÂ·æ ¼é‡Œè²æ€æ˜¯è‹±å›½PGAé«˜çº§èŒä¸šé€‰æ‰‹ï¼ŒçŽ°å±…é©¬æ´›å¡ã€‚æ›¾ä»»èŒäºŽä½©å¸ƒå°”æ»©ã€åŸƒç»´æ˜‚ï¼Œåœ¨ä¸­å›½æ‰§æ•™11å¹´ã€‚",
  alternates: {
    canonical: 'https://mrmallorcagolf.com/zh/about',
    languages: {
      'en': 'https://mrmallorcagolf.com/about',
      'de': 'https://mrmallorcagolf.com/de/about',
      'es': 'https://mrmallorcagolf.com/es/about',
      'fr': 'https://mrmallorcagolf.com/fr/about',
      'nl': 'https://mrmallorcagolf.com/nl/about',
      'sv': 'https://mrmallorcagolf.com/sv/about',
      'zh': 'https://mrmallorcagolf.com/zh/about',
      'x-default': 'https://mrmallorcagolf.com/about',
    }
  }
}

const credentials = [
  { title: 'è‹±å›½PGAé«˜çº§èŒä¸šé€‰æ‰‹', detail: 'å·²è¿›è¡Œè¶…è¿‡15,000å°æ—¶çš„æ•™ç»ƒè¯¾ç¨‹' },
  { title: 'åº”ç”¨é«˜å°”å¤«ç®¡ç†ç ”ç©¶', detail: 'ä¼¯æ˜Žç¿°å¤§å­¦' },
  { title: 'TPI 3çº§è®¤è¯', detail: 'æ³°ç‰¹åˆ©æ–¯ç‰¹è¡¨çŽ°ç ”ç©¶æ‰€' },
  { title: 'Trackmanå¤§å¸ˆè®¤è¯', detail: 'ä¸­å›½é¦–ä½' },
  { title: 'US Kids Golfè®¤è¯', detail: 'å…¨çƒå‰50åæ•™ç»ƒ' },
  { title: 'åœ¨ä¸Šæµ·11å¹´', detail: 'æµåˆ©çš„æ™®é€šè¯' },
  { title: 'ä¸­å›½å›½å®¶é˜Ÿ', detail: 'é’å°‘å¹´ç²¾è‹±åŠç«žæŠ€æ•™ç»ƒ' },
  { title: 'æ•°åäº¿æ¬¡è§‚çœ‹', detail: 'æŠ–éŸ³é«˜å°”å¤«æ•™å­¦è§†é¢‘å†…å®¹' },
  { title: 'å‡ºç‰ˆä½œå®¶', detail: 'BOOK_LINK', isBookLink: true },
  { title: 'çŽ°å±…é©¬æ´›å¡', detail: 'è‡ª2025å¹´3æœˆèµ·' },
]


export default function About() {
  return (
    <>
    <link rel="preload" as="image" href="/images/about-secondary.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero about-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to top, rgba(26,25,22,0.88) 0%, rgba(26,25,22,0.4) 35%, transparent 65%), linear-gradient(to right, rgba(26,25,22,0.65) 0%, rgba(26,25,22,0.35) 55%, rgba(26,25,22,0.15) 100%), url(/images/about-secondary.jpg)',
        backgroundSize: 'auto, auto, cover',
        backgroundPosition: 'center, center, center 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">é¦–é¡µ</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>å…³äºŽ</span></p>
          <h1>ä½“éªŒèƒŒåŽ<br />çš„ä¸“ä¸šäººå£«ã€‚</h1>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:'1.25rem'}}>
            <span className="cred-tag cred-tag--gold">PGAé«˜çº§èŒä¸šé€‰æ‰‹</span>
            <span className="cred-tag">Trackmanå¤§å¸ˆè®¤è¯</span>
            <span className="cred-tag">TPI 3çº§</span>
            <span className="cred-tag">çŽ°å±…é©¬æ´›å¡</span>
          </div>
        </div>
      </header>

      <div className="story">
        <main className="story__main">
          <div className="chapter reveal">
            <p className="chapter__label">èŒä¸šæ—©æœŸ</p>
            <h2>è·Ÿéšä¸¤ä¸ªå¤§é™†ä¸Šæœ€ä¼˜ç§€çš„æ•™ç»ƒã€‚</h2>
            <p>æˆ‘ä»Žå°å°±æ‰“é«˜å°”å¤«ï¼Œæœ€å¥½æˆç»©è¾¾åˆ°+1è®©æ†æ•°ï¼Œä½†å¾ˆæ—©å°±æ„è¯†åˆ°æ‰§æ•™æ‰æ˜¯æˆ‘çš„æ–¹å‘ã€‚åœ¨ä¼¯æ˜Žç¿°å¤§å­¦å­¦ä¹ åº”ç”¨é«˜å°”å¤«ç®¡ç†å¹¶èŽ·å¾—PGAèŒä¸šè¯ä¹¦åŽï¼Œæˆ‘å¼€å§‹å»ºç«‹èŒä¸šç”Ÿæ¶¯ï¼Œè·Ÿéšæ¬§æ´²å’ŒåŒ—ç¾Žæœ€æœ‰ç»éªŒçš„æ•™ç»ƒã€‚</p>
            <p>æ—©æœŸçš„èŒä¸šç”Ÿæ¶¯è®©æˆ‘æ¥åˆ°äº†ä¸€äº›éžå‡¡çš„åœ°æ–¹ã€‚æˆ‘æ›¾åœ¨ä½©å¸ƒå°”æ»©ã€å¤šæ‹‰å°”ã€åŸƒç»´æ˜‚ï¼ˆå¥³å­å¤§æ»¡è´¯èµ›ï¼‰å’Œè‹±å›½å…¬å¼€èµ›æœŸé—´æ‰§æ•™ã€‚æˆ‘è¿˜åœ¨ä¸€è‰˜é‚®è½®ä¸Šæ‰§æ•™äº†ä¸€ä¸ªèµ›å­£ï¼Œè¿›è¡Œäº†ä¸–ç•Œèˆªç¨‹â€”â€”è¶…è¿‡40ä¸ªå›½å®¶ï¼Œæˆ‘ä½œä¸ºèŒä¸šé€‰æ‰‹å‡ ä¹Žæ— æ³•æ¶‰åŠçš„åœ°æ–¹éƒ½æœ‰äº†é«˜å°”å¤«ä½“éªŒã€‚</p>
            <div className="pull-quote"><p>&ldquo;æ¯ä¸ªçŽ¯å¢ƒéƒ½ä¸åŒã€‚æ¯ä¸ªé«˜å°”å¤«çƒæ‰‹éƒ½ä¸åŒã€‚è¿™ç§å¤šæ ·æ€§åœ¨æ—©æœŸå¡‘é€ äº†ä¹‹åŽçš„ä¸€åˆ‡ã€‚&rdquo;</p></div>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">ä¸Šæµ·ï¼Œ2014â€“2025</p>
            <h2>åœ¨ä¸­å›½é¡¶çº§æ‰§æ•™åä¸€å¹´ã€‚</h2>
            <p>2014å¹´ï¼Œæˆ‘æ¬åˆ°äº†ä¸Šæµ·ã€‚æˆ‘å¸¦ç€æ˜Žç¡®çš„ç›®æ ‡â€”â€”ä¸ºä¸­å›½æœ€å¥½çš„å­¦é™¢å»ºç«‹æ•™å­¦é¡¹ç›®â€”â€”å¹¶åœ¨é‚£é‡Œåº¦è¿‡äº†æˆåŠŸçš„11å¹´ã€‚</p>
            <p>ä¸­å›½åœ¨é‚£ä¸ªæ—¶æœŸæ˜¯ä¸€ä¸ªéžå‡¡çš„æ‰§æ•™çŽ¯å¢ƒã€‚è¯¾ç¨‹æ”¶è´¹çº¦æ¯å°æ—¶â‚¬500ã€‚å®¢æˆ·æœŸæœ›çœŸæ­£çš„ã€å¯è¡¡é‡çš„è¿›æ­¥ã€‚è¿™å°±æ˜¯æ ‡å‡†ã€‚èŒä¸šæ ‡å‡†ä¸Žæˆ‘åœ¨ä»»ä½•åœ°æ–¹å·¥ä½œçš„è¦æ±‚ä¸€æ ·é«˜ã€‚</p>
            <p>æˆ‘æˆä¸ºäº†è¯¥å›½é¦–ä½Trackmanå¤§å¸ˆï¼Œæ•™ç»ƒäº†æ¥è‡ªä¸­å›½å›½å®¶é˜Ÿçš„è¿åŠ¨å‘˜ï¼Œå¹¶åœ¨æŠ–éŸ³ä¸Šå»ºç«‹äº†æ•™ç»ƒå½±å“åŠ›ï¼Œè¾¾åˆ°äº†æ•°åäº¿æ¬¡è§‚çœ‹ã€‚æˆ‘è¿˜ç²¾é€šäº†æ™®é€šè¯ï¼Œè¿™æ”¹å˜äº†æˆ‘ä¸Žé€‰æ‰‹å’Œå®¶åº­èƒ½å¤Ÿå»ºç«‹çš„æ•™ç»ƒå…³ç³»çš„æ·±åº¦ã€‚</p>
            <p>ç»è¿‡11å¹´ï¼Œæˆ‘å·²ç»å®žçŽ°äº†æˆ‘çš„ç›®æ ‡ã€‚æˆ‘çš„é•¿å¥³åœ¨2023å¹´å‡ºç”Ÿã€‚å›žåˆ°å®¶ä¹¡çš„æƒ³æ³•ï¼Œä»¥åŠå»ºç«‹è‡ªå·±äº‹ä¸šçš„æœºä¼šï¼Œå˜å¾—æ— æ³•æŠ—æ‹’ã€‚</p>
          </div>

          <div className="chapter reveal">
            <p className="chapter__label">é©¬æ´›å¡ï¼Œ2025â€“</p>
            <h2>22æ¡çƒé“ï¼Œä¸€åº§å²›å±¿ï¼Œä»¥åŠé€šè¿‡é‡æ–°å¼€å§‹æ‰“çƒè€Œç£¨ç»ƒçš„æ‰§æ•™ç†å¿µã€‚</h2>
            <p>2025å¹´3æœˆï¼Œæˆ‘ä¸Žå¦»å­ä¼Šå¨œæ¬åˆ°äº†é©¬æ´›å¡ã€‚æ›´é è¿‘è‹±å›½çš„å®¶äººï¼Œå…¨å¹´é˜³å…‰å……è¶³ï¼Œä¸€ä¸ªçœŸæ­£éžå‡¡çš„é«˜å°”å¤«å²›å±¿ï¼Œå¤§å¤šæ•°äººæ²¡æœ‰å……åˆ†è®¤å¯ã€‚</p>
            <p>æˆ‘å¼€å§‹è®¤çœŸæ‰“çƒäº†ã€‚åœ¨å²›ä¸Šæ¯æ¡çƒé“ä¹‹é—´æ‰“çƒã€‚é‡æ–°ä½“éªŒç«™åœ¨ç¬¬ä¸€å‘çƒå°å¹¶çœŸæ­£å…³å¿ƒæˆç»©çš„æ„Ÿè§‰ã€‚é‚£ç§ç«žäº‰æœ¬èƒ½â€”â€”åœ¨å¤šå¹´å…¨èŒæ‰§æ•™ä¸­å¤„äºŽä¼‘çœ çŠ¶æ€â€”â€”å¾ˆå¿«å°±å›žæ¥äº†ã€‚</p>
            <div className="pull-quote"><p>&ldquo;ä»Žé‡æ–°å¼€å§‹æ‰“çƒè€Œæ¥çš„æ‰§æ•™ç†å¿µå¾ˆç®€å•ï¼šæœ€å¿«çš„è¿›æ­¥å‘ç”Ÿåœ¨çƒé“ä¸Šï¼Œè€Œä¸æ˜¯ç»ƒä¹ åœºã€‚çœŸå®žçš„æ¡ä»¶ï¼ŒçœŸå®žçš„å†³å®šã€‚ä»Žä¸­èŽ·å¾—çš„è¿›æ­¥å¾€å¾€ä¼šåšæŒã€‚&rdquo;</p></div>
            <p>ä¸€ä½åœ¨äºšæ´²æ‰§æ•™è¶…è¿‡åå¹´çš„PGAèŒä¸šé€‰æ‰‹ï¼ŒçŽ°åœ¨åœ¨æ¬§æ´²æœ€å¥½çš„é«˜å°”å¤«å²›ä¹‹ä¸€ä¸¾åŠžç§äººé«˜å°”å¤«æ—¥ã€‚å¦‚æžœè¿™å¬èµ·æ¥åƒæ˜¯ä½ æ­£åœ¨å¯»æ‰¾çš„é‚£ç§æ—¥å­â€”â€”è¯·ä¸Žæˆ‘è”ç³»ã€‚</p>
          </div>
        </main>

        <aside className="story__sidebar">
          <div className="reveal" style={{lineHeight:0,marginBottom:'24px'}}>
            <Image
              src="/images/about-andy-colour.jpg"
              alt="å®‰è¿ªÂ·æ ¼é‡Œè²æ€ â€” è‹±å›½PGAé«˜çº§èŒä¸šé€‰æ‰‹ï¼Œé©¬æ´›å¡"
              width={600}
              height={420}
              style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}
            />
          </div>
          <div className="creds reveal">
            <p className="creds__label">è¯ä¹¦</p>
            <ul className="cred-list">
              {credentials.map((c, i) => (
                <li key={i} className="cred-item">
                  <span className="cred-check">&#10003;</span>
                  <span className="cred-text"><strong>{c.title}</strong>{c.isBookLink ? (<a href="https://www.amazon.com/Andy-Griffiths/dp/1523339772" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>ã€Šæ‰“å‡ºåŽ»â€”â€”å……å®žäººç”Ÿçš„é«˜å°”å¤«ä¹‹æ—…ã€‹ï¼Œ2016å¹´ï¼ˆäºšé©¬é€Šï¼‰</a>) : c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-cta reveal">
            <h3>ä¸Žæˆ‘ä¸€èµ·åœ¨é©¬æ´›å¡çš„æœ€ä½³çƒåœºæ‰“é«˜å°”å¤«ã€‚</h3>
            <p>ç§äººæ—¥ç¨‹åœ¨Son Gualã€AlcanadaåŠå…¶ä»–åœ°ç‚¹ã€‚å…¨éƒ¨å®‰æŽ’å¦¥å½“ã€‚å…¨ç¨‹åœ¨çƒé“ä¸Šçš„æ•™ç»ƒã€‚</p>
            <Link href="/zh/play-with-a-pro" style={{display:'block',textAlign:'center',fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',padding:'13px',background:'var(--gold)',color:'var(--deep)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>æŸ¥çœ‹ä½“éªŒ &rarr;</Link>
          </div>
        </aside>
      </div>

      <CareerStrip />

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">å‡†å¤‡å¥½æ‰“é«˜å°”å¤«äº†å—ï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff'}}>PGAé«˜çº§èŒä¸šé€‰æ‰‹ã€‚ä¸€ä¸ªéžå‡¡çš„é«˜å°”å¤«å²›å±¿ã€‚ä½ çš„ä¸€è½®ã€‚</h2>
          <p>å‘Šè¯‰æˆ‘ä½ çš„æ—¥æœŸã€å·®ç‚¹å’Œä½ æƒ³è¦çš„ä¸œè¥¿ã€‚æˆ‘ä¼šä¸ºä½ é‡èº«å®šåˆ¶è¿™ä¸€å¤©ã€‚</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>æŸ¥çœ‹ä½“éªŒ &rarr;</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">å–å¾—è”ç³»</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





