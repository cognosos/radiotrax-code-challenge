/**
 * @module util/string
 */

/**
 * Convert an object to a Query Params string.
 * @param {Object} o The object to convert (shallow).
 * @return {String} query params a la `?color1=red&color2=blue`
 */
export function objectToQueryParams(o) {
  const params = Object.keys(o).reduce((sum, key) => {
    const isEmpty = o[key] === undefined || o[key] === null
    if (!isEmpty) sum.push(`${key}=${encodeURIComponent(o[key])}`)
    return sum
  }, [])

  return (params.length)
    ? `?${params.join('&')}`
    : ''
}

/**
 * Remove the leading slash from a string.
 * @param {String} s The string to clean.
 * @return {String} The string, stripped.
 */
export function stripLeadingSlash(s = '') { 
  return s.replace(/^\//, '')
}

/**
 * Remove the leading slash from a string.
 * @param {String} s The string to clean.
 * @return {String} The string, stripped.
 */
export function stripTrailingSlash(s = '') { 
  return s.replace(/\/$/, '')
}
