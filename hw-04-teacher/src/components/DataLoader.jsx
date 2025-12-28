import { useEffect, useState } from 'react'

function DataLoader({ url, children }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch(url)
        const resData = await res.json()

        setData(resData)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  if (isLoading) return <div>Loading ...</div>
  else if (error) return <div>ERROR!!! </div>
  //===== ВИКОРИСТОВУЄМО У return !!!!!!
  return children ? (
    children(data)
  ) : (
    <div>
      {data.id} - {data.title}
    </div>
  )
}

export default DataLoader
