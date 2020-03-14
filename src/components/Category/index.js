import React from 'react'
import styled from 'styled-components'

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMG, path, emoji = '?' }) => (
  <Achor href={path}>
    <Image src={cover} />
    {emoji}
  </Achor>
)

const Achor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px
`

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover; /* para que la imagen quede bien en lo ancho y largo*/
  height: 75px;
  width: 75px;
`
