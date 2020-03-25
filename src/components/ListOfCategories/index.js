import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Category } from '../Category'
import { fadeIn } from '../../styles/animation'
import { useFetch } from '../../hooks/useFetch'

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const [categories, isLoading] = useFetch('https://petgram-server-enzo.enzoaliatis.now.sh/categories')

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        isLoading ? <Item key='loading'><Category /></Item>
          : categories.map((category) => {
            return <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>
          })
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

const List = styled.ul`
  ${fadeIn({ time: '0.4s' })}
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0px;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,.3);
    top: -20px;
    right: 0;
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    transform: scale(.5);
    z-index: 1;
  `}
`

const Item = styled.li`
  padding: 0px 8px;
`
