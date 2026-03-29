import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'é©¬æ´›å¡çƒåœºå®žåœ°é«˜å°”å¤«æ•™ç»ƒ â€” PGAèŒä¸šé€‰æ‰‹',
  description: 'ç”±PGAé«˜çº§èŒä¸šé€‰æ‰‹å®‰è¿ªÂ·æ ¼é‡Œè²æ€æä¾›çš„é©¬æ´›å¡çƒåœºå®žåœ°é«˜å°”å¤«æ•™ç»ƒã€‚çœŸå®žæ¡ä»¶ä¸‹çš„çœŸå®žæ”¹å–„â€”â€”é¢å‘è®¿å®¢å’Œå¸¸é©»é«˜å°”å¤«çƒæ‰‹ã€‚',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/zh/coaching',
    languages: {
      'en': 'https://mrmallorcagolf.com/coaching',
      'de': 'https://mrmallorcagolf.com/de/coaching',
      'es': 'https://mrmallorcagolf.com/es/coaching',
      'fr': 'https://mrmallorcagolf.com/fr/coaching',
      'nl': 'https://mrmallorcagolf.com/nl/coaching',
      'sv': 'https://mrmallorcagolf.com/sv/coaching',
      'zh': 'https://mrmallorcagolf.com/zh/coaching',
      'x-default': 'https://mrmallorcagolf.com/coaching',
    }
  }
}

