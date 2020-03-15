import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    window.fetch(url)
      .then(res => res.json())
      .then(response => {
        setData(response)
        setIsLoading(false)
      })
  }, [])

  return [data, isLoading]
}
