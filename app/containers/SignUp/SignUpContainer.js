import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { SignUp } from 'components'

class SignUpContainer extends Component {
  handleAuth = () => {
    this.props.fetchAndHandleAuthedUser()
  }
  render () {
    return (
      <SignUp
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('State', state)
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)

SignUpContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired
}
