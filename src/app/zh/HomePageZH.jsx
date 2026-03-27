'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const courses = [
  { cls: 'course-card--1', badge: '★ 专家推荐', region: '帕尔马 · 距市中心11公里', name: 'Son Gual', meta: ['锦标赛级','标准杆72','€80–165'], stars: '★★★★★', difficulty: '难度9/10', excerpt: '托马斯·希梅尔的2007年设计拥有自己独特的风力生态系统。最后九洞——第15至18洞——属于欧洲高尔夫四大最佳球洞之列。', img: '/images/son-gual.jpg' },
  { cls: 'course-card--2', badge: '★ 专家推荐', region: '阿尔库迪亚 · 马略卡岛北部', name: 'Alcanada', meta: ['滨海球场','标准杆72','€115–220'], stars: '★★★★★', difficulty: '难度7/10', excerpt: '罗伯特·特伦特·琼斯二世在其最富戏剧性的设计中。灯塔从18个球洞中的16个可见。西班牙最上镜的高尔夫球场之一。', img: '/images/alcanada.jpg' },
  { cls: 'course-card--3', badge: '西班牙最佳 2025', region: '桑维达 · 帕尔马', name: 'Son Muntaner', meta: ['DP世界巡回赛','标准杆72'], stars: '★★★★★', difficulty: '难度7/10', excerpt: '荣获2025年世界高尔夫大奖评选为西班牙最佳高尔夫球场。俯瞰帕尔马湾。第15洞有一棵千年古橄榄树。', img: '/images/son-muntaner.webp' },
  { cls: 'course-card--4', badge: null, region: '圣庞萨 · 西南部', name: 'Santa Ponsa 1', meta: ['DP世界巡回赛','标准杆72','€77–126'], stars: '★★★★☆', difficulty: '难度8/10', excerpt: '2021年DP世界巡回赛马略卡高尔夫公开赛的举办地。岛上最长的球场之一——第10洞590米是欧洲最长的标准杆5之一。', img: '/images/santa-ponsa.webp' },
  { cls: 'course-card--5', badge: null, region: '坎普德马尔 · 西南部', name: 'Golf de Andratx', meta: ['最具挑战性','标准杆72','€96–140'], stars: '★★★★☆', difficulty: '难度9/10', excerpt: '第6洞是西班牙最长的标准杆5，长609米。建造在沿海丘陵上，毫不妥协。带上备用球和谦逊。', img: '/images/andratx.webp' },
]

const faqs = [
  { q: '我需要是个很会打高尔夫的人吗？', a: '不需要，完全不需要。该体验会根据您的水平进行调整——初学者和职业选手都能从这一天获益同样多。唯一的先决条件是渴望获得一次真正不同的高尔夫体验。' },
  { q: '您使用哪个球场？', a: '这取决于您。Son Gual和Alcanada是我进行完整严肃一日赛的主要球场。对于初学者、小组或较短的轮次，有更好的选择——我会诚实地告诉您哪个最合适。' },
  { q: '我如何预订？', a: '联系我。告诉我您的日期和您要找的东西——我会在24小时内亲自回复。没有预订系统。没有等待时间。' },
  { q: '它适合团体吗？', a: '是的。这些体验适用于个人、夫妇、朋友团体和企业活动。完整体验在访问岛屿的企业团体和高管中特别受欢迎。' },
  { q: '最佳来访时间是什么时候？', a: '10月、11月、3月和4月。球场条件、气候、性价比和打球速度的最佳组合。该岛全年都可以打球——1月时这里的fairways状况比英国8月的状况更好。' },
]

const FEATURE_ICONS = {
  coaching: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
  expertise: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" /></svg>,
  access: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  groups: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plan: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" /></svg>,
}

