/**
 * @module services/auth
 */

// services
import API from '../api'

/**
 * A placeholder service just to test that we have working credentials.
 * There is very likely a better way to do this.
 * @memberof services/auth
 */
class AuthService {
  /**
   * Test basic auth credentials
   * HTTP GET.
   */
  static async verifyCreds() {
    const response = await API.get('/auth')
    return (response && response.status === 200) ? true : false
  }
}

export default AuthService
