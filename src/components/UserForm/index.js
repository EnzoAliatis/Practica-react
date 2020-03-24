import React from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <From disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </From>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}

const From = styled.form`
  padding: 16px 0;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding: 8px 0;
`

const Error = styled.span`
  font-size: 14px;
  color: red
`
