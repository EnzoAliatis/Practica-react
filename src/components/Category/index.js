import React from 'react'
import { Link as LinkRouter } from '@reach/router'
import styled from 'styled-components'

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMG, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)

const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  &[aria-current] {
    background: rgba(0,0,0,.1);
    border-radius: 50%;
  }
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
