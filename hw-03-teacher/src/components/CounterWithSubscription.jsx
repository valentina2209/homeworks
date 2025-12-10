import { useEffect, useRef, useState } from 'react'

function CounterWithSubscription() {
  const [counter, setCounter] = useState(0)
  const intervalRef = useRef(null)
  const counterRefData = useRef(counter)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log(counterRefData.current)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    counterRefData.current = counter
  }, [counter])

  function onClickHandler() {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onClickHandler}>Add</button>
    </div>
  )
}

export default CounterWithSubscription
