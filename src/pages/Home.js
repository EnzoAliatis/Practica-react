import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardWithQuery } from '../containers/ListOfPhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => (
  <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar la mascota de tus sueños'>
    <ListOfCategories />
    <ListOfPhotoCardWithQuery categoryId={id} />
  </Layout>
)
