import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { fadeIn } from '../../styles/animation'
import { useNearScreen } from '../../hooks/useNearSceen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

export const PhotoCard = ({ id, liked, likes = 0, src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: { input: { id } } })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>

        </ >}
    </Article>
  )
}

const ImgWrapper = styled.div`
  ${fadeIn()};
  border-radius: 10px;
  display: block;
  overflow: hidden;
  height: 0px;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

const Image = styled.img`
  box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Article = styled.article`
  min-height: 200px;
`
