/**
 * @module redux
 */

// lib
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
// redux
import device from './device'

const reducers = combineReducers({
  device
})

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
)
