'use client'
import { useEffect } from 'react'

// WebMCP (https://webmachinelearning.github.io/webmcp/): exposes two read-only
// tools to browser agents. Neither submits a form or sends anything; the
// enquiry still has to be written and sent by the visitor.

const LOCALES = ['de', 'es', 'fr', 'nl', 'sv', 'zh']

const PAGES = {
  home: '/',
  courses: '/golf-courses',
  guides: '/guides',
  tools: '/tools',
  'course-selector': '/tools/course-selector',
  'golf-cost-calculator': '/tools/golf-cost-calculator',
  'golf-day-builder': '/tools/golf-day-builder',
  'play-with-a-pro': '/play-with-a-pro',
  'plan-your-trip': '/plan-your-trip',
  contact: '/contact',
}

function localePrefix() {
  const first = window.location.pathname.split('/')[1]
  return LOCALES.includes(first) ? `/${first}` : ''
}

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = document.modelContext || navigator.modelContext
    if (!modelContext || typeof modelContext.registerTool !== 'function') return undefined

    const controller = new AbortController()
    const options = { signal: controller.signal }

    const tools = [
      {
        name: 'get_site_overview',
        description:
          'Returns the Mr Mallorca Golf site index: every course review and planning guide with a one-line summary, the current offers and how to get in touch. Read this first for any question about golf in Mallorca.',
        inputSchema: { type: 'object', properties: {} },
        async execute() {
          const res = await fetch('/llms.txt')
          const text = res.ok ? await res.text() : 'The site index is unavailable right now.'
          return { content: [{ type: 'text', text }] }
        },
      },
      {
        name: 'open_page',
        description:
          'Navigates the visitor to a section of the site, for example the course selector or the contact page. It only navigates: it never submits a form or sends an enquiry.',
        inputSchema: {
          type: 'object',
          properties: {
            page: {
              type: 'string',
              enum: Object.keys(PAGES),
              description: 'Which page to open.',
            },
          },
          required: ['page'],
        },
        async execute({ page }) {
          const path = PAGES[page]
          if (!path) return { content: [{ type: 'text', text: `Unknown page "${page}".` }], isError: true }
          const target = `${localePrefix()}${path === '/' ? '' : path}` || '/'
          window.location.assign(target)
          return { content: [{ type: 'text', text: `Opening ${target}` }] }
        },
      },
    ]

    for (const tool of tools) {
      try {
        const result = modelContext.registerTool(tool, options)
        if (result && typeof result.catch === 'function') result.catch(() => {})
      } catch {
        // An unsupported or changed WebMCP API must never break the page.
      }
    }

    return () => controller.abort()
  }, [])

  return null
}
