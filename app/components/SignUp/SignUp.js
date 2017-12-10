import React from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton, GoogleAuthButton, TwitterAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css'

export default function SignUp ({error, isFetching, onAuth}) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'SignUp'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth}/>
      <GoogleAuthButton isFetching={isFetching} onAuth={onAuth}/>
      <TwitterAuthButton isFetching={isFetching} onAuth={onAuth}/>
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}

SignUp.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}
