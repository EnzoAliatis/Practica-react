import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      likes,
      liked,
      id
    }
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
