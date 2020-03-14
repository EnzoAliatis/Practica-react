import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => (
  <ul>
    {
      [1, 2, 3].map(i => (
        <li key={i}>
          <PhotoCard />
        </li>
      ))
    }
  </ul>
)
