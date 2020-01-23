export const STATUS_CODES = {
  0: 'Unknown',
  1: 'Unavailable',
  10: 'Available'
}

// human-readable keyed version of status codes
export const STATUS_TEXT = Object.keys(STATUS_CODES).reduce((sum, key) => {
  sum[STATUS_CODES[key]] = key
  return sum
}, {})
