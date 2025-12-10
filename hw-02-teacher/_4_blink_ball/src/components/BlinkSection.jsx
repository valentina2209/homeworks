import { useEffect, useState } from 'react'
import Ball from './Ball'

function BlinkSection() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((v) => !v)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      <Ball />
    </div>
  )
}

export default BlinkSection
