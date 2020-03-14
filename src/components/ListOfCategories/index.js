import React from 'react'
import styled from 'styled-components'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'
export const ListOfCategories = () => (
  <List>
    {
      categories.map((categorie) => (
        <Item key={categorie.id}><Category {...categorie} /></Item>
      ))
    }
  </List>
)

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0px;
`

const Item = styled.li`
  padding: 0px 8px;
`
