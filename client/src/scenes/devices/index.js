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
import {getDevices, resetCurrent as resetCurrentDevice, setPagination} from '../../redux/device'
// contexts
import {useThemeContext} from '../../context/theme'
// components
import Device from '../../components/device'
import Loading from '../../components/loading'
import Collection from '../../components/collection'
import Pagination from '../../components/pagination'
import Card from '../../components/card'
import Icon from '../../components/icon'
import Input from '../../components/input'
import Select from '../../components/select'
import RadioGroup from '../../components/radioGroup'
import Meter from '../../components/meter'
import TopNav from '../../components/topNav'
import {Layout, Row, Column} from '../../components/layout'
// style
import cls from 'classnames'
import style from './style.scss'

const SORT_CRITERIA = {
  DATE: 'DATE',
  BATTERY: 'BATTERY',
  TEMPERATURE: 'TEMPERATURE'
}

const ORDER_CRITERIA = {
  ASC: 'ASC',
  DESC: 'DESC'
}

const DEFAULT_PAGE = 0
const DEFAULT_LIMIT = 3

/**
 * A scene that lists available devices.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function DevicesScene(props) {
  const {actions, list, pagination = {}} = props
  const {theme} = useThemeContext()
  const dispatch = useDispatch()
  const history = useHistory()
  const {t, i18n} = useTranslation()
  // results state
  const [sortBy, setSortBy] = useState(SORT_CRITERIA.DATE)
  const [sortOrder, setSortOrder] = useState(ORDER_CRITERIA.ASC)
  const [searchTerm, setSearchTerm] = useState()
  const {page, limit, count, total, pages} = pagination || {}

  // i18n keeps a priority-ordered list of languages, the first is the active lang
  const [currentLang] = i18n.languages

  dispatch(actions.resetCurrentDevice())

  // fill redux state with devices
  if (!list) {
    const params = (pagination)
      ? {page: pagination.page, limit: pagination.limit}
      : {page: DEFAULT_PAGE, limit: DEFAULT_LIMIT}

    dispatch(actions.getDevices(params))
  }

  // display loader while waitingn
  if (!list) return (
    <Layout full={true} centered={true}>
      <Loading type="dark" />
    </Layout>
  )

  // if we get an empty array of devices, display a message
  if (Array.isArray(list) && list.length === 0) return (
    <Layout full={true} centered={true}>
      <Card>
        No devices available at this time.
      </Card>
    </Layout>
  )

  // filter
  let filteredDevices = list
  if (searchTerm && searchTerm.trim() !== '') {
    filteredDevices = list.reduce((matches, device) => {
      const firmwareMatches = device.firmware_version.includes(searchTerm)
      const deviceIdMatches = device.device_id.toString().includes(searchTerm)

      if (firmwareMatches || deviceIdMatches) matches.push(device)

      return matches
    }, [])
  }

  function handleFilter(event) {
    setSearchTerm(event.nativeEvent.target.value)
  }

  function handleSortByChange(event) {
    setSortBy(event.nativeEvent.target.value)
  }

  function handleSortOrderChange(event) {
    setSortOrder(event.nativeEvent.target.value)
  }

  function handlePaginationChange(page) {
    dispatch(actions.getDevices({page, limit}))
  }

  function sortFunc(a, b) {
    // swap order to change ASC vs DESC
    if (sortOrder === ORDER_CRITERIA.ASC) [a, b] = [b, a]
    if (sortBy === SORT_CRITERIA.DATE) return moment(a.date_device_available).unix() - moment(b.date_device_available).unix()
    if (sortBy === SORT_CRITERIA.BATTERY) return a.battery_level - b.battery_level
    if (sortBy === SORT_CRITERIA.TEMPERATURE) return a.internal_temperature - b.internal_temperature
    return a - b
  }

  const classNames = cls(
    style.root,
    style[theme]
  )

  return (
    <div className={classNames}>
      <Card className={style.search}>
        <Input
          label="Search"
          type="text"
          placeholder="by `DEVICE ID` or by `FIRMWARE VERSION`"
          className={style.filter}
          onChange={handleFilter}
        />
      </Card>

      <div className={style.sortSettings}>
        {/*
        <div className={style.sortSetting}>
          <Select inline={true} label="Results per Page:" options={[
            {label: '5', value: 5},
            {label: '10', value: 10},
            {label: '50', value: 50}
          ]} />
        </div>
        */}
        <div className={style.sortSetting}>
          <Select inline={true} label="Sort by:" options={[
            {label: 'Date', value: SORT_CRITERIA.DATE},
            {label: 'Battery', value: SORT_CRITERIA.BATTERY},
            {label: 'Temperature', value: SORT_CRITERIA.TEMPERATURE}
          ]} />
        </div>
        <div className={style.sortSetting}>
          <RadioGroup className={style.sortOrder} inline={true} label="Sort order:" onChange={handleSortOrderChange} items={[{
            label: 'ASC',
            value: ORDER_CRITERIA.ASC
          }, {
            label: 'DESC',
            value: ORDER_CRITERIA.DESC
          }]} />
        </div>
      </div>

      <Pagination pages={pages} selected={page} onChange={handlePaginationChange} className={style.paginationTop} />

      <div className={style.devices}>
        {filteredDevices.sort(sortFunc).map((data, i) => (
          <div key={i} onClick={() => history.push(`/devices/${data.id}`)} className={style.device}>
            <Device {...data} />
          </div>
        ))}
      </div>

      <Pagination pages={pages} selected={page} onChange={handlePaginationChange} className={style.paginationBottom} />
    </div>
  )
}

/**
 * Map state to props.
 * @param {Object} state Component state.
 * @return {Object} mapped state.
 */
function mapStateToProps(state){
  const {device: {list, pagination}} = state
  return {list, pagination}
}

/**
 * Map dispatch to props.
 * @param {Object} dispatch Component state.
 * @return {Object} mapped properties.
 */
function mapDispatchToProps(dispatch){
  return {
    actions: {getDevices, resetCurrentDevice, setPagination}
  }
}

let Wrapped = DevicesScene
Wrapped = connect(mapStateToProps, mapDispatchToProps)(Wrapped)

export default Wrapped
