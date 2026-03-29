import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'é©¬ç•¥å¡å²›é«˜å°”å¤«æŒ‡å— â€” çƒåœºè¯„æµ‹ä¸Žå»ºè®®',
  description: 'ç”±PGAèŒä¸šæ•™ç»ƒæ’°å†™çš„é©¬ç•¥å¡å²›é«˜å°”å¤«è¯šå®žæŒ‡å—ã€‚çƒåœºè¯„æµ‹ã€æžœå²­è´¹ç”¨åŠè¡Œç¨‹è§„åˆ’ â€” 2026å¹´æ›´æ–°ç‰ˆã€‚',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/guides' },
}

const liveGuides = [
  { slug: 'son-gual-review', badge: 'çƒåœºè¯„æµ‹', badgeGold: true, title: 'Son Gualé«˜å°”å¤«çƒåœºï¼Œé©¬ç•¥å¡ â€” PGAèŒä¸šæ•™ç»ƒè¯šå®žè¯„æµ‹ï¼ˆ2026ï¼‰', intro: 'æˆ‘åœ¨å²›ä¸Šæ‰“å¾—æœ€å¤šçš„çƒåœºã€‚é£Žã€æžœå²­ã€æ”¶å®˜å‡ æ´ž â€” ä»¥åŠå¥¥å·´é©¬å’Œçº³è¾¾å°”ä¸€å†å›žæ¥çš„åŽŸå› ã€‚', readTime: '7åˆ†é’Ÿ', keywords: 'é”¦æ ‡èµ›çº§ Â· æ ‡å‡†æ†72 Â· â‚¬80â€“165 Â· éœ€è¦å·®ç‚¹è¯æ˜Ž' },
  { slug: 'alcanada-review', badge: 'çƒåœºè¯„æµ‹', badgeGold: true, title: 'é˜¿å°”å¡çº³è¾¾é«˜å°”å¤«çƒåœº â€” PGAèŒä¸šæ•™ç»ƒè¯šå®žè¯„æµ‹ï¼ˆ2026ï¼‰', intro: 'æˆ‘å¸¦å®¢äººæ¥æ‰“çƒæ—¶ï¼Œæœ€å¸Œæœ›ä»–ä»¬èƒ½å¸¦ç€æ•…äº‹å›žå®¶çš„çƒåœºã€‚ç¯å¡”æ”¹å˜äº†ä¸€åˆ‡ã€‚', readTime: '7åˆ†é’Ÿ', keywords: 'æµ·æ»¨çƒåœº Â· æ ‡å‡†æ†72 Â· â‚¬115â€“220 Â· åŠ³åŠ›å£«æŒ‘æˆ˜å·¡å›žèµ›æ€»å†³èµ›' },
  { slug: 'santa-ponsa-1-review', badge: 'çƒåœºè¯„æµ‹', badgeGold: true, title: 'åœ£è“¬è¨1å·é«˜å°”å¤«çƒåœºï¼Œé©¬ç•¥å¡ â€” PGAèŒä¸šæ•™ç»ƒè¯šå®žè¯„æµ‹ï¼ˆ2026ï¼‰', intro: 'æ¬§æ´²æœ€é•¿çƒåœºä¹‹ä¸€ï¼Œæ‹¥æœ‰DPä¸–ç•Œå·¡å›žèµ›åŽ†å²ï¼ŒçœŸæ­£èƒ½å¸®åŠ©çƒæ‰‹é‡æ‹¾ä¸€å·æœ¨ä¿¡å¿ƒçš„çƒåœºã€‚', readTime: '6åˆ†é’Ÿ', keywords: 'é”¦æ ‡èµ›çº§ Â· æ ‡å‡†æ†72 Â· â‚¬77â€“126 Â· å¯¹å¤–å¼€æ”¾' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'äº²åŽ†ä½“éªŒ', badgeGold: false, title: 'ä¸ŽPGAèŒä¸šçƒæ‰‹å…±åº¦Son Gualçš„ä¸€å¤©', intro: 'å½“ä½ ä¸Žä¸€ä½å‡ ä¹Žæ¯å‘¨éƒ½åœ¨é©¬ç•¥å¡å²›æœ€ä½³çƒåœºæŒ¥æ†çš„æ•™ç»ƒå…±åº¦ä¸€æ•´å¤©ï¼Œç©¶ç«Ÿä¼šå‘ç”Ÿä»€ä¹ˆã€‚', readTime: '5åˆ†é’Ÿ', keywords: 'Son Gual Â· ä¸ŽèŒä¸šçƒæ‰‹åŒåœº Â· å…¨å¤©ä½“éªŒ' },
  { slug: 'best-golf-courses-mallorca', badge: 'æŒ‡å—', badgeGold: false, title: 'é©¬ç•¥å¡å²›æœ€ä½³é«˜å°”å¤«çƒåœºâ€”â€”PGAèŒä¸šçƒæ‰‹è¯šå®žæŽ’å', intro: 'å²›ä¸ŠäºŒåäºŒä¸ªçƒåœºï¼Œæˆ‘å°†å¦‚ä½•ä¸ºæ—¶é—´æœ‰é™ã€æ ‡å‡†ä¸ä½Žçš„æ¸¸å®¢ä¸€ä¸€æŽ’åºã€‚', readTime: '8åˆ†é’Ÿ', keywords: 'é€‚åˆå„æ°´å¹³ Â· æžœå²­è´¹å¯¹æ¯” Â· 2026å¹´æ›´æ–°' },
  { slug: 'is-mallorca-good-for-golf', badge: 'æŒ‡å—', badgeGold: false, title: 'é©¬ç•¥å¡å²›é€‚åˆæ‰“é«˜å°”å¤«å—ï¼Ÿä¸€ä½ä½åœ¨è¿™é‡Œçš„äººç»™å‡ºè¯šå®žç­”æ¡ˆ', intro: 'ä¸åŠ æ»¤é•œçš„çœŸå®žç‰ˆæœ¬â€”â€”è¿™åº§å²›åœ¨å“ªäº›æ–¹é¢èƒœè¿‡è‘¡è„ç‰™ï¼Œå“ªäº›æ–¹é¢æœ‰æ‰€ä¸è¶³ï¼Œä»¥åŠå®ƒé€‚åˆå“ªç±»çƒæ‰‹ã€‚', readTime: '5åˆ†é’Ÿ', keywords: 'é©¬ç•¥å¡ vs è‘¡è„ç‰™ Â· çƒåœºå“è´¨ Â· é€‚åˆå„æ°´å¹³' },
  { slug: 'best-time-play-golf-mallorca', badge: 'æŒ‡å—', badgeGold: false, title: 'é©¬ç•¥å¡å²›æ‰“é«˜å°”å¤«çš„æœ€ä½³æ—¶é—´â€”â€”æŒ‰æœˆè¯¦è§£', intro: 'å¦‚æžœåªèƒ½é€‰ä¸€ä¸ªæœˆï¼Œæˆ‘ä¼šé€‰åæœˆã€‚åŽŸå› åœ¨æ­¤ï¼Œä»¥åŠæ¯ä¸ªæœˆåœ¨å¤©æ°”ã€ä»·æ ¼å’Œäººæµæ–¹é¢çš„çœŸå®žè¡¨çŽ°ã€‚', readTime: '6åˆ†é’Ÿ', keywords: 'å¤©æ°” Â· æŒ‰å­£èŠ‚æžœå²­è´¹ Â· äººæµé‡' },
  { slug: 'golf-cost-mallorca', badge: 'æŒ‡å—', badgeGold: false, title: 'é©¬ç•¥å¡å²›æ‰“é«˜å°”å¤«è¦å¤šå°‘é’±ï¼Ÿæžœå²­è´¹ã€ç§Ÿæ†è´¹åŠéšæ€§è´¹ç”¨å…¨è§£æž', intro: 'ä¸€æ¬¡é©¬ç•¥å¡é«˜å°”å¤«ä¹‹æ—…çš„çœŸå®žèŠ±é”€â€”â€”æžœå²­è´¹ã€ç§Ÿæ†ã€çƒç«¥ï¼Œä»¥åŠåœ¨å“ªé‡Œå¯ä»¥çœé’±è€Œä¸é™ä½Žä½“éªŒã€‚', readTime: '5åˆ†é’Ÿ', keywords: 'â‚¬77â€“220æžœå²­è´¹ Â· ç§Ÿæ† Â· çƒç«¥ Â· 2026å¹´ä»·æ ¼' },
  { slug: 'golf-trip-planning-mallorca', badge: 'æŒ‡å—', badgeGold: false, title: 'è§„åˆ’é©¬ç•¥å¡é«˜å°”å¤«ä¹‹æ—…â€”â€”ä½ éœ€è¦äº†è§£çš„ä¸€åˆ‡', intro: 'æœºç¥¨ã€çƒåœºã€ä½å®¿é€‰æ‹©ã€å¦‚ä½•åœ¨æ™¯ç‚¹ä¹‹é—´ç©¿æ¢­ã€‚è¿™æ˜¯æˆ‘æ¬æ¥è¿™é‡Œæ—¶å¸Œæœ›æ—©å·²å­˜åœ¨çš„å®žç”¨æŒ‡å—ã€‚', readTime: '7åˆ†é’Ÿ', keywords: 'è¡Œç¨‹è§„åˆ’ Â· ä½å®¿ Â· äº¤é€š' },
]

