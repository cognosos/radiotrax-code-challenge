/**
 * @module scenes
 */

// lib
import React, {Suspense} from 'react'
// routes
import Routes from '../routes'
// redux
import appActions '../redux/app'
// components
import Loading from '../components/loading'
// style
import style from './style.scss'
import '../stylesheets/app.scss'

/**
 * The main application scene.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function AppScene(props) {
  return (
    <div className={style.appContainer}>
      <Suspense fallback={<Loading />}>
        <Routes {...props} isLoggedIn={false} />
      </Suspense>
    </div>
  )
}

/**
 * Map state to props.
 * @param {Object} state Component state.
 * @return {Object} mapped state.
 */
function mapStateToProps(state){
  const {isAuthenticated, errors} = state
  return {
    isAuthenticated,
    errors
  }
}

/**
 * Map dispatch to props.
 * @param {Object} dispatch Component state.
 * @return {Object} mapped properties.
 */
function mapDispatchToProps(dispatch){
  return {}
}

let Wrapped = AppScene
Wrapped = connect(mapStateToProps, mapDispatchToProps)(Wrapped)

export default Wrapped
