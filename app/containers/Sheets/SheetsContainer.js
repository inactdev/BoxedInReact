import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Sheets } from 'components'

class SheetsContainer extends Component {
  render () {
    return (
      <Sheets />
    )
  }
}

export default withRouter(SheetsContainer)
