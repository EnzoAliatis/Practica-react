import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getPhoto($id: ID!) {
    photo(id: $id) {
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
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProps}
  </Query>
)
