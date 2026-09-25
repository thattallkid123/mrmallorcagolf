'use client'

import { useEffect, useState } from 'react'
import { currentPagePath, trackEvent, trackLead } from './analytics'
import { getLeadAttribution } from './lead-attribution'

const INITIAL_FORM = {
  fname: '',
  lname: '',
  email: '',
  dates: '',
  handicap: '',
  groupsize: '',
  serviceType: '',
  pwapFormat: '',
  experience: '',
  message: '',
  website: '',
}

export function useContactFormSubmission(lang = 'en') {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(INITIAL_FORM)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get('service')
    if (['pwap', 'trip-planning', 'tee-time-booking', 'both'].includes(requestedService)) {
      setForm((current) => ({ ...current, serviceType: requestedService, experience: requestedService }))
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    if (!started && name !== 'website' && String(value || '').trim()) {
      trackEvent('contact_form_start', {
        form_name: 'contact',
        language: lang,
        page_path: currentPagePath(),
      })
      setStarted(true)
    }

    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (submitting) return

    setError('')
    setSubmitting(true)

    try {
      const attribution = getLeadAttribution()
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang, attribution }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send enquiry right now.')
      }

      trackEvent('contact_form_submit', {
        form_name: 'contact',
        language: lang,
        service_type: form.serviceType || 'not_specified',
        pwap_format: form.pwapFormat || 'not_specified',
        experience: form.experience || form.pwapFormat || form.serviceType || 'not_specified',
        group_size: form.groupsize || 'not_specified',
        page_path: currentPagePath(),
        ...attribution,
      })
      trackLead('contact_form', {
        form_name: 'contact',
        language: lang,
        service_type: form.serviceType || 'not_specified',
        pwap_format: form.pwapFormat || 'not_specified',
        experience: form.experience || form.pwapFormat || form.serviceType || 'not_specified',
        group_size: form.groupsize || 'not_specified',
        page_path: currentPagePath(),
        ...attribution,
      })
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setStarted(false)
    } catch (submitError) {
      trackEvent('contact_form_error', {
        form_name: 'contact',
        language: lang,
        page_path: currentPagePath(),
      })
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
