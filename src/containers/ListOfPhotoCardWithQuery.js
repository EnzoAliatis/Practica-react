import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProps = ({ loading, error, data }) => {
  return <ListOfPhotoCards data={data} />
}
export const ListOfPhotoCardWithQuery = () => (
  <Query query={GET_PHOTOS}>
    {renderProps}
  </Query>
)