export default function GuidesIndex_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />
      <header className="page-hero" style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.45) 55%, rgba(26,25,22,0.2) 100%), url(/images/guide.jpg)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center 40%',
      }}>
        <div className="page-hero__inner">
          <p className="breadcrumb">
            <a href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>ZH</a>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>é«˜å°”å¤«æŒ‡å—</span>
          </p>
          <h1 dangerouslySetInnerHTML={{__html: 'é©¬ç•¥å¡å²›é«˜å°”å¤«ã€‚<br />è¯šå®žæŒ‡å—ã€‚'}} />
          <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.6)',lineHeight:1.8,maxWidth:540,marginTop:'1rem'}}>
            çƒåœºè¯„æµ‹ã€è¡Œç¨‹è§„åˆ’ä¸Žæžœå²­è´¹ç”¨ â€” ç”±æ¯å‘¨åœ¨æ­¤æ‰“çƒçš„PGAèŒä¸šæ•™ç»ƒæ’°å†™ã€‚
          </p>
          <div className="page-hero__meta" style={{marginTop:'1.5rem'}}>
            <span className="page-hero__tag">2026å¹´æ›´æ–°</span>
            <span className="page-hero__tag page-hero__tag--gold">â˜… äº²èº«è¯„æµ‹</span>
            <span className="page-hero__tag">PGAèŒä¸šæ•™ç»ƒ</span>
          </div>
        </div>
      </header>

      <section style={{maxWidth:860,margin:'0 auto',padding:'clamp(48px,8vw,96px) clamp(20px,4vw,40px)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {liveGuides.map((g) => (
            <Link key={g.slug} href={`/zh/guides/${g.slug}`} className="reveal"
              style={{display:'block',textDecoration:'none',borderBottom:'1px solid var(--linen)',padding:'32px 0'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(184,151,60,.12)',color:'var(--gold)',border:'1px solid rgba(184,151,60,.25)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </Link>
          ))}

          {comingSoonGuides.map((g) => (
            <div key={g.slug} className="reveal"
              style={{display:'block',borderBottom:'1px solid var(--linen)',padding:'32px 0',pointerEvents:'none',userSelect:'none'}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:16,flexWrap:'wrap'}}>
                <span style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,padding:'4px 10px',background:'rgba(45,74,62,.07)',color:'var(--taupe)',border:'1px solid var(--linen)',flexShrink:0,alignSelf:'center'}}>
                  {g.badge}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)',alignSelf:'center'}}>
                  {g.readTime}
                </span>
                <span style={{fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:600,color:'var(--deep)',alignSelf:'center',marginLeft:'auto',background:'var(--gold)',padding:'5px 12px'}}>
                  å³å°†å‘å¸ƒ
                </span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(1.2rem,2vw,1.5rem)',fontWeight:500,color:'var(--deep)',lineHeight:1.25,margin:'14px 0 10px'}}>
                {g.title}
              </h2>
              <p style={{fontSize:'0.95rem',fontWeight:300,color:'var(--taupe)',lineHeight:1.75,margin:'0 0 12px',maxWidth:640}}>
                {g.intro}
              </p>
              <p style={{fontSize:'9px',letterSpacing:'.1em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--stone)'}}>
                {g.keywords}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">å‡†å¤‡å¥½ä¸Šåœºäº†å—ï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff'}}>åœ¨å…¶ä¸­ä¸€ä¸ªçƒåœºæ‰“ä¸€åœºç§äººçƒï¼Œæœ‰PGAèŒä¸šæ•™ç»ƒå…¨ç¨‹é™ªåŒã€‚</h2>
          <p>å‘Šè¯‰æˆ‘æ‚¨çš„æ—¥æœŸå’ŒæœŸæœ›ï¼Œæˆ‘å°†åœ¨24å°æ—¶å†…äº²è‡ªå›žå¤ã€‚</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/play-with-a-pro" className="btn btn--gold" style={{fontSize:10,padding:'14px 36px'}}>æŸ¥çœ‹ä½“éªŒå¥—é¤ â†’</Link>
          <Link href="/zh/contact" className="btn btn--outline-white">è”ç³»æˆ‘ä»¬</Link>
        </div>
      </section>
    </PageLayout>
  )
}

