import { useState, useEffect } from 'react'
import Ball from './Ball'

function BallInter() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.log('22222')

    const interval = setInterval(() => {
      setShow((prev) => !prev)
    }, 1000)

    return () => clearInterval(interval) // Очищення інтервалу при розмонтуванні
  }, []) // Порожній масив залежностей гарантує запуск лише один раз

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Ball />
    </div>
  )
}

export default BallInter
