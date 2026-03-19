import Link from 'next/link'

export default function PostLayout({ children, meta }) {
  return (
    <div className="post-wrap">

      {/* HEADER */}
      <header className="post-header">
        <div className="post-header__inner">
          <p className="breadcrumb">
            <Link href="/" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Home</Link>
            {' '}&nbsp;/&nbsp;{' '}
            <Link href="/guides" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Guides</Link>
            {' '}&nbsp;/&nbsp;{' '}
            <span style={{color:'var(--gold-light)'}}>{meta.badge}</span>
          </p>
          <div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap',margin:'1.25rem 0 1rem'}}>
            <span style={{
              fontSize:'9px',letterSpacing:'.16em',textTransform:'uppercase',
              fontFamily:"'Jost',sans-serif",fontWeight:500,
              padding:'4px 10px',
              background: meta.badgeGold ? 'rgba(184,151,60,.15)' : 'rgba(255,255,255,.08)',
              color: meta.badgeGold ? 'var(--gold-light)' : 'rgba(255,255,255,.5)',
              border: `1px solid ${meta.badgeGold ? 'rgba(184,151,60,.3)' : 'rgba(255,255,255,.1)'}`,
            }}>{meta.badge}</span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'rgba(255,255,255,.35)'}}>
              {meta.readTime}
            </span>
            <span style={{fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",color:'rgba(255,255,255,.35)'}}>
              Updated {meta.updated}
            </span>
          </div>
          <h1 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(1.8rem,4vw,3rem)',
            fontWeight:400,
            color:'#fff',
            lineHeight:1.1,
            maxWidth:720,
          }}>{meta.title}</h1>
          <p style={{
            fontSize:'1.05rem',fontWeight:300,color:'rgba(255,255,255,.6)',
            lineHeight:1.8,maxWidth:600,marginTop:'1.25rem',
          }}>{meta.intro}</p>
        </div>
      </header>

      {/* BODY */}
      <div className="post-body">
        <article className="post-article">
          {children}
        </article>

        {/* SIDEBAR */}
        <aside className="post-sidebar">
          <div className="post-sidebar__block">
            <p className="post-sidebar__label">The Experience</p>
            <h3>Play one of these courses with a PGA professional alongside you.</h3>
            <p>Private days on Son Gual, Alcanada, and beyond. Everything arranged. On-course coaching throughout.</p>
            <Link
              href="/play-with-a-pro"
              style={{
                display:'block',textAlign:'center',
                fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',
                padding:'13px',background:'var(--gold)',color:'var(--deep)',
                textDecoration:'none',fontFamily:"'Jost',sans-serif",marginTop:'1.25rem',
              }}
            >
              See the Experiences &rarr;
            </Link>
            <Link
              href="/contact"
              style={{
                display:'block',textAlign:'center',
                fontSize:'9px',fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',
                padding:'13px',background:'transparent',color:'var(--pine)',
                textDecoration:'none',fontFamily:"'Jost',sans-serif",marginTop:'8px',
                border:'1px solid var(--pine)',
              }}
            >
              Get in Touch
            </Link>
          </div>

          <div className="post-sidebar__block" style={{marginTop:'2px'}}>
            <p className="post-sidebar__label">More Guides</p>
            <ul style={{listStyle:'none',padding:0,margin:0}}>
              {meta.related.map(r => (
                <li key={r.slug} style={{borderBottom:'1px solid var(--linen)',padding:'10px 0'}}>
                  <Link href={`/guides/${r.slug}`} style={{
                    fontSize:'0.85rem',fontWeight:300,color:'var(--charcoal)',
                    textDecoration:'none',lineHeight:1.5,display:'block',
                  }}>
                    {r.title}
                  </Link>
                </li>
              ))}
              <li style={{paddingTop:12}}>
                <Link href="/guides" style={{
                  fontSize:'9px',letterSpacing:'.14em',textTransform:'uppercase',
                  fontFamily:"'Jost',sans-serif",color:'var(--gold)',textDecoration:'none',
                }}>
                  All guides �
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