export default function HomePageZH() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const router = useRouter()
  const [currentCourseIdx, setCurrentCourseIdx] = useState(0)

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="hero-content">
          <p className="hero-eyebrow">马略卡岛高尔夫教练</p>
          <h1 className="hero-title">您的下一轮可能改变一切</h1>
          <p className="hero-subtitle">在顶级球场的个人教练。不是为了所有人。</p>

          <div className="hero-cta">
            <button onClick={() => router.push('/zh/contact')} className="btn btn-primary">
              立即预订
            </button>
            <button onClick={() => {}} className="btn btn-secondary">
              了解更多
            </button>
          </div>

          <div className="hero-trust">
            <p className="trust-text">★★★★★ 来自40多个国家的高尔夫球手的信任</p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <div className="intro__left">
            <h2>马略卡岛的高尔夫不仅仅是阳光和草坪</h2>
            <p className="intro-description">
              岛上最好的球场需要真正的理解。理解风型、草坪阅读和球场管理——您不仅会打得更好，您会在这里主宰。
            </p>
          </div>

          <div className="intro__right">
            <div className="intro-stats">
              <div className="stat">
                <h3>40+</h3>
                <p>国家代表</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>会回来</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>在球场上的日子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>它如何运作</h2>

        <div className="steps">
          <div className="step">
            <h3>1. 您联系我</h3>
            <p>告诉我您的目标、您的水平和您首选的日期。真实的对话，不是表格。</p>
          </div>
          <div className="step">
            <h3>2. 我们选择球场</h3>
            <p>根据天气、您的水平和您的目标，我选择完美的球场。</p>
          </div>
          <div className="step">
            <h3>3. 在球场上教练</h3>
            <p>充满有针对性课程、视频分析和真实改进的一轮。不仅仅是打球——理解。</p>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>世界级球场</h2>
        <p className="courses-intro">马略卡岛最好的18洞球场。每一个都有它的特色。</p>

        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div key={idx} className={`course-card ${course.cls}`}>
              {course.badge && <div className="course-badge">{course.badge}</div>}
              <img src={course.img} alt={course.name} className="course-image" />
              <div className="course-info">
                <p className="course-region">{course.region}</p>
                <h3>{course.name}</h3>
                <div className="course-meta">
                  {course.meta.map((m, i) => <span key={i}>{m}</span>)}
                </div>
                <p className="course-difficulty">{course.difficulty}</p>
                <p className="course-excerpt">{course.excerpt}</p>
                <div className="course-rating">{course.stars}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MALLORCA SECTION */}
      <section className="why-mallorca">
        <h2>为什么是马略卡岛</h2>
        <p className="why-description">
          在这里，气候、设计和历史结合成了独特的东西。这不仅是西班牙打高尔夫的最佳时间——它是欧洲最好的地方之一。
        </p>

        <div className="why-stats">
          <div className="why-stat">
            <h3>310+</h3>
            <p>每年晴天</p>
          </div>
          <div className="why-stat">
            <h3>25+</h3>
            <p>锦标赛级球场</p>
          </div>
          <div className="why-stat">
            <h3>1.5小时</h3>
            <p>从任何欧洲首都</p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL SECTION */}
      <section className="featured-carousel">
        <h2>精选球场</h2>
        <div className="carousel-container">
          {courses.length > 0 && (
            <div className="carousel-item">
              <div className="carousel-card">
                <img src={courses[currentCourseIdx].img} alt={courses[currentCourseIdx].name} />
                <h3>{courses[currentCourseIdx].name}</h3>
                <p>{courses[currentCourseIdx].region}</p>
              </div>
            </div>
          )}
          <div className="carousel-controls">
            <button onClick={() => setCurrentCourseIdx((prev) => (prev - 1 + courses.length) % courses.length)}>←</button>
            <button onClick={() => setCurrentCourseIdx((prev) => (prev + 1) % courses.length)}>→</button>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="what-you-get">
        <h2>您获得什么</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.coaching}</div>
            <h3>个人教练</h3>
            <p>没有通用教练。适合您的挥杆、想法和目标的教练。</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.expertise}</div>
            <h3>本地专业知识</h3>
            <p>在马略卡岛最好的球场上有20年的经验。我对这些球场的每一毫米都很了解。</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.access}</div>
            <h3>进入高级球场</h3>
            <p>您可能无法进入的锦标赛级球场。没有等候名单。</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.video}</div>
            <h3>视频分析</h3>
            <p>高频记录和球场上的分析。您看到它，理解它，立即纠正它。</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.groups}</div>
            <h3>小组或一对一</h3>
            <p>私人或与朋友。告诉我什么有效。</p>
          </div>
          <div className="feature">
            <div className="feature-icon">{FEATURE_ICONS.plan}</div>
            <h3>可持续计划</h3>
            <p>一个您可以在家实施的定制培训计划。</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <blockquote>
          "我人生中最好的高尔夫日。不是因为球场——而是因为我在球场上学到的东西。"
        </blockquote>
        <p className="testimonial-author">— James M.，差点为4的高尔夫球手</p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="packages">
        <h2>教练套餐</h2>

        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>简单体验</h3>
            <p className="tier-description">学习基础的一天</p>
            <div className="price">€595</div>
            <ul className="features-list">
              <li>9洞教练</li>
              <li>视频分析</li>
              <li>个性化练习计划</li>
              <li>高级球场（最高€80草坪费）</li>
            </ul>
            <button className="btn btn-secondary">选择</button>
          </div>

          <div className="pricing-tier featured">
            <div className="badge-featured">最受欢迎</div>
            <h3>完整体验</h3>
            <p className="tier-description">完整的转变</p>
            <div className="price">€1,290</div>
            <ul className="features-list">
              <li>完整的18洞教练日</li>
              <li>高频视频分析</li>
              <li>击球反馈</li>
              <li>锦标赛级球场（最高€165草坪费）</li>
              <li>跟进课程（30分钟）</li>
              <li>6周练习计划</li>
            </ul>
            <button className="btn btn-primary">预订</button>
          </div>

          <div className="pricing-tier">
            <h3>强化训练</h3>
            <p className="tier-description">对于认真对待自己比赛的高尔夫球手</p>
            <div className="price">€2,450</div>
            <ul className="features-list">
              <li>两天完整教练</li>
              <li>挥杆分析和视频</li>
              <li>短局游戏大师班</li>
              <li>心理游戏培训</li>
              <li>两个锦标赛级球场</li>
              <li>周检查（4周）</li>
              <li>个性化12周计划</li>
            </ul>
            <button className="btn btn-secondary">选择</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>常见问题</h2>
        <p className="faq-intro">您需要了解的关于马略卡岛教练的一切。</p>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFAQ === idx ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              {openFAQ === idx && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-final">
        <h2>准备好打得更好了吗？</h2>
        <p className="cta-text">
          开始的最好时间就是现在。次好的时间是您预订的那一刻。
        </p>
        <a href="https://wa.me/34624466702" className="btn btn-primary">
          立即预订
        </a>
      </section>
    </div>
  )
}
