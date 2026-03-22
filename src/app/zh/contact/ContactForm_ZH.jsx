'use client'
import { useState } from 'react'

export default function ContactForm_ZH() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ fname:'', lname:'', email:'', dates:'', handicap:'', groupsize:'', experience:'', message:'' })
  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="contact-wrap">
      <div className="contact-left">
        <div>
          <p style={{fontSize:'9px',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:'1.5rem'}}>立即联系</p>
          <h1 className="serif-display" style={{fontSize:'clamp(2rem,4vw,3.2rem)',color:'#fff',lineHeight:1.08,marginBottom:'1.5rem'}}>告诉我您的需求。其余交给我。</h1>
          <p className="contact-left__intro">没有预订系统。告诉我您的日期、差点以及期望。我会亲自回复您。</p>
        </div>
        <div className="contact-cards">
          <a href="mailto:andy@mrmallorcagolf.com" className="contact-card">
            <span className="contact-card__icon">✉</span>
            <div>
              <p className="contact-card__label">邮箱</p>
              <p className="contact-card__value">andy@mrmallorcagolf.com</p>
            </div>
          </a>
          <a href="https://wa.me/34624466702" className="contact-card contact-card--whatsapp" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:22,height:22}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg></span>
            <div>
              <p className="contact-card__label">WhatsApp</p>
              <p className="contact-card__value">+34 624 466 702</p>
            </div>
          </a>
          <a href="weixin://dl/chat?andygriffiths1" className="contact-card contact-card--wechat" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:22,height:22}}>
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c-.476-.97-.74-2.03-.74-3.15 0-4.07 3.893-7.358 8.693-7.358.306 0 .61.02.907.05C16.93 3.92 13.101 2.188 8.691 2.188zm-1.85 3.896c.559 0 1.013.453 1.013 1.011 0 .559-.454 1.012-1.013 1.012-.56 0-1.013-.453-1.013-1.012 0-.558.453-1.011 1.013-1.011zm4.856 0c.559 0 1.013.453 1.013 1.011 0 .559-.454 1.012-1.013 1.012-.56 0-1.013-.453-1.013-1.012 0-.558.453-1.011 1.013-1.011zm3.932 3.516c-4.18 0-7.573 2.914-7.573 6.51 0 3.595 3.393 6.51 7.573 6.51.82 0 1.612-.12 2.352-.33a.717.717 0 01.588.08l1.564.916a.271.271 0 00.137.044.243.243 0 00.243-.243c0-.059-.023-.118-.039-.176l-.32-1.218a.484.484 0 01.175-.547C22.578 19.61 24 17.943 24 16.11c0-3.596-3.393-6.51-7.571-6.51zm-2.588 3.218c.46 0 .833.372.833.832 0 .46-.373.833-.833.833-.46 0-.832-.373-.832-.833 0-.46.373-.832.832-.832zm5.176 0c.46 0 .833.372.833.832 0 .46-.373.833-.833.833-.46 0-.832-.373-.832-.833 0-.46.372-.832.832-.832z"/>
              </svg></span>
            <div>
              <p className="contact-card__label">微信</p>
              <p className="contact-card__value">andygriffiths1</p>
            </div>
          </a>
          <div className="contact-card contact-card--info">
            <span className="contact-card__icon">⏱</span>
            <div>
              <p className="contact-card__label">响应时间</p>
              <p className="contact-card__value">24小时内——通常更快</p>
            </div>
          </div>
          <a href="https://maps.google.com/?q=Mallorca,Spain" className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon">📍</span>
            <div>
              <p className="contact-card__label">所在地</p>
              <p className="contact-card__value">西班牙马略卡岛</p>
            </div>
          </a>
        </div>
        <div className="promise-block">
          <p>&ldquo;请与我联系。告诉我您的日期和需求——我会在24小时内亲自回复。&rdquo;</p>
          <cite>Andy Griffiths &middot; PGA Advanced Professional</cite>
        </div>
      </div>
      <div className="contact-right">
        {submitted ? (
          <div className="form-success visible">
            <div className="form-success__icon">&#10003;</div>
            <h3>咨询已收到。</h3>
            <p>我将在24小时内亲自联系您。WhatsApp是最便捷的沟通方式。</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <p style={{fontSize:'9px',fontWeight:500,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--taupe)',marginBottom:'.5rem'}}>咨询表格</p>
              <h2>开始规划您的高尔夫日。</h2>
              <p>您提供的细节越多，我就能越好地为您量身定制。</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">名</label><input type="text" id="fname" name="fname" className="form-control" placeholder="伟" required value={form.fname} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="lname">姓</label><input type="text" id="lname" name="lname" className="form-control" placeholder="张" required value={form.lname} onChange={handleChange} /></div>
              </div>
              <div className="form-group"><label htmlFor="email">电子邮件地址</label><input type="email" id="email" name="email" className="form-control" placeholder="zhang@example.com" required value={form.email} onChange={handleChange} /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="dates">希望的日期</label><input type="text" id="dates" name="dates" className="form-control" placeholder="例如：2026年10月15-22日" value={form.dates} onChange={handleChange} /></div>
                <div className="form-group"><label htmlFor="handicap">您的差点</label><input type="text" id="handicap" name="handicap" className="form-control" placeholder="例如：14 或 初学者" value={form.handicap} onChange={handleChange} /></div>
              </div>
              <div className="form-group">
                <label htmlFor="groupsize">团队人数</label>
                <select id="groupsize" name="groupsize" className="form-control" value={form.groupsize} onChange={handleChange}>
                  <option value=""></option>
                  <option>1人 — 单人</option>
                  <option>2人 — 双人</option>
                  <option>3-4人 — 小团体</option>
                  <option>5人以上 — 较大团体/企业</option>
                </select>
              </div>
              <div className="form-group">
                <label>您对哪种体验感兴趣？</label>
                <div className="radio-group">
                    <label className="radio-option"><input type="radio" name="experience" value="mallorca-round" checked={form.experience === "mallorca-round"} onChange={handleChange} /><span className="radio-option-label">马略卡经典之旅</span><span className="radio-option-price">每人起价500欧元</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="signature-day" checked={form.experience === "signature-day"} onChange={handleChange} /><span className="radio-option-label">招牌全日体验</span><span className="radio-option-price">每人起价650欧元</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="full-experience" checked={form.experience === "full-experience"} onChange={handleChange} /><span className="radio-option-label">至尊定制体验</span><span className="radio-option-price">价格面议</span></label>
                    <label className="radio-option"><input type="radio" name="experience" value="not-sure" checked={form.experience === "not-sure"} onChange={handleChange} /><span className="radio-option-label">尚未确定 - 请给我建议</span></label>
                </div>
              </div>
              <div className="form-group"><label htmlFor="message">其他需要了解的信息</label><textarea id="message" name="message" className="form-control" placeholder="这一天的目标、球场偏好、特殊需求等。" value={form.message} onChange={handleChange} /></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">提交咨询 &rarr;</button>
                <p className="form-note">我会在24小时内亲自回复每一封咨询。</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
