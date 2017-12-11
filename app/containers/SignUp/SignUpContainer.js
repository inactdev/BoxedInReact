import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { SignUp } from 'components'

class SignUpContainer extends Component {
  handleAuth = (e) => {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.props.history.push('sheets')
      })
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
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContainer))

SignUpContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
