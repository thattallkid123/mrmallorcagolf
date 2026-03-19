import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'é©¬ç•¥å¡å²›é«˜å°”å¤«æŒ‡å— â€” çƒåœºè¯„æµ‹ä¸Žæ—…è¡Œæ”»ç•¥',
  description: 'é©¬ç•¥å¡å²›é«˜å°”å¤«å®Œæ•´æŒ‡å—ï¼Œç”±å²›ä¸Šé©»åœºPGAèŒä¸šæ•™ç»ƒæ’°å†™ã€‚çƒåœºè¯„æµ‹ã€æžœå²­è´¹è¯¦è§£ä¸Žæ—…è¡Œè§„åˆ’ï¼Œ2026å¹´æœ€æ–°ç‰ˆã€‚',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides' },
}

export default function GuidesIndex_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />

      <header className="page-hero">
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>ZH</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>æŒ‡å—</span>
          </p>
          <h1>é©¬ç•¥å¡å²›é«˜å°”å¤«ã€‚<br />çœŸå®žæ”»ç•¥ã€‚</h1>
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>çƒåœºè¯„æµ‹ã€æ—…è¡Œè§„åˆ’ä¸Žæžœå²­è´¹è¯¦è§£â€”â€”ç”±æ¯å‘¨åœ¨æ­¤æ‰“çƒçš„PGAèŒä¸šæ•™ç»ƒæ’°å†™ã€‚</p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">2026å¹´æ›´æ–°</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… äº²èº«ä½“éªŒè¯„æµ‹</span>
            <span className="page-hero__tag">PGAèŒä¸šæ•™ç»ƒ</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>

        {/* â”€â”€ LIVE: Son Gual â”€â”€ */}
        <Link href="/zh/guides/son-gual-review" className="reveal" style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
            <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>çƒåœºè¯„æµ‹</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>6 min</span>
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>Son Gualé«˜å°”å¤«çƒåœºé©¬ç•¥å¡å²›â€”â€”PGAèŒä¸šçƒæ‰‹çœŸå®žè¯„æµ‹ï¼ˆ2026å¹´ï¼‰</h2>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>è¿™æ˜¯æˆ‘åœ¨å²›ä¸Šæ‰“å¾—æœ€å¤šçš„çƒåœºï¼Œä¹Ÿæ˜¯æˆ‘æœ€å¸¸å‘çƒå‹æŽ¨èçš„åœ°æ–¹ã€‚é£Žã€æžœå²­ã€æœ€åŽå‡ æ´žâ€”â€”ä»¥åŠå¥¥å·´é©¬å’Œçº³è¾¾å°”ä¸ºä½•ä¸€å†å›žè®¿ã€‚</p>
          <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>é”¦æ ‡èµ›çƒåœº Â· Par 72 Â· â‚¬80â€“165 Â· éœ€è¦å·®ç‚¹è¯ä¹¦</p>
        </Link>

        {/* â”€â”€ COMING SOON block â”€â”€ */}
        <div style={{marginTop:'3rem',padding:'2rem',background:'var(--cream)',border:'1px solid var(--linen)'}}>
          <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.18em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:'0.75rem'}}>æ›´å¤šæŒ‡å—å³å°†å‘å¸ƒ</p>
          <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.8,margin:0}}>æˆ‘ç›®å‰æ­£åœ¨é€ä¸€æ‰“éå²›ä¸Šçš„æ¯ä¸€ä¸ªçƒåœºã€‚æ¯ç¯‡è¯„æµ‹éƒ½åŸºäºŽäº²èº«ä½“éªŒâ€”â€”çœŸå®žçœ‹æ³•ï¼Œéžå®£ä¼ å†Œã€‚æ›´å¤šæŒ‡å—å°†äºŽæœªæ¥æ•°å‘¨å†…é™†ç»­å‘å¸ƒã€‚</p>
        </div>

      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">å‡†å¤‡å¥½äº†å—ï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff'}}>åœ¨å…¶ä¸­ä¸€ä¸ªçƒåœºæ‰“ä¸€è½®ç§äººçƒå±€ï¼ŒPGAèŒä¸šæ•™ç»ƒå…¨ç¨‹ç›¸ä¼´ã€‚</h2>
          <p>å‘Šè¯‰æˆ‘æ‚¨çš„æ—¥æœŸå’Œéœ€æ±‚ã€‚æˆ‘ä¼šåœ¨24å°æ—¶å†…äº²è‡ªå›žå¤ã€‚</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>äº†è§£ä½“éªŒé¡¹ç›® â†’</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">è”ç³»æˆ‘ä»¬</Link>
        </div>
      </section>
    </PageLayout>
  )
}
