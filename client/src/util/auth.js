/**
 * @module util/auth
 */

/**
 * Encodes user credentials as Base64.
 * @param {String} username A username string to encode.
 * @param {String} password A password string to encode.
 * @return {String} The encoded credentials.
 */
export function authEncode(username, password) {
  return Buffer.from(`${username}:${password}`).toString('base64')
}
