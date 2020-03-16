import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { fadeIn } from '../../styles/animation'

const SIZE = '32px'
export const NavBar = () => (
  <Nav>
    <Link to='/'><MdHome size={SIZE} /></Link>
    <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
    <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
  </Nav>
)

const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  width: 100%;
  position: fixed;
  z-index: 1000;
`

const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-decoration: none;

  &[aria-current] {
    color: black;

    &:after {
      ${fadeIn({ time: '0.4s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 40px
    }
  }
`
