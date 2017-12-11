import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)

MainContainer.propTypes = {
  children: PropTypes.object,
  isAuthed: PropTypes.bool.isRequired
}
