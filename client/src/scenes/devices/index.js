/**
 * @module scenes/devices
 */

// lib
import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import moment from 'moment'
import {debounce} from 'lodash'
// redux
import {getDevices, resetCurrent as resetCurrentDevice} from '../../redux/device'
// components
import Device from '../../components/device'
import Loading from '../../components/loading'
import Collection from '../../components/collection'
import Card from '../../components/card'
import Icon from '../../components/icon'
import Input from '../../components/input'
import RadioGroup from '../../components/radioGroup'
import Meter from '../../components/meter'
import {Layout, Row, Column} from '../../components/layout'
// style
import style from './style.scss'
import cls from 'classnames'

const SORT_CRITERIA = {
  DATE: 'DATE',
  BATTERY: 'BATTERY',
  TEMPERATURE: 'TEMPERATURE'
}

const ORDER_CRITERIA = {
  ASC: 'ASC',
  DESC: 'DESC'
}

/**
 * A scene that lists available devices.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function DevicesScene(props) {
  const {actions, devices} = props
  const [sortBy, setSortBy] = useState(SORT_CRITERIA.DATE)
  const [sortOrder, setSortOrder] = useState(ORDER_CRITERIA.ASC)
  const [searchTerm, setSearchTerm] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const {t, i18n} = useTranslation()

  // i18n keeps a priority-ordered list of languages, the first is the active lang
  const [currentLang] = i18n.languages

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

  // filter
  let filteredDevices = devices
  if (searchTerm && searchTerm.trim() !== '') {
    filteredDevices = devices.reduce((matches, device) => {
      const firmwareMatches = device.firmware_version.includes(searchTerm)
      const deviceIdMatches = device.device_id.toString().includes(searchTerm)

      if (firmwareMatches || deviceIdMatches) matches.push(device)

      return matches
    }, [])
  }

  // if we get an empty array of devices, display a message
  if (Array.isArray(devices) && devices.length === 0) return (
    <Layout full={true} centered={true}>
      <Card>
        No devices available at this time.
      </Card>
    </Layout>
  )

  function handleFilter(event) {
    setSearchTerm(event.nativeEvent.target.value)
  }

  function handleSortByChange(event) {
    setSortBy(event.nativeEvent.target.value)
  }

  function handleSortOrderChange(event) {
    setSortOrder(event.nativeEvent.target.value)
  }

  function sortFunc(a, b) {
    // swap order to change ASC vs DESC
    if (sortOrder === ORDER_CRITERIA.ASC) [a, b] = [b, a]
    if (sortBy === SORT_CRITERIA.DATE) return moment(a.date_device_available).unix() - moment(b.date_device_available).unix()
    if (sortBy === SORT_CRITERIA.BATTERY) return a.battery_level - b.battery_level
    if (sortBy === SORT_CRITERIA.TEMPERATURE) return a.internal_temperature - b.internal_temperature
    return a - b
  }

  const collectionItems = filteredDevices.sort(sortFunc).map((data, i) => ({
    title: <p className={style.title}>Device: {data.asset_identifier}</p>,
    description: (
      <Layout className={style.description} gutterless>
        {/** device id */}
        {data.device_id &&
          <Row className={style.row}>
            <Column vcenter={true} className={style.column}>
              <label>{t('device_id')}</label>
            </Column>
            <Column className={style.detail}>
              {data.device_id}
            </Column>
          </Row>
        }
        {/** firmware version */}
        {data.firmware_version &&
          <Row className={style.row}>
            <Column vcenter={true} className={style.column}>
              <label>{t('firmware_version')}</label>
            </Column>
            <Column className={style.detail}>
              {data.firmware_version}
            </Column>
          </Row>
        }
        {/** date available */}
        {data.date_device_available &&
          <Row className={style.row}>
            <Column vcenter={true} className={style.column}>
              <label>{t('date_device_available')}</label>
            </Column>
            <Column className={cls(style.detail, style.date)}>
              {moment(data.date_device_available).locale(currentLang).format('MMMM Do YYYY, h:mm A')}
            </Column>
          </Row>
        }
        {/** battery levels */}
        {data.battery_level !== undefined &&
          <Row className={style.row}>
            <Column vcenter={true} className={style.column}>
              <label>{t('battery_level')}</label>
            </Column>
            <Column className={style.detail}>
              <Meter level={data.battery_level / 100} icon="battery_charging_full" className={style.meter} />
            </Column>
          </Row>
        }
        {/** temperature */}
        {data.internal_temperature !== undefined &&
          <Row className={style.row}>
            <Column vcenter={true} className={style.column}>
              <label>{t('internal_temperature')}</label>
            </Column>
            <Column className={style.detail}>
              <Meter
                level={data.internal_temperature / 100}
                icon="wb_sunny"
                label={`${data.internal_temperature}°`}
                lowColor="#5A9FCE" mediumColor="purple" highColor="red"
                lowThreshold="40%" mediumThreshold="60%"
                className={style.meter}
              />
            </Column>
          </Row>
        }
      </Layout>
    ),
    onClick: () => history.push(`/devices/${data.id}`),
    actions: [<Icon type="arrow_right_alt" color="primary" size="medium" />]
  }))

  return (
    <div className={style.root}>

      <Card>
        <Input
          type="text"
          placeholder="Filter: by `DEVICE ID` or by `FIRMWARE VERSION`"
          className={style.filter}
          onChange={handleFilter}
        />
      </Card>

      <Card>
        <div className={style.sortOptions}>
          <div className={style.sortBy}>
            <label className={style.sortLabel}>
              Sort By:
            </label>
            <RadioGroup onChange={handleSortByChange} items={[{
              label: 'Date',
              value: SORT_CRITERIA.DATE
            }, {
              label: 'Battery',
              value: SORT_CRITERIA.BATTERY
            }, {
              label: 'Temperature',
              value: SORT_CRITERIA.TEMPERATURE
            }]} />
          </div>
          <div className={style.sortOrder}>
            <label className={style.sortLabel}>
              Sort Order:
            </label>
            <RadioGroup onChange={handleSortOrderChange} items={[{
              label: 'ASC',
              value: ORDER_CRITERIA.ASC
            }, {
              label: 'DESC',
              value: ORDER_CRITERIA.DESC
            }]} />
          </div>
        </div>
      </Card>

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
