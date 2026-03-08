import { useState } from 'react'

function usePost(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = (payload) => {
    setData(null)
    setIsLoading(true)
    setError(null)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok === false) {
          throw new Error('Petición fallida')
        }

        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }

  return { execute, data, isLoading, error }
}

export default usePost
