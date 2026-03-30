'use client'

import { useState } from 'react'

const INITIAL_FORM = {
  fname: '',
  lname: '',
  email: '',
  dates: '',
  handicap: '',
  groupsize: '',
  experience: '',
  message: '',
  website: '',
}

export function useContactFormSubmission(lang = 'en') {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (submitting) return

    setError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send enquiry right now.')
      }

      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch (submitError) {
      setError(submitError.message || 'Unable to send enquiry right now.')
    } finally {
      setSubmitting(false)
    }
  }

  return {
    error,
    form,
    handleChange,
    handleSubmit,
    setForm,
    submitted,
    submitting,
  }
}
