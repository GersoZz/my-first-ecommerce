import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok === false) {
          throw new Error('Petición fallida')
        }

        return response.json()
      })
      .then((data) => {
        const dataIsArray = Array.isArray(data)
        if (dataIsArray && data.length === 0) {
          throw new Error('Data is not an array')
        }

        setData(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}

export default useFetch
