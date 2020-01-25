/**
 * @module components/card
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A card component.
 * @param {Object} props The component props
 * @return {ReactElement}
 */
function Card(props){
  const {theme, setTheme} = useThemeContext()
  const {className, title, subtitle, tag, image, actions, children} = props
  const classNames = cls(
    style.root,
    style[theme],
    className,
    {[style.withTag]: tag}
  )

  return (
    <div className={classNames}>
      {image && (
        <div className={style.asset}>
          {image && <img src={image} />}
          {title && <span className={style.title}>{title}</span>}
        </div>
      )}

      <div className={style.content}>
        {title && <div className={style.title}>{title}</div>}
        {subtitle && <div className={style.subtitle}>{subtitle}</div>}
        {tag && <span className={style.tag}>{tag}</span>}
        {children}
      </div>

      {actions && (
        <div className={style.actions}>
          {actions.map((actn) => <a>{actn}</a>)}
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** A title for the card. */
  title: PropTypes.string,
  /** The URL to an image to display. */
  image: PropTypes.string,
  /** Elements inside this component. */
  children: PropTypes.node
}

export default Card
