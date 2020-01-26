/**
 * @module components/topNav
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
// context
import {useThemeContext} from '../../context/theme'
// components
import TopNavItem from './item'
import Badge from '../badge'
import Icon from '../icon'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * App top navigation.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function TopNav(props) {
  const {className, children, title} = props
  const {theme} = useThemeContext()

  let {items = []} = props
  if (children) items = children.map((child) => child.props)

  if (!items) throw new Error('TopNav requires TopNav.items or TopNav.children[TopNavItem, TopNavItem, ...]')

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  return (
    <nav className={classNames}>
      <div className={style.navWrapper}>
        {title && <Badge>{title}</Badge>}

        <ul className={cls(style.items, style.right)}>
          {items.map((item, key) => {
            const {label, to, icon, className} = item
            const labelComp = icon ? <><Icon type={icon} className={style.icon} />{label}</> : label

            return <TopNavItem className={className} label={labelComp} to={to} key={key} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default TopNav
