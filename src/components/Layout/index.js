import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram  🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {children}
      </Div>
    </>
  )
}

const Div = styled.div`
  padding: 16px 1px
`

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 600;
//   color: #222;
//   padding-top: 8px;
// `

// const SubTitle = styled.h2`
//   font-size: 16px;
//   font-weight: 400;
//   color: #333;
//   padding-top: 4px;
// `
