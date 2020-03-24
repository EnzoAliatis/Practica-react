import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
export const ListOfFavs = ({ favs = [] }) => {
  if (favs.length === 0) {
    return (
      <h4>Aun no tienes favoritos, dirigete al home y empiza a dar like</h4>
    )
  }

  return (
    <Grid>
      {
        favs.map(fav => {
          return (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>
          )
        })
      }
    </Grid>
  )
}

const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const Grid = styled.div`
  padding-top: 32px;
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
