import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardWithQuery } from '../containers/ListOfPhotoCardWithQuery'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCardWithQuery categoryId={id} />
  </>
)
