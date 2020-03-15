import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ data: { photos = [] } } = {}) => (
  <ul>
    {
      photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))
    }
  </ul>
)
