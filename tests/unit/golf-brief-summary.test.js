import { describe, expect, test } from 'vitest'

import { briefSummaryLines, normalize, properName, tidyCourses } from '../../src/lib/golf-brief.js'

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

describe('must-play courses prefilled from the enquiry', () => {
  test('a typed list becomes capitalised names, with de and the like left lower case', () => {
    expect(tidyCourses('Son vida /son quint/son muntaner/alcanada')).toBe('Son Vida, Son Quint, Son Muntaner, Alcanada')
    expect(tidyCourses('golf de andratx and club de golf alcanada')).toBe('Golf de Andratx, Club de Golf Alcanada')
    expect(tidyCourses('t golf calvia, son gual & son antem')).toBe('T Golf Calvia, Son Gual, Son Antem')
  })

  test('leaves a sentence or anything unclear exactly as written', () => {
    expect(tidyCourses('We would like to play Son Vida if there is space.')).toBe('We would like to play Son Vida if there is space.')
    expect(tidyCourses('whatever you recommend for a group of nine golfers in September')).toBe('whatever you recommend for a group of nine golfers in September')
    expect(tidyCourses('')).toBe('')
    expect(tidyCourses(undefined)).toBe('')
  })
})

describe('group make-up, two rounds a day and days that cannot be played', () => {
  test('keeps only known make-up values and a yes for two rounds, and lists them for Andy', () => {
    const lines = Object.fromEntries(briefSummaryLines(normalize({ ...base, mix: 'mixed', twoRounds: 'yes', unavailable: 'Tuesday 14th' })))
    expect(lines.Group).toBe('Men and women')
    expect(lines['Two rounds in a day']).toBe('Happy to')
    expect(lines['Cannot play']).toBe('Tuesday 14th')
    const odd = normalize({ ...base, mix: 'everyone', twoRounds: 'maybe' })
    expect(odd.mix).toBe('')
    expect(odd.twoRounds).toBe('')
    expect(Object.keys(Object.fromEntries(briefSummaryLines(odd)))).not.toContain('Group')
  })

  test('adds nothing when the client leaves them blank', () => {
    const labels = briefSummaryLines(normalize(base)).map(([label]) => label)
    expect(labels).not.toContain('Group')
    expect(labels).not.toContain('Two rounds in a day')
    expect(labels).not.toContain('Cannot play')
  })
})
