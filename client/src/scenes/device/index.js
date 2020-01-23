/**
 * @module scene/device
 */

// lib
import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import moment from 'moment'
// redux
import {getDevice} from '../../redux/device'
// components
import Device from '../../components/device'
import Layout from '../../components/layout'
import Loading from '../../components/loading'
// style
import style from './style.scss'

/**
 * A scene that shows details on a specific device.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function DeviceScene(props) {
  const {actions, device} = props
  const dispatch = useDispatch()
  const {id} = useParams()
  const [t] = useTranslation()

  // fill redux state with device
  if (!device) {
    dispatch(actions.getDevice(id))
  }

  if (!device) return (
    <Layout full={true} centered={true}>
      <Loading theme="dark" />
    </Layout>
  )

  return (
    <div className={style.container}>
      <Device {...device} />
    </div>
  )
}

/**
 * Map state to props.
 * @param {Object} state Component state.
 * @return {Object} mapped state.
 */
function mapStateToProps(state){
  const {device: {current}} = state
  return {device: current}
}

/**
 * Map dispatch to props.
 * @param {Object} dispatch Component state.
 * @return {Object} mapped properties.
 */
function mapDispatchToProps(dispatch){
  return {
    actions: {getDevice}
  }
}

let Wrapped = DeviceScene
Wrapped = connect(mapStateToProps, mapDispatchToProps)(Wrapped)

export default Wrapped
