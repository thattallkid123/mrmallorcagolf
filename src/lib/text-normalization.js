const MOJIBAKE_PATTERN = /[ÃÂâ]/u

function scoreMojibake(value) {
  const matches = value.match(/[ÃÂâ]/gu)
  return matches ? matches.length : 0
}

export function repairLikelyMojibake(value) {
  if (typeof value !== 'string') return value
  if (!MOJIBAKE_PATTERN.test(value)) return value

  const repaired = Buffer.from(value, 'latin1').toString('utf8')
  if (repaired.includes('\uFFFD')) return value

  return scoreMojibake(repaired) < scoreMojibake(value) ? repaired : value
}

export function normalizeMojibakeDeep(value) {
  if (typeof value === 'string') {
    return repairLikelyMojibake(value)
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeMojibakeDeep(item))
  }

  if (value && typeof value === 'object') {
    const output = {}
    for (const [key, nestedValue] of Object.entries(value)) {
      output[key] = normalizeMojibakeDeep(nestedValue)
    }
    return output
  }

  return value
}
