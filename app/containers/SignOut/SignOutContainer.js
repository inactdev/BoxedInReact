import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { signoutAndUnAuthUser } from 'redux/modules/users'
import { SignOut } from 'components'

class SignOutContainer extends Component {
  componentDidMount () {
    this.props.dispatch(signoutAndUnAuthUser())
  }
  render () {
    return (
      <SignOut />
    )
  }
}

export default withRouter(connect()(SignOutContainer))

SignOutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}
