/* eslint-disable react/jsx-closing-tag-location */

import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NavBar } from './components/NavBar'
import Context from './Context'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:id' />
    </Router>
    <Context.Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='favs' />
              <User path='user' />
            </Router>
            : <Router>
              <NotRegisterUser path='favs' />
              <NotRegisterUser path='user' />
            </Router>
      }
    </Context.Consumer>
    <NavBar />
  </>
)