const improvements = [
  { num: '01', title: 'çƒåœºç®¡ç†', text: 'å¤§å¤šæ•°ä¸šä½™é«˜å°”å¤«çƒæ‰‹å¤±åˆ†çš„ä¸»è¦åŽŸå› æ˜¯å†³ç­–å¤±è¯¯ï¼Œè€Œä¸æ˜¯æŒ¥æ†å¤±è¯¯ã€‚é€‰æ‹©æ­£ç¡®çš„çƒæ†ã€ç›®æ ‡å’Œçƒå½¢â€”â€”è¿™äº›å°†90åˆ†ä¸Ž80åˆ†åŒºåˆ†å¼€æ¥ã€‚æˆ‘ä»¬åœ¨çœŸå®žçš„æ—¶é—´å†…ã€çœŸå®žçš„çƒæ´žä¸Šã€çœŸå®žçš„æ¯”åˆ†å¤„äºŽé£Žé™©ä¸­çš„æƒ…å†µä¸‹è¿›è¡Œå·¥ä½œã€‚' },
  { num: '02', title: 'åŽ‹åŠ›ä¸‹çš„å‡»çƒé€‰æ‹©', text: "åœ¨åŽ‹åŠ›ä¸‹å´©æºƒçš„å†³ç­–â€”â€”å½“5å·é“å¯ä»¥èµ¢å¾—è¿™ä¸ªæ´žæ—¶æ‰“å‡º1å·æœ¨ï¼Œå½“å®‰å…¨æ‰“æ³•èƒ½å¾—åˆ†æ—¶æ‰“å‡ºè‹±é›„çƒâ€”â€”åœ¨çƒåœºä¸Šä¼šä»¥ä¸€ç§ç»ƒä¹ åœºæ°¸è¿œçœ‹ä¸åˆ°çš„æ–¹å¼æš´éœ²å‡ºæ¥ã€‚æˆ‘çœ‹åˆ°å®ƒä»¬ï¼Œå‘½åå®ƒä»¬ï¼Œæˆ‘ä»¬ä¸€èµ·è§£å†³å®ƒä»¬ã€‚" },
  { num: '03', title: 'é˜…è¯»æžœå²­å’Œå¡åº¦', text: 'åœ¨çœŸå®žçƒåœºæžœå²­ä¸ŠæŽ¨æ†å’Œåˆ‡æ†ä»Žæ ¹æœ¬ä¸Šä¸åŒäºŽç»ƒä¹ æžœå²­ã€‚é€Ÿåº¦ã€å¡åº¦ã€çº¹è·¯ã€å½“ä¸‹çš„åŽ‹åŠ›â€”â€”æ‰€æœ‰è¿™äº›éƒ½æ”¹å˜äº†æœ‰æ•ˆçš„æ–¹æ³•ã€‚æˆ‘ä»¬åœ¨å®žé™…æ¡ä»¶ä¸‹ç»ƒä¹ å®ƒã€‚' },
  { num: '04', title: 'åœ¨é£Žä¸­æ‰“çƒ', text: "é©¬æ´›å¡å¤šé£Žã€‚Son Gualç‰¹åˆ«åœ¨è‡ªå·±çš„é£Žç”Ÿæ€ç³»ç»Ÿä¸­ã€‚ä¾§é£Žä¸­çš„é€‰æ†ã€å¼¹é“ç®¡ç†ã€åœ¨çƒä¼¼ä¹Žæ¼‚ç§»æ—¶ä¿¡ä»»ä½ çš„çž„å‡†â€”â€”è¿™æ˜¯ä½ åªæœ‰åœ¨çœŸæ­£åˆ®é£Žæ—¶æ‰èƒ½å¤„ç†çš„ä¸œè¥¿ã€‚" },
  { num: '05', title: 'å¿ƒç†æ¸¸æˆå’Œä¾‹ç¨‹', text: 'æ‰“åçƒåŽä½ å¦‚ä½•è·Ÿè‡ªå·±è¯´è¯ã€‚ä½ å¦‚ä½•èµ°å‘ä¸‹ä¸€ä¸ªå‘çƒå°ã€‚ä½ æ˜¯å¦æœ‰èµ›å‰ä¾‹ç¨‹ï¼Œä»¥åŠåœ¨åŽ‹åŠ›ä¸‹å®ƒæ˜¯å¦åšæŒã€‚å¿ƒç†æ–¹é¢åœ¨ç»ƒä¹ åœºä¸Šå®Œå…¨çœ‹ä¸è§â€”â€”åªæœ‰å½“åŽæžœæ˜¯çœŸå®žçš„æ—¶æ‰å‡ºçŽ°ã€‚' },
  { num: '06', title: 'æ‰¾åˆ°å”¾æ‰‹å¯å¾—çš„æžœå®ž', text: "å¤§å¤šæ•°é«˜å°”å¤«çƒæ‰‹è¿›æ­¥æœ€å¿«ä¸æ˜¯é€šè¿‡é‡å»ºæŒ¥æ†ï¼Œè€Œæ˜¯é€šè¿‡ä¸€ä¸¤ä¸ªå°çš„è§£é”ã€‚ä¸€ä½å®¢æˆ·ä¸€ç”Ÿéƒ½åœ¨ç”¨åŠˆæ†åˆ‡çƒã€‚ä¸€æ¬¡å¯¹è¯ï¼Œæ¢ä¸€æ ¹çƒæ†ï¼Œç«‹å³æ”¹å–„ã€‚æ²¡æœ‰æŠ€æœ¯å·¥ä½œã€‚è¿™ç§äº‹æƒ…åªåœ¨çƒåœºä¸Šæ‰ä¼šå‡ºçŽ°ã€‚" },
  { num: '07', title: 'çœŸå®žæ¡ä»¶ä¸‹çš„ä¸€è‡´æ€§', text: "ä¸å¹³çš„è°Žè¨€ã€ç´§çƒé“ã€é•¿è‰â€”â€”çƒåœºè¦æ±‚çš„å‡»çƒæ˜¯ç»ƒä¹ åœºä»Žä¸è¦æ±‚çš„ã€‚ç»å¸¸æ‰“è¿™äº›çƒï¼Œå®žæ—¶åé¦ˆï¼Œè¿™å°±æ˜¯ä½ å»ºç«‹ä¸€ä¸ªåœ¨è®¡æ•°æ—¶å‡ºçŽ°çš„çƒæ„Ÿçš„æ–¹å¼ã€‚", full: true },
]

