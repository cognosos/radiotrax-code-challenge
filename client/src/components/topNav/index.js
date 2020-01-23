/**
 * @module components/topNav
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// components
import TopNavItem from './item'
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

  let {items = []} = props
  if (children) items = children.map((child) => child.props)

  if (!items) throw new Error('TopNav requires TopNav.items or TopNav.children[TopNavItem, TopNavItem, ...]')

  return (
    <nav className={cls(style.root, className)}>
      <div className={style.navWrapper}>
        {title && <h1 className={style.title}>{title}</h1>}

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
