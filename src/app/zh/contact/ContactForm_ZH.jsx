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
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail__label">回复时间</span><span className="contact-detail__value">24小时内 — Andy亲自回复</span></div>
          <div className="contact-detail"><span className="contact-detail__label">WhatsApp</span><span className="contact-detail__value"><a href="https://wa.me/34624466702">WhatsApp联系Andy &rarr;</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">电子邮件</span><span className="contact-detail__value"><a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></span></div>
          <div className="contact-detail"><span className="contact-detail__label">所在地</span><span className="contact-detail__value">西班牙马略卡岛</span></div>
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
