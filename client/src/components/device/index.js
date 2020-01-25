/**
 * @module components/device
 *
 * @TODO:
 * - more boundaries for meters
 * - internationalize temp degrees
 * - edit stuff?
 */

// lib
import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import moment from 'moment'
// context
import {useThemeContext} from '../../context/theme'
// components
import Card from '../card'
import Badge from '../badge'
import Meter from '../meter'
import {Layout, Row, Column} from '../layout'
// constants
import {STATUS_CODES, STATUS_TEXT} from '../../constants/device'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * Simple Cognosos Device display.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Device(props) {
  const {t, i18n} = useTranslation()
  const {theme} = useThemeContext()
  const {
    id,
    device_id,
    firmware_version,
    date_device_available,
    manufacturer,
    application_code,
    asset_identifier,
    battery_level,
    internal_temperature,
    status
  } = props

  // i18n keeps a priority-ordered list of languages, the first is the active lang
  const [currentLang] = i18n.languages

  const STATUS_COLORS = {
    [STATUS_TEXT['Unknown']]: 'grey',
    [STATUS_TEXT['Unavailable']]: 'red',
    [STATUS_TEXT['Available']]: 'green'
  }

  const statusComp = (
    <Badge color={STATUS_COLORS[status]}>
      {STATUS_CODES[status] || 'Unknown'}
    </Badge>
  )

  const classNames = cls(
    style.root,
    style[theme]
  )

  return (
    <Card title={asset_identifier} tag={statusComp} className={classNames}>

      <Layout className={style.details}>

        {/** device id */}
        {device_id &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('device_id')}</label>
            </Column>
            <Column className={style.detail}>
              {device_id}
            </Column>
          </Row>
        }

        {/** firmware version */}
        {firmware_version &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('firmware_version')}</label>
            </Column>
            <Column className={style.detail}>
              {firmware_version}
            </Column>
          </Row>
        }

        {/** manufacturer */}
        {manufacturer &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('manufacturer')}</label>
            </Column>
            <Column className={cls(style.detail, style.manufacturer)}>
              {manufacturer}
            </Column>
          </Row>
        }

        {/** application code */}
        {application_code &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('application_code')}</label>
            </Column>
            <Column className={style.detail}>
              {application_code}
            </Column>
          </Row>
        }

        {/** date available */}
        {date_device_available &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('date_device_available')}</label>
            </Column>
            <Column className={cls(style.detail, style.date)}>
              {moment(date_device_available).locale(currentLang).format('MMMM Do YYYY, h:mm A')}
            </Column>
          </Row>
        }

        {/** battery levels */}
        {battery_level !== undefined &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('battery_level')}</label>
            </Column>
            <Column className={style.detail}>
              <Meter level={battery_level / 100} icon="battery_charging_full" className={style.meter} />
            </Column>
          </Row>
        }

        {/** temperature */}
        {internal_temperature !== undefined &&
          <Row className={style.row}>
            <Column span={4} vcenter={true} className={style.column}>
              <label>{t('internal_temperature')}</label>
            </Column>
            <Column className={style.detail}>
              <Meter
                level={internal_temperature / 100}
                icon="wb_sunny"
                label={`${internal_temperature}°`}
                lowColor="#5A9FCE" mediumColor="purple" highColor="red"
                lowThreshold="40%" mediumThreshold="60%"
                className={style.meter}
              />
            </Column>
          </Row>
        }

      </Layout>

    </Card>
  )
}

export default Device
