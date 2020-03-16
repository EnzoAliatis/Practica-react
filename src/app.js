import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
    </Router>
  </>
)
