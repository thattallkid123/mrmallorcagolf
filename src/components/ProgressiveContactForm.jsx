'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProgressiveContactForm({ locale = 'en', onSubmit }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tripDates: '',
    groupSize: '',
    handicap: '',
    service: '',
    notes: '',
  })

  const labels = {
    en: {
      step1Title: 'Let's start with the basics',
      step1Desc: 'Tell me your name, email, and trip dates.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      tripDates: 'Trip dates (e.g., 15-22 October 2026)',
      groupSize: 'Group size',
      next: 'Next',
      step2Title: 'Tell me more about your group',
      step2Desc: 'This helps me recommend the right courses and services.',
      handicap: 'Handicap range (optional)',
      service: 'What are you interested in?',
      selectService: 'Choose a service...',
      servicePlanTrip: 'Plan Your Trip (full service)',
      servicePlayPro: 'Play With A Pro (day coaching)',
      serviceBoth: 'Both services',
      notes: 'Anything else? (optional)',
      submit: 'Send my details',
      back: 'Back',
      successTitle: 'Got it!',
      successDesc: 'I'll review your details and get back to you within 24 hours with a recommendation and quote.',
    },
  }

  const text = labels[locale] || labels.en
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1 && (!formData.firstName || !formData.email || !formData.tripDates)) {
      alert('Please fill in name, email, and trip dates')
      return
    }
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (onSubmit) {
      await onSubmit(formData)
    }
    setStep(3)
  }

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '40px 20px' }}>
      {step === 1 && (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--deep)', marginBottom: 8 }}>
            {text.step1Title}
          </h2>
          <p style={{ color: 'var(--taupe)', marginBottom: 28, fontSize: '0.9rem' }}>
            {text.step1Desc}
          </p>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.firstName}
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Andy"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.lastName}
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Griffiths"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box' }}
              required
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.tripDates}
            </label>
            <input
              type="text"
              name="tripDates"
              value={formData.tripDates}
              onChange={handleChange}
              placeholder="15-22 October 2026"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box' }}
              required
            />
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.groupSize}
            </label>
            <select
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box', cursor: 'pointer' }}
            >
              <option value="">Choose group size...</option>
              <option value="1">Solo</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5+">5+ people</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'var(--pine)',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {text.next}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--deep)', marginBottom: 8 }}>
            {text.step2Title}
          </h2>
          <p style={{ color: 'var(--taupe)', marginBottom: 28, fontSize: '0.9rem' }}>
            {text.step2Desc}
          </p>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.handicap}
            </label>
            <input
              type="text"
              name="handicap"
              value={formData.handicap}
              onChange={handleChange}
              placeholder="e.g., 12, or beginner"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.service}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box', cursor: 'pointer' }}
            >
              <option value="">{text.selectService}</option>
              <option value="plan">{text.servicePlanTrip}</option>
              <option value="pro">{text.servicePlayPro}</option>
              <option value="both">{text.serviceBoth}</option>
            </select>
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 6 }}>
              {text.notes}
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any courses you're already considering? Specific preferences?"
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.9rem', border: '1px solid var(--linen)', borderRadius: 4, boxSizing: 'border-box', minHeight: 120, fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: 'var(--cream)',
                color: 'var(--deep)',
                border: '1px solid var(--linen)',
                borderRadius: 4,
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {text.back}
            </button>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: 'var(--pine)',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {text.submit}
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            Success
          </p>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--deep)', marginBottom: 16 }}>
            {text.successTitle}
          </h2>
          <p style={{ color: 'var(--charcoal)', marginBottom: 28, lineHeight: 1.6 }}>
            {text.successDesc}
          </p>
          <Link href="/" style={{ color: 'var(--pine)', textDecoration: 'none', fontWeight: 500 }}>
            Back to home
          </Link>
        </div>
      )}
    </div>
  )
}
