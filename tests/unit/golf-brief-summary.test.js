import { describe, expect, test } from 'vitest'

import { briefSummaryLines, normalize, properName } from '../../src/lib/golf-brief.js'

const base = {
  name: 'Test Client', email: 'T@Example.com', dateMode: 'fixed', from: '2027-03-10', to: '2027-03-14',
  golfers: 4, rounds: 3, handicap: '10-20', window: 'morning', windowRule: 'flexible', priority: 'price',
  courses: 'Son Gual, Alcanada', area: 'Alcudia', budget: 600, buggies: 2, clubs: 0, notes: 'Last round finishes by 14:00.',
}

describe('golf brief summary for the notification email', () => {
  test('lists every answer Andy needs, in reply order', () => {
    const lines = briefSummaryLines(normalize(base))
    expect(lines.map(([label]) => label)).toEqual(['Dates', 'Golfers', 'Handicap', 'Start times', 'Must-play courses', 'Staying', 'Budget', 'Hire per round', 'Notes'])
    const text = Object.fromEntries(lines)
    expect(text.Dates).toBe('10 Mar 2027 to 14 Mar 2027')
    expect(text.Golfers).toBe('4, 3 rounds')
    expect(text['Start times']).toBe('09:00 to 12:00, other times welcome, priority lower price')
    expect(text.Budget).toBe('€600 per person')
    expect(text['Hire per round']).toBe('2 buggies, 0 club sets')
  })

  test('leaves out what the client left blank and says when dates are open', () => {
    const lines = briefSummaryLines(normalize({ name: 'A', email: 'a@b.co', dateMode: 'unknown', golfers: 2, window: 'any', priority: 'balance' }))
    const text = Object.fromEntries(lines)
    expect(text.Dates).toBe('Not decided')
    expect(text['Start times']).toBe('Any start time, priority balance of price and time')
    expect(text.Budget).toBeUndefined()
    expect(text['Must-play courses']).toBeUndefined()
    expect(text['Hire per round']).toBeUndefined()
  })

  test('marks flexible dates and a single day', () => {
    const text = Object.fromEntries(briefSummaryLines(normalize({ ...base, dateMode: 'flexible', to: '2027-03-10' })))
    expect(text.Dates).toBe('10 Mar 2027 (flexible)')
  })
})

describe('names typed in lower case or capitals', () => {
  test('are written in capital case, keeping Dutch name particles lower case', () => {
    expect(properName('gijs verkaik')).toBe('Gijs Verkaik')
    expect(properName('JAN VAN DER BERG')).toBe('Jan van der Berg')
    expect(properName("sean o'brien-smith")).toBe("Sean O'Brien-Smith")
    expect(properName('  anna   lopez ')).toBe('Anna Lopez')
  })

  test('leaves a name that already has mixed case alone', () => {
    expect(properName('Ian McDonald')).toBe('Ian McDonald')
    expect(properName('Pieter de Vries')).toBe('Pieter de Vries')
    expect(properName('')).toBe('')
    expect(properName(undefined)).toBe('')
  })

  test('normalize fixes the name before it is saved or emailed', () => {
    expect(normalize({ ...base, name: 'gijs verkaik' }).name).toBe('Gijs Verkaik')
  })
})
