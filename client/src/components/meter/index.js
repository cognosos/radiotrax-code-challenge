/**
 * @module components/meter
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// components
import Icon from '../icon'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A styled meter component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Meter(props) {
  const {className,
    level,
    min,
    max,
    label,
    icon,
    lowColor,
    mediumColor,
    highColor,
    lowThreshold,
    mediumThreshold
  } = props

  const classes = cls(
    style.root,
    className
  )

  const percentage = Math.round(level * 100)
  const inline = {
    '--level': `${percentage}%`,
    '--meter-low-color': lowColor ? lowColor : undefined,
    '--meter-medium-color': mediumColor ? mediumColor : undefined,
    '--meter-high-color': highColor ? highColor : undefined,
    '--meter-low-threshold': lowThreshold ? lowThreshold : undefined,
    '--meter-medium-threshold': mediumThreshold ? mediumThreshold : undefined
  }

  return (
    <div className={classes}>
      <span className={style.label}>{label || `${percentage}%`}</span>
      <div className={style.container}>
        <meter
          className={style.meterNative}
          style={inline}
          value={level}
          min={min || 0} max={max || 0}
        />
      </div>
      {icon && <Icon className={style.icon} type={icon} />}
    </div>
  )
}

export default Meter
