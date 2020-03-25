/* eslint-disable react/jsx-closing-tag-location */

import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='favs' />
        <User path='user' />
      </Router>
      <NavBar />
    </>
  )
}
