import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { HomeContainer, MainContainer, SheetsContainer, SignUpContainer, SignOutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact={true} path='/' render={() => (checkAuth() ? <Redirect to='/sheets'/> : <HomeContainer />)} />
          <Route path='/sheets' render={() => (checkAuth() ? <SheetsContainer /> : <Redirect to='/'/>)} />
          <Route path='/sign_up' render={() => (checkAuth() ? <Redirect to='/sheets'/> : <SignUpContainer />)} />
          <Route path='/sign_out' component={SignOutContainer} />
        </Switch>
      </MainContainer>
    </Router>
  )
}
