import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import RevealObserver from '../../../components/RevealObserver'

export const metadata = {
  title: 'ä¸ŽèŒä¸šçƒæ‰‹åŒåœº â€” é©¬ç•¥å¡å²›ç§äººé«˜å°”å¤«æ—¥',
  description: 'åœ¨é©¬ç•¥å¡å²›ä¸Žè‹±å›½PGAé«˜çº§èŒä¸šæ•™ç»ƒAndy GriffithsåŒæ‰“ä¸€è½®ç§äººé«˜å°”å¤«ã€‚çƒåœºå®žåœ°æŒ‡å¯¼ï¼Œå…¨å¤©å…¨ç¨‹å®‰æŽ’ã€‚æ¯äººâ‚¬350èµ·ã€‚',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/play-with-a-pro' },
}

export default function PlayWithAPro_ZH() {
  return (
    <PageLayout lang="zh">
      <RevealObserver />

      <section className="pwap-hero">
        <div className="pwap-hero__bg" style={{
  backgroundImage: 'linear-gradient(160deg, rgba(26,25,22,0.10) 0%, rgba(26,25,22,0.55) 70%), linear-gradient(to bottom, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0.42) 100%), url(/images/pwap-hero.jpg)',
  backgroundSize: 'auto, auto, cover',
  backgroundPosition: 'center, center, 38% center',
}}></div>
        <div className="pwap-hero__inner">
          <div className="pwap-hero__content">
            <p className="breadcrumb" style={{color:'rgba(255,255,255,.4)'}}><Link href="/zh" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>é¦–é¡µ</Link> &nbsp;/&nbsp; <span>ä¸ŽèŒä¸šçƒæ‰‹åŒåœº</span></p>
            <p className="eyebrow eyebrow--gold" style={{marginBottom:'1rem',marginTop:'1rem'}}>ç§äººé«˜å°”å¤«æ—¥ Â· é©¬ç•¥å¡å²›</p>
            <h1 className="serif-display" style={{fontSize:'clamp(2.4rem,5vw,4.2rem)',color:'#fff',marginBottom:'1.25rem'}}>åœ¨é©¬ç•¥å¡å²›çš„ç§äººé«˜å°”å¤«æ—¥ã€‚</h1>
            <p style={{fontSize:'1rem',fontWeight:300,color:'rgba(255,255,255,.65)',lineHeight:1.75,maxWidth:520,marginBottom:'1.5rem'}}>è¿™ä¸æ˜¯ä¸€å ‚è¯¾ï¼Œä¹Ÿä¸æ˜¯æ™®é€šçš„ä¸€è½®çƒã€‚è€Œæ˜¯åœ¨å²›ä¸Šæœ€é¡¶çº§çš„çƒåœºä¹‹ä¸€ï¼Œä¸Žä¸€ä½æ›¾åœ¨ä¸‰å¤§æ´²æœ€é«˜çº§åˆ«èµ›åœºæ‰§æ•™çš„PGAèŒä¸šæ•™ç»ƒå…±åº¦çš„ç§äººä¸€å¤©ã€‚</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',color:'var(--gold-light)',marginBottom:'2rem'}}>æ¯äººâ‚¬350 + æžœå²­è´¹</p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
              <Link href="/zh/contact" className="btn btn--gold">é¢„è®¢æ‚¨çš„é«˜å°”å¤«æ—¥ &rarr;</Link>
              <a href="#packages" className="btn btn--outline-white">æŸ¥çœ‹æ–¹æ¡ˆ</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pwap-day">
        <div className="pwap-day__left reveal">
          <p className="eyebrow">è¿™ä¸€å¤©åŒ…å«ä»€ä¹ˆ</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'1.5rem'}}>åœ¨æ‚¨åˆ°è¾¾ä¹‹å‰ï¼Œæˆ‘å·²ç»çŸ¥é“è¯¥å…³æ³¨ä»€ä¹ˆã€‚</h2>
          <p>åœ¨æ‚¨åˆ°è¾¾ä¹‹å‰ï¼Œæ‚¨éœ€è¦å¡«å†™ä¸€ä»½ç®€çŸ­é—®å·ã€‚æ‚¨çš„å›°æƒ‘æ‰€åœ¨ï¼Œå·®è·ä½•å¤„ã€‚å½“æˆ‘ä»¬èµ°åˆ°ç¬¬ä¸€ä¸ªå‘çƒå°æ—¶ï¼Œæˆ‘å·²ç»çŸ¥é“è¯¥å…³æ³¨ä»€ä¹ˆäº†ã€‚</p>
          <p>æ‰“çƒè¿‡ç¨‹ä¸­ï¼ŒæŒ‡å¯¼è‡ªç„¶èžå…¥å…¶ä¸­â€”â€”ä¸æ˜¯æŒç»­è·‘åŠ¨å¼çš„è¯„è®ºï¼Œè€Œæ˜¯åœ¨æ­£ç¡®çš„æ—¶æœºç»™å‡ºæ­£ç¡®çš„è§‚å¯Ÿã€‚</p>
          <p>æˆ‘æ›¾åœ¨è¦æ±‚ä¸¥æ ¼ã€è¿›æ­¥å¯é‡åŒ–çš„çŽ¯å¢ƒä¸­æ‰§æ•™â€”â€”ä¸­å›½å›½å®¶é˜Ÿçƒå‘˜ï¼Œä»¥åŠéå¸ƒäºšæ´²çš„é«˜å°”å¤«ç‹‚çƒ­è€…ã€‚</p>
          <div className="pull-quote"><p>&ldquo;å¤§å¤šæ•°çƒæ‰‹ä¼šå‘çŽ°ï¼šä»–ä»¬ç¦»å¼€æ—¶æ‰“å¾—æ˜Žæ˜¾æ›´å¥½ã€æ›´è‡ªä¿¡â€”â€”å¹¶ä¸”çŸ¥é“åŽŸå› ï¼Œè€Œè¿™æ­£æ˜¯ç•™ä¸‹æ¥çš„éƒ¨åˆ†ã€‚&rdquo;</p></div>
          <p>åˆé¤æ—¶çš„å¤ç›˜ä¸æ˜¯æ€»ç»“ã€‚è€Œæ˜¯è®©æ•´ä¸ªä¸€å¤©éƒ½æœ‰æ„ä¹‰çš„é‚£åœºå¯¹è¯ã€‚</p>
          <a href="/questionnaire.html" target="_blank" rel="noopener" style={{display:'block',marginTop:'2rem',padding:'20px 24px',border:'1px solid rgba(184,151,60,.3)',background:'rgba(184,151,60,.05)',textDecoration:'none',color:'var(--deep)'}}>
            <p style={{fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'var(--gold)',marginBottom:8}}>å·²é¢„è®¢ï¼Ÿ</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.15rem',fontWeight:500,margin:'0 0 4px'}}>å¡«å†™æ‚¨çš„èµ›å‰é—®å· &rarr;</p>
            <p style={{fontSize:'0.85rem',color:'var(--taupe)',margin:0}}>ä»…éœ€3åˆ†é’Ÿï¼Œå¸®åŠ©æˆ‘åœ¨å¼€çƒå‰äº†è§£æ‚¨çš„éœ€æ±‚ï¼Œä¸ºæ‚¨é‡èº«å®šåˆ¶å½“å¤©ä½“éªŒã€‚</p>
          </a>
        </div>
        <div className="pwap-day__right reveal">
          <div className="included">
            <h3>åŒ…å«å†…å®¹</h3>
            <ul className="included-list">
              <li className="included-item"><span className="included-dot"></span><p><strong>çƒåœºæŽ¨è</strong>æ ¹æ®æ‚¨çš„çƒæŠ€ã€å·®ç‚¹å’ŒæœŸæœ›é‡èº«åŒ¹é…</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>å¼€çƒæ—¶é—´</strong>å·²é¢„è®¢ï¼Œå…¨ç¨‹å®‰æŽ’</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>èµ›å‰ç®€æŠ¥</strong>äº†è§£çƒåœºï¼Œæ˜Žç¡®å…³æ³¨ç‚¹</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>ä¸ŽAndyåŒæ‰“18æ´ž</strong>ä½œä¸ºæ‚¨çš„çƒä¼´åŒåœºç«žæŠ€</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>çƒåœºå®žåœ°æŒ‡å¯¼</strong>çƒåœºç®¡ç†ã€é€‰æ†ã€å†³ç­–</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>èµ›åŽå¤ç›˜</strong>è¿›æ­¥ä¹‹å¤„ï¼Œå¾…æå‡æ–¹å‘</p></li>
              <li className="included-item"><span className="included-dot"></span><p><strong>åˆé¤</strong>åœ¨çƒåœºé¤åŽ…æˆ–ç²¾é€‰é¤åŽ…ï¼ˆæ‹›ç‰Œå…¨æ—¥ä½“éªŒï¼‰</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pwap-courses">
        <div className="courses-intro reveal">
          <p className="eyebrow" style={{color:'rgba(255,255,255,.45)'}}>é€‰æ‹©å“ªä¸ªçƒåœºï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.8rem,3vw,2.5rem)'}}>çƒåœºå§‹ç»ˆä¸Žæ‚¨å…±åŒé€‰æ‹©ã€‚</h2>
          <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.8,maxWidth:680}}>æœ‰åˆå­¦è€…çš„å›¢ä½“ã€è¾ƒçŸ­çš„åŠæ—¥â€”â€”æ€»æœ‰æ›´åˆé€‚çš„çƒåœºï¼Œæˆ‘ä¼šç›´æŽ¥å‘Šè¯‰æ‚¨å“ªä¸ªæ›´é€‚åˆã€‚éƒ¨åˆ†ä¼šå‘˜åˆ¶çƒåœºæ— æ³•è‡ªè¡Œé¢„è®¢â€”â€”å¯ä¸ºå®¢æˆ·å®‰æŽ’ã€‚</p>
        </div>
      </section>

      <section className="pwap-who">
        <div className="reveal">
          <p className="eyebrow">é€‚åˆå“ªäº›äºº</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.75rem',marginBottom:'2.5rem'}}>ä½“éªŒä¼šæ ¹æ®æ‚¨çš„çƒæŠ€é‡èº«è°ƒæ•´ã€‚</h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal"><span className="who-card__icon">01</span><h3>æ¥è®¿é«˜å°”å¤«çƒæ‰‹</h3><p>å¸Œæœ›é©¬ç•¥å¡å²›ä¹‹æ—…çœŸæ­£éš¾å¿˜ï¼Œè€Œä¸åªæ˜¯åœ¨çº¿é¢„è®¢ä¸€ä¸ªå¼€çƒæ—¶é—´ã€‚</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">02</span><h3>ç»ƒä¹ åœºä¸Žçƒåœºçš„è½å·®</h3><p>ç»ƒä¹ æˆç»©æ— æ³•åœ¨çƒåœºé‡çŽ°ã€‚é—®é¢˜å‡ ä¹Žæ€»æ˜¯çƒåœºç®¡ç†ï¼Œè€ŒéžæŒ¥æ†ã€‚</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">03</span><h3>ä¼ä¸šé«˜ç®¡å›¢ä½“</h3><p>å•†åŠ¡å›¢ä½“ã€æ¥å²›é«˜ç®¡ï¼Œä»¥åŠå¸Œæœ›æ‹¥æœ‰å…¨ç¨‹å®‰æŽ’çš„é«˜ç«¯ä¸€å¤©çš„äººå£«ã€‚</p></div>
          <div className="who-card reveal"><span className="who-card__icon">04</span><h3>åˆå­¦è€…</h3><p>å¸Œæœ›æœ‰ä¸“ä¸šé™ªä¼´ã€æ²¡æœ‰åŽ‹åŠ›çš„ä¼‘é—²çƒæ‰‹ã€‚è¿™ä¸€å¤©ä»Žä¸å›´ç»•æˆç»©è½¬ã€‚</p></div>
          <div className="who-card reveal reveal-delay-1"><span className="who-card__icon">05</span><h3>å¸¸é©»çƒæ‰‹</h3><p>åœ¨å²›ä¸Šå±…ä½ï¼Œå¯»æ±‚ä¸Žæ‰“åŒæ ·çƒåœºçš„èŒä¸šæ•™ç»ƒè¿›è¡Œå®šæœŸè®­ç»ƒã€‚</p></div>
          <div className="who-card reveal reveal-delay-2"><span className="who-card__icon">06</span><h3>å¸Œæœ›èŽ·å¾—æ›´å¤šçš„äºº</h3><p>å”¯ä¸€çš„è¦æ±‚æ˜¯æƒ³è¦ä¸€æ¬¡çœŸæ­£ä¸Žä¼—ä¸åŒçš„é«˜å°”å¤«ä½“éªŒã€‚</p></div>
        </div>
      </section>

      <section className="pwap-testimonials">
        <div className="reveal" style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="eyebrow" style={{color:'rgba(255,255,255,.35)'}}>çƒå‘˜çœŸå®žè¯„ä»·</p>
          <h2 className="serif-display" style={{color:'#fff',marginTop:'.75rem'}}>ä»–ä»¬çš„äº²èº«æ„Ÿå—ã€‚</h2>
        </div>
        <div className="pwap-testimonials__grid">
          <div className="testimonial reveal"><p>&ldquo;ä¸ŽAndyæ‰“çƒæ˜¯ä¸€æ¬¡éžå‡¡çš„ä½“éªŒã€‚ä»–æ‹¥æœ‰æ— ä¸Žä¼¦æ¯”çš„æ´žå¯ŸåŠ›ï¼Œä¼ æŽˆæ–¹å¼æ—¢ç»†è…»åˆè´´å¿ƒã€‚ä»…ä»…18æ´žä¹‹åŽï¼Œæˆ‘å‘çŽ°äº†è‡ªå·±æ½œåŠ›çš„æ–°é«˜åº¦ã€‚&rdquo;</p><span className="testimonial__author">â€” Jo</span></div>
          <div className="testimonial reveal reveal-delay-1"><p>&ldquo;å¯¹æ¯ä¸€æ†èƒŒåŽæ€è€ƒçš„ç†è§£ï¼Œæžå¤§æå‡äº†æˆ‘çš„å†³ç­–èƒ½åŠ›ã€‚æœ€ä»¤æˆ‘å°è±¡æ·±åˆ»çš„çž¬é—´ï¼šçœ‹ç€Andyç”¨ä¸‰å·é“è¶Šè¿‡æœ‰æ ‘æœ¨çš„å³æ›²é“ç‹—è…¿ï¼Œ220ç±³ç²¾å‡†è½åœ¨æžœå²­ä¸Šã€‚&rdquo;</p><span className="testimonial__author">â€” Finlay</span></div>
          <div className="testimonial reveal reveal-delay-2"><p>&ldquo;Andyå½»åº•æ”¹å˜äº†æˆ‘å¯¹çƒåœºç®¡ç†çš„è®¤çŸ¥ã€‚åœ¨Son Gualä¸Žä»–åŒæ‰“18æ´žåŽï¼Œæˆ‘æ‰“å‡ºäº†é‚£é‡Œæœ€å¥½çš„æˆç»©ï¼Œå¹¶çœŸæ­£ç†è§£äº†åŽŸå› ã€‚&rdquo;</p><span className="testimonial__author">â€” Adam</span></div>
        </div>
      </section>

      <section className="pwap-packages" id="packages">
        <div className="reveal">
          <p className="eyebrow">ä½“éªŒæ–¹æ¡ˆ</p>
          <h2 className="serif-display" style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'var(--deep)',marginTop:'.5rem',marginBottom:'1rem'}}>ä¸‰ä¸ªæ–¹æ¡ˆã€‚å…¨éƒ¨ç§äººå®šåˆ¶ï¼Œå…¨ç¨‹äº²è‡ªé™ªåŒã€‚</h2>
          <p style={{fontSize:'1rem',color:'var(--taupe)',lineHeight:1.8,maxWidth:560,marginBottom:'3rem'}}>åŒºåˆ«åœ¨äºŽè¿™ä¸€å¤©çš„å®Œæ•´ç¨‹åº¦ã€‚ä¸‰ä¸ªæ–¹æ¡ˆå‡æä¾›ç›¸åŒæ°´å‡†çš„çƒåœºä¸“ä¸šæŒ‡å¯¼ã€‚</p>
        </div>
        <div className="pricing-grid">
          <div className="tier reveal">
            <p className="tier__name-small">é©¬ç•¥å¡ç»å…¸ä¹‹æ—…</p>
            <h3 className="tier__name">ä¸ŽèŒä¸šçƒæ‰‹åŒåœº</h3>
            <p className="tier__price">æ¯äººâ‚¬350 + æžœå²­è´¹</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>æ ¹æ®æ‚¨çš„çƒæŠ€é‡èº«æŽ¨èçƒåœº</li>
              <li>å¼€çƒæ—¶é—´é¢„è®¢åŠå…¨ç¨‹å®‰æŽ’</li>
              <li>èµ›å‰ç®€æŠ¥ä¸Žçƒ­èº«</li>
              <li>ä¸ŽAndyåŒæ‰“18æ´ž</li>
              <li>å…¨ç¨‹çƒåœºå®žåœ°æŒ‡å¯¼</li>
              <li>èµ›åŽå¤ç›˜</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">ç«‹å³å’¨è¯¢ &rarr;</Link>
          </div>
          <div className="tier tier--feature reveal">
            <p className="tier__name-small">æ‹›ç‰Œå…¨æ—¥ä½“éªŒ</p>
            <h3 className="tier__name">å…¨ç¨‹é™ªåŒé«˜å°”å¤«æ—¥</h3>
            <p className="tier__price">æ¯äººèµ·ä»·â‚¬450 + æžœå²­è´¹</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>åŒ…å«é©¬ç•¥å¡ç»å…¸ä¹‹æ—…å…¨éƒ¨å†…å®¹</li>
              <li>Son Gualæˆ–Alcanada</li>
              <li>çƒåœºé¤åŽ…æ‚ é—²åˆé¤</li>
              <li>ç²¾å¿ƒæŒ‘é€‰çš„æƒŠå–œç¤¼å“</li>
              <li>ä»Žå®¹èŠ‚å¥â€”â€”å®Œæ•´çš„ä¸€å¤©</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">ç«‹å³å’¨è¯¢ &rarr;</Link>
          </div>
          <div className="tier reveal">
            <p className="tier__name-small">è‡³å°Šå®šåˆ¶ä½“éªŒ</p>
            <h3 className="tier__name">é«˜å°”å¤«ç§äººå®šåˆ¶ä¹‹æ—…</h3>
            <p className="tier__price">ä»·æ ¼é¢è®®</p>
            <div className="tier__rule"></div>
            <ul className="tier__features">
              <li>å¤šçƒåœºå…¨æ—¥æ¸¸æˆ–å®Œæ•´è¡Œç¨‹è§„åˆ’</li>
              <li>å¸•å°”é©¬å‡ºå‘ç§äººä¸“è½¦</li>
              <li>ç²¾é€‰é¤åŽ…æ™šå®´</li>
              <li>åˆä½œåœºé¦†æ°´ç–—æˆ–æ¢å¤ç–—ç¨‹</li>
              <li>å…¨ç¨‹ç¤¼å®¾åè°ƒæœåŠ¡</li>
              <li>é€‚åˆå›¢ä½“ã€ä¼ä¸šåŠä¸ªæ€§åŒ–å®šåˆ¶éœ€æ±‚</li>
            </ul>
            <Link href="/zh/contact" className="tier__btn">ç«‹å³å’¨è¯¢ &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__left reveal">
          <p className="eyebrow eyebrow--gold">å‡†å¤‡å¥½åœ¨é©¬ç•¥å¡å²›ç•…äº«é«˜å°”å¤«äº†å—ï¼Ÿ</p>
          <h2 className="serif-display" style={{color:'#fff'}}>è”ç³»æˆ‘ï¼Œè®©æˆ‘ä»¬å®‰æŽ’æ‚¨çš„ä¸“å±žä¸€å¤©ã€‚</h2>
          <p>å‘Šè¯‰æˆ‘æ‚¨çš„æ—¥æœŸã€å·®ç‚¹ä»¥åŠæœŸæœ›ã€‚æˆ‘ä¼šäº²è‡ªå›žå¤â€”â€”é€šå¸¸åœ¨24å°æ—¶å†…ã€‚</p>
        </div>
        <div className="cta-final__right reveal">
          <Link href="/zh/contact" className="btn btn--gold" style={{fontSize:11,padding:'15px 36px'}}>é¢„è®¢æ‚¨çš„é«˜å°”å¤«æ—¥ &rarr;</Link>
          <Link href="/zh/golf-courses" className="btn btn--outline-white">æŽ¢ç´¢çƒåœº</Link>
          <a href="/questionnaire.html" target="_blank" rel="noopener" className="btn btn--outline-white">èµ›å‰é—®å· &rarr;</a>
        </div>
      </section>
    </PageLayout>
  )
}

