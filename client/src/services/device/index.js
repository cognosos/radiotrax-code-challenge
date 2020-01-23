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
   * List all devices in a store.
   * HTTP GET.
   * @return {Array} a list of organizations.
   */
  static async list(page, limit){
    const response = await API.get('/devices')
    return await response.json()
  }

  /**
   * Get a specific device.
   * HTTP GET.
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
