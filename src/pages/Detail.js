import React from 'react'
import { PhotoWithQuery } from '../containers/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => (
  <Layout title={`Fotografía ${id}`}>
    <PhotoWithQuery id={id} />
  </Layout>
)
