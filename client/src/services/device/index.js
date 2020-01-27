/**
 * @module services/device
 */

// services
import API from '../api'

/**
 * A service to retrieve and manipulate Device data.
 * @memberof services/device
 */
class DeviceService {
  /**
   * HTTP GET.
   * List all devices in a store.
   * @param {Object} params List parameters:
   *  - @param {Number} page The current pagination page of the result set.
   *  - @param {Number} limit The number of results to limit the response to.
   * @return {Array} a list of organizations.
   */
  static async list({page, limit} = {}) {
    const response = await API.get('/devices', {page, limit})
    return await response.json()
  }

  /**
   * HTTP GET.
   * Get a specific device.
   * @param {String} id The device to fetch.
   * @return {Object} A device.
   */
  static async fetch(id){
    if (id) {
      const response = await API.get(`/devices/${id}`)
      return await response.json()
    }

    return null
  }
}

export default DeviceService
