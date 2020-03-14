import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, likes = 0, src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }) => (
  <article>
    <a href={`detail/${id}`}>
      <ImgWrapper>
        <Image src={src} />
      </ImgWrapper>
    </a>
    <Button>
      <MdFavoriteBorder size={32} />{likes} likes!
    </Button>
  </article>
)

const ImgWrapper = styled.div`
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

const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`
