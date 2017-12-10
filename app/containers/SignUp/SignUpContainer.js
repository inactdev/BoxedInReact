import React, { Component } from 'react'
import { SignUp } from 'components'
import auth from 'helpers/auth'

class SignUpContainer extends Component {
  handleAuth () {
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }
  render () {
    return (
      <SignUp
        isFetching={false}
        error=''
        onAuth={this.handleAuth}/>
    )
  }
}

export default SignUpContainer
