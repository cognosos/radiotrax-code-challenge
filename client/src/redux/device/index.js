/**
 * @module redux/device
 */

// services
import DeviceService from '../../services/device'
// util
import {cleanId} from '../../util'

/**
 * Action names
 */

const SET_LIST = 'device/SET_LIST'
const SET_CURRENT = 'device/SET_CURRENT'
const RESET_CURRENT = 'device/RESET_CURRENT'

/**
 * States.
 */

const initialState = {
  list: null,
  current: null
}

/**
 * Async Actions
 */

/**
 * Retrieve a list of devices.
 * @return {Function} Action creator.
 */
export function getDevices() {
  /**
   * Dispatches action(s).
   * @param {Function} dispatch The redux dispatcher.
   * @return {Promise}
   */
  return async(dispatch) => {
    try {
      const devices = await DeviceService.list()
      dispatch(setList(devices))
    } catch (e){
      console.warn(`Something went wrong. Unable to fetch devices. ${e.message}`, e)
    }
  }
}

/**
 * Retrieve a device.
 * @param {String|Number} device A device id.
 * @return {Function} Action creator.
 */
export function getDevice(id){
  /**
   * Dispatches action(s).
   * @param {Function} dispatch The redux dispatcher.
   * @return {Promise}
   */
  return async(dispatch) => {
    try {
      const device = await DeviceService.fetch(cleanId(id))
      dispatch(setCurrent(device))
    } catch (e){
      console.warn(`Something went wrong. Unable to fetch the device. ${e.message}`, e)
    }
  }
}

/**
 * Actions
 */

/**
 * Assign a list of available devices.
 * @param {Object} list A list of devices.
 * @return {Object} Redux action.
 */
export function setList(list){
  return {
    type: SET_LIST,
    list
  }
}

/**
 * Assign the current device.
 * @param {Object} devic e The store to assign.
 * @return {Object} Redux action.
 */
export function setCurrent(device){
  return {
    type: SET_CURRENT,
    device
  }
}

/**
 * Reset the current device.
 * @param {Object} devic e The store to assign.
 * @return {Object} Redux action.
 */
export function resetCurrent(){
  return {
    type: RESET_CURRENT
  }
}

/**
 * Reducers.
 */

/**
 * The redux state reducer.
 * @param {Object} state The redux state.
 * @param {Object} action The redux action to execute.
 * @return {Object} The updated redux state.
 */
export default function deviceReducer(state = initialState, action){
  switch (action.type){
    case SET_LIST:
      return {
        ...state,
        list: action.list
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.device
      }
    case RESET_CURRENT:
      return {
        ...state,
        current: initialState.current
      }
    default:
      return state
  }
  return state
}