export default function Coaching() {
  return (
    <>
    <link rel="preload" as="image" href="/images/coaching-hero.jpg" />
    <PageLayout>
      <RevealObserver />

      <header className="page-hero coaching-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.4) 55%, rgba(26,25,22,0.15) 100%), url(/images/coaching-hero.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, 60% 80%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb"><Link href="/zh">é¦–é¡µ</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>çƒåœºå®žåœ°æ•™ç»ƒ</span></p>
          <h1>æ‰“å¾—æ›´å¥½çš„é«˜å°”å¤«ã€‚<br />æ— éœ€æ”¹å˜ä¸€åˆ‡ã€‚</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:560,marginTop:'1rem'}}>é¢å‘è®¿å®¢å’Œå¸¸é©»é«˜å°”å¤«çƒæ‰‹çš„çƒåœºå®žåœ°æ•™ç»ƒã€‚çœŸå®žæ¡ä»¶ã€çœŸå®žå†³ç­–ã€çœŸå®žæ”¹å–„â€”â€”æ²¡æœ‰æŠ€æœ¯è¿‡è½½ï¼Œä¸ä¼šåœ¨ç¬¬3æ´žå°±è¢«é—å¿˜ã€‚</p>
        </div>
      </header>

      {/* WHY THE RANGE ISN'T ENOUGH */}
      <section className="range-section">
        <div className="reveal">
          <p className="eyebrow">ä¸ºä»€ä¹ˆç»ƒä¹ åœºè¿˜ä¸å¤Ÿ</p>
          <h2>ä½ çš„ç»ƒä¹ åœºæˆç»©æ²¡æœ‰åœ¨çƒåœºä¸Šè½¬åŒ–ï¼Œæ˜¯æœ‰åŽŸå› çš„ã€‚</h2>
          <p>ç»ƒä¹ åœºæ˜¯å¹³å¦çš„ã€æœ‰æŽ§åˆ¶çš„ã€æ— åŽæžœçš„ã€‚ä½ åœ¨å®Œç¾Žçš„åž«å­ä¸Šå‡»çƒï¼Œæ²¡æœ‰é£Žã€æ²¡æœ‰æ–œå¡ã€æ²¡æœ‰è®¡åˆ†ã€æ²¡äººçœ‹ç€ã€‚ç„¶åŽä½ èµ°ä¸Šç¬¬1å‘çƒå°ï¼Œä»€ä¹ˆéƒ½è½¬ä¸äº†ã€‚</p>
          <p>çƒåœºå®žåœ°æ•™ç»ƒæŠŠè¯¾ç¨‹æ”¾åœ¨çœŸæ­£æœ‰å¸®åŠ©çš„åœ°æ–¹ã€‚åœ¨çƒé“ä¸Šã€‚åœ¨æ·±è‰åŒºã€‚åœ¨æœ‰æ–œå¡çš„çƒä½ä¸Šï¼Œä¼´éšç€ä½ æ²¡æœ‰é¢„æ–™åˆ°çš„é£Žã€‚æœ‰ä¸€ä¸ªçœŸæ­£é‡è¦çš„åˆ†æ•°ã€‚é‚£å°±æ˜¯çƒå±€æ”¹å˜çš„åœ°æ–¹â€”â€”é‚£å°±æ˜¯æˆ‘ä»¬å·¥ä½œçš„åœ°æ–¹ã€‚</p>
          <div className="analogy-box">
            <p>&ldquo;æƒ³æƒ³æ‹³å‡»ã€‚ä½ å¯ä»¥åœ¨åž«å­ä¸Šè®­ç»ƒå‡ ä¸ªæ˜ŸæœŸï¼Œæ„Ÿåˆ°å‡†å¤‡å¥½äº†ã€‚ç„¶åŽä½ è¿›è¡Œä½ çš„ç¬¬ä¸€æ¬¡å¯¹æ‰“ï¼Œä¸€åˆ‡éƒ½æ”¹å˜äº†ã€‚é«˜å°”å¤«æ˜¯ä¸€æ ·çš„ã€‚ç¬¬1å‘çƒå°ä¸æ˜¯ç»ƒä¹ åœºã€‚&rdquo;</p>
            <cite>â€” å®‰è¿ªÂ·æ ¼é‡Œè²æ€ï¼ŒPGAé«˜çº§èŒä¸šé€‰æ‰‹</cite>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow" style={{marginBottom:'1.25rem'}}>é—®å·è°ƒæŸ¥</p>
          <p>è¯¾ç¨‹å‰çš„ç®€çŸ­é—®å·å¡‘é€ äº†è¿™ä¸€å¤©çš„å½¢çŠ¶ã€‚æ˜¯ä»€ä¹ˆå›°æ‰°ä½ ï¼Œå·®è·åœ¨å“ªé‡Œï¼ŒæˆåŠŸçœ‹èµ·æ¥æ˜¯ä»€ä¹ˆæ ·çš„ã€‚</p>
          <p>å½“æˆ‘ä»¬èµ°åˆ°ç¬¬ä¸€å‘çƒå°æ—¶ï¼Œæˆ‘å·²ç»çŸ¥é“è¦å¯»æ‰¾ä»€ä¹ˆã€‚åé¦ˆæ˜¯æƒ…å¢ƒæ€§çš„å’Œè¯šå®žçš„â€”â€”ä¸æ˜¯åº”ç”¨äºŽæ¯ä¸ªäººçš„é€šç”¨è¯¾ç¨‹è®¡åˆ’ã€‚</p>
          <p>è¯¾ç¨‹åœ¨Son Gualã€Alcanadaæˆ–åŒ¹é…ä½ çš„æ°´å¹³å’Œç›®æ ‡çš„çƒåœºè¿›è¡Œã€‚</p>
          <Link href="/zh/contact" style={{display:'inline-block',marginTop:'1.5rem',fontSize:'10px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',padding:'13px 30px',background:'var(--pine)',color:'#fff',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>è®¨è®ºè¯¾ç¨‹ &rarr;</Link>
        </div>
      </section>

      <div style={{lineHeight:0,overflow:'hidden'}}>
        <img
          src="/images/coaching-action.jpg"
          alt="å®‰è¿ªÂ·æ ¼é‡Œè²æ€åœ¨é©¬æ´›å¡çƒåœºæ•™ç»ƒé«˜å°”å¤«"
          style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center 60%',display:'block'}}
        />
      </div>

      {/* WHAT GETS BETTER */}
      <section className="improvements">
        <div className="reveal">
          <p className="eyebrow">å®žé™…æ”¹å–„çš„ä¸œè¥¿</p>
          <h2>å’Œæˆ‘ä¸€èµ·æ‰“ä¸€è½®æ—¶ä¼šæ”¹å˜çš„ã€‚</h2>
          <p className="improvements__sub">ä»¥åŠä¸ºä»€ä¹ˆå®ƒä»¥ç»ƒä¹ åœºå·¥ä½œå¾ˆå°‘åšåˆ°çš„æ–¹å¼åšæŒã€‚</p>
        </div>
        <div className="improvements-grid">
          {improvements.map((imp, i) => (
            <div key={i} className={`improvement reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}${imp.full ? ' improvement--full' : ''}`}>
              <span className="improvement__num">{imp.num}</span>
              <h3>{imp.title}</h3>
              <p>{imp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="reveal">
          <p className="eyebrow">å®ƒå¦‚ä½•å·¥ä½œ</p>
          <h2>ä¸‰ä¸ªé˜¶æ®µã€‚ä¸€æ¬¡æ”¹å˜ä½ å¦‚ä½•æ‰“çƒçš„è¯¾ç¨‹ã€‚</h2>
          <p>è¯¾ç¨‹åœ¨Son Gualã€Alcanadaæˆ–åŒ¹é…ä½ çš„æ°´å¹³å’Œç›®æ ‡çš„çƒåœºçš„çƒé“ä¸Šè¿›è¡Œã€‚æˆ‘ä»¬ä¸€èµ·æ‰“çƒï¼Œæ•™ç»ƒå®žæ—¶å‘ç”Ÿï¼Œåé¦ˆæ˜¯æƒ…å¢ƒæ€§å’Œè¯šå®žçš„â€”â€”ä¸æ˜¯åº”ç”¨äºŽæ¯ä¸ªäººçš„é€šç”¨è¯¾ç¨‹è®¡åˆ’ã€‚</p>
        </div>
        <div className="how-steps reveal">
          {[
            { num: '01', title: 'é—®å·è°ƒæŸ¥', text: "è¯¾ç¨‹å‰ï¼Œä½ å®Œæˆä¸€ä»½ç®€çŸ­è¡¨æ ¼ã€‚æ˜¯ä»€ä¹ˆå›°æ‰°ä½ ï¼Œå·®è·åœ¨å“ªé‡Œï¼Œå¥½çš„ä¸€å¤©çœ‹èµ·æ¥æ˜¯ä»€ä¹ˆæ ·çš„ã€‚åˆ°ç¬¬ä¸€å‘çƒå°æ—¶ï¼Œæˆ‘å·²ç»æœ‰äº†ä¸€å¹…ç”»é¢ã€‚" },
            { num: '02', title: 'è¿™ä¸€è½®', text: "æˆ‘ä»¬ä¸€èµ·æ‰“çƒã€‚æ•™ç»ƒå®žæ—¶å‘ç”Ÿâ€”â€”æ­£ç¡®æ—¶åˆ»çš„æ­£ç¡®è§‚å¯Ÿã€‚ä¸æ˜¯è·‘æ­¥è¯„è®ºã€‚ä¸æ˜¯è¯¾ç¨‹ã€‚æ”¹å˜ä½ çš„åˆ†æ•°çš„ä¸œè¥¿ã€‚" },
            { num: '03', title: 'èµ›åŽæ€»ç»“', text: "åˆé¤æ—¶ï¼Œæˆ‘ä»¬è®¨è®ºæ”¹å–„çš„å†…å®¹ã€ç»§ç»­è¿›è¡Œçš„å†…å®¹ä»¥åŠè¦å¸¦èµ°çš„å†…å®¹ã€‚è¯šå®žè€Œæ¸…æ™°ã€‚è®©æ•´ä¸ªä¸€å¤©æœ‰æ„ä¹‰çš„å¯¹è¯ã€‚" },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <span className="how-step__num">{s.num}</span>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="reveal">
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'.5rem'}}>è¿™å¯¹è°æœ‰æ•ˆ</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.5rem'}}>å¦‚æžœä»»ä½•ä¸€ä¸ªå¬èµ·æ¥å¾ˆç†Ÿæ‚‰ï¼Œè¿™å¯¹ä½ æœ‰æ•ˆã€‚</h2>
        </div>
        <div className="who-grid">
          {[
            { title: 'è®¿å®¢é«˜å°”å¤«çƒæ‰‹', text: 'åœ¨å²›ä¸Šçš„æ—¶é—´å†…æœ‰é‡ç‚¹çš„æ”¹å–„â€”â€”ä¸ä»…ä»…æ˜¯æ‰“ä¸€è½®ã€‚' },
            { title: 'å¸¸é©»é«˜å°”å¤«çƒæ‰‹', text: 'ä¸Žä¸€ä½æ‰“ä½ çŽ©çš„åŒæ ·çƒåœºçš„ä¸“ä¸šäººå£«è¿›è¡Œå¸¸è§„å·¥ä½œã€‚' },
            { title: 'ç»ƒä¹ åœº/çƒåœºå·®è·', text: 'ä½ çš„ç»ƒä¹ æ¸¸æˆä»Žä¸è½¬ç§»ã€‚è¿™å°±æ˜¯æˆ‘ä»¬ä¿®å¤çš„åœ°æ–¹ã€‚' },
            { title: 'æ›´èªæ˜Žï¼Œä¸æ˜¯é‡å»º', text: 'ä½ æƒ³æ‰“å¾—æ›´å¥½ï¼Œæ²¡æœ‰ä»Žå¤´å¼€å§‹çš„å®Œæ•´æŠ€æœ¯æ”¹é€ ã€‚' },
          ].map((c, i) => (
            <div key={i} className={`who-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">å‡†å¤‡å¥½æ‰“å¾—æ›´å¥½äº†å—ï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff'}}>å–å¾—è”ç³»ä»¥è®¨è®ºè¯¾ç¨‹ã€‚</h2>
          <p>å‘Šè¯‰æˆ‘ä½ çš„æ¸¸æˆåœ¨å“ªé‡Œä»¥åŠä½ æƒ³ä»Žä¸­å¾—åˆ°ä»€ä¹ˆã€‚æˆ‘ä¼šå›´ç»•è¿™ä¸ªå»ºç«‹è¯¾ç¨‹â€”â€”ä¸æ˜¯ä¸€ä¸ªé€šç”¨ç¨‹åºã€‚</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>å–å¾—è”ç³» &rarr;</Link>
          <Link href="/zh/play-with-a-pro" className="btn btn--outline-white">æŸ¥çœ‹å…¨éƒ¨ä½“éªŒ</Link>
        </div>
      </section>

    </PageLayout>
    </>
  )
}





