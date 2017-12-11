import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'
import getRoutes from './config/routes'
import { checkifAuthed } from 'helpers/auth'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth () {
  return checkifAuthed(store)
}

ReactDom.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
