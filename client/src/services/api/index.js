/**
 * @module services/api
 */

// lib
import _ from 'lodash'
// constants
import {API_TIMEOUT, API_BASE_URL, API_CHANNEL} from '../../constants/api'
// util
import {stripLeadingSlash, stripTrailingSlash} from '../../util/string'

/**
 * Prefix the API URL to given paths.
 * @param {String} path The URI path.
 * @return {String} The full URL.
 */
function URL(path) {
  return `${stripTrailingSlash(API_BASE_URL)}/${stripLeadingSlash(path)}`
}

/**
 * Generates HTTP request headers with:
 * - Request channel ID
 * - Basic Auth credentials
 * - Content type
 * @param {String} username The username basic auth credentials.
 * @param {String} password The password basic auth credentials.
 * @return {Object} Headers.
 */
function authHeaders(username, password) {
  return new Headers({
    'X-Channel': API_CHANNEL,
    'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
    'Content-Type': 'application/json'
  })
}

export default {
  /**
   * HTTP GET request.
   * @memberof services/api
   * @param {String} path The URL.
   * @return {Promise}
   */
  get(path){
    const credentials = JSON.parse(localStorage.getItem('auth-credentials')) || {}

    return fetch(URL(path), {
      method:'GET',
      headers: authHeaders(credentials.username, credentials.password)
    })
  }
}
