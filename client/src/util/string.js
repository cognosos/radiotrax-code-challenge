/**
 * @module util/string
 */

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
