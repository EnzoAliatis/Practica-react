import React from 'react'
import styled from 'styled-components'

import { fadeIn } from '../../styles/animation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearSceen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

export const PhotoCard = ({ id, likes = 0, src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: { input: { id } } })
                  setLiked(!liked)
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
