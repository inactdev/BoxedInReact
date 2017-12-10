import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MainContainer } from 'containers'

const PrimaryLayout = () => (
  <div className='primary-layout'>
    <header>
      {'BOXED IN'}
    </header>
    <main>
      <Route path='/' exact={true} component={MainContainer} />
    </main>
  </div>
)

const routes = (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default routes
