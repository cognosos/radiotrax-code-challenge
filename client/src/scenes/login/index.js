/**
 * @module scene/login
 */

// lib
import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useToasts} from 'react-toast-notifications'
import _ from 'lodash'
// contexts
import {useAuthContext} from '../../context/auth'
// services
import AuthService from '../../services/auth'
// components
import Scene from '../../components/scene'
import Logo from '../../components/logo'
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button'
import Loading from '../../components/loading'
import Layout from '../../components/layout'
// util
import {authEncode} from '../../util/auth'
// style
import style from './style.scss'

/**
 * A scene that authenticates users.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Login(props) {
  const history = useHistory()
  const {auth, setAuth} = useAuthContext()
  const {addToast} = useToasts()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [valid, setValidation] = useState({username: false, password: false})
  const [processing, setProcessing] = useState(false)
  const canSubmit = !processing && valid.username && valid.password

  function handleSubmit(e) {
    setProcessing(true)

    AuthService.verifyCreds().then((passed) => {
      if (passed) {
        setAuth({...auth, isAuthenticated: true})
        setTimeout(() => history.push('/devices'), 666)
      } else {
        setProcessing(false)
        addToast('Invalid credentials, please try again', {appearance: 'error'})
      }
    })
  }

  function handleUsernameChange(e, value, isValid) {
    setAuth({...auth, username: value})
    setUsername(value)
    setValidation({...valid, username: isValid})
  }

  function handlePasswordChange(e, value, isValid) {
    setAuth({...auth, password: value})
    setPassword(value)
    setValidation({...valid, password: isValid})
  }

  return (
    <Scene full={true} centered={true} className={style.root}>
      <Layout className={style.auth}>

        <Logo className={style.logo} type={['medium', 'grayscale']} />

        <h1 className={style.header}>
          Welcome!
        </h1>

        <h2 className={style.instructions}>
          Please log in to your account.
        </h2>

        <Card>
          <Input
            name="username"
            type="text"
            label="Username"
            placeholder="user@example.com"
            required
            pattern="[a-zA-Z0-9]+"
            onChange={handleUsernameChange}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="........"
            required
            onChange={handlePasswordChange}
          />

          <Button
            className={style.button}
            onClick={handleSubmit}
            disabled={!canSubmit}
            label={processing ? null : 'Login'}
            icon={processing ? <Loading theme='tiny' /> : null}
          />
        </Card>

        <p className={style.moreDetails}>
          Remember that usernames do not contain any special characters.
        </p>

      </Layout>
    </Scene>
  )
}

export default Login
