import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCardWithQuery } from './containers/ListOfPhotoCardWithQuery'

export const App = () => (
  <>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCardWithQuery />
  </>
)
