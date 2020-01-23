/**
 * @module scenes/devices
 */

// lib
import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
// redux
import {getDevices, resetCurrent as resetCurrentDevice} from '../../redux/device'
// components
import Device from '../../components/device'
import Layout from '../../components/layout'
import Loading from '../../components/loading'
import Collection from '../../components/collection'
import Card from '../../components/card'
import Icon from '../../components/icon'
// style
import style from './style.scss'

/**
 * A scene that lists available devices.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function DevicesScene(props) {
  const {actions, devices} = props
  const dispatch = useDispatch()
  const history = useHistory()
  const [t] = useTranslation()

  dispatch(actions.resetCurrentDevice())

  // fill redux state with devices
  if (!devices) {
    dispatch(actions.getDevices())
  }

  // display loader while waitingn
  if (!devices) return (
    <Layout full={true} centered={true}>
      <Loading theme="dark" />
    </Layout>
  )

  // if we get an empty array of devices, display a message
  if (Array.isArray(devices) && devices.length === 0) return (
    <Layout full={true} centered={true}>
      <Card>
        No devices available at this time.
      </Card>
    </Layout>
  )

  const collectionItems = devices.map((data, i) => ({
    title: `${t('device_id')} #${data.id}`,
    description: data.asset_identifier,
    onClick: () => history.push(`/devices/${data.id}`),
    actions: [<Icon type="arrow_right_alt" color="primary" size="medium" />]
  }))

  return (
    <div className={style.root}>
      <Collection items={collectionItems} />
    </div>
  )
}

/**
 * Map state to props.
 * @param {Object} state Component state.
 * @return {Object} mapped state.
 */
function mapStateToProps(state){
  const {device: {list}} = state
  return {devices: list}
}

/**
 * Map dispatch to props.
 * @param {Object} dispatch Component state.
 * @return {Object} mapped properties.
 */
function mapDispatchToProps(dispatch){
  return {
    actions: {getDevices, resetCurrentDevice}
  }
}

let Wrapped = DevicesScene
Wrapped = connect(mapStateToProps, mapDispatchToProps)(Wrapped)

export default Wrapped
