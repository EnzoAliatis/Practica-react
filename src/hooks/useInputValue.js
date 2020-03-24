import { useState } from 'react'

export const useInputValue = (initValue) => {
  const [value, setValue] = useState(initValue)
  const onChange = (e) => setValue(e.target.value)

  return { value, onChange }
}
