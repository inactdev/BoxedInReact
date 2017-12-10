import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { HomeContainer, MainContainer, SignUpContainer } from 'containers'

const routes = (
  <Router>
    <MainContainer>
      <Switch>
        <Route exact={true} path='/' component={HomeContainer} />
        <Route path='/sign_up' component={SignUpContainer} />
      </Switch>
    </MainContainer>
  </Router>
)

export default routes
