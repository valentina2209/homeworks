import { useRef, useState } from 'react'

function TestSum() {
  const [sum, setSum] = useState()
  console.log('11111111111')

  const refInp1 = useRef(null)
  const refInp2 = useRef(null)
  function getValue(inpRef) {
    const num = parseInt(inpRef.current.value)
    if (isNaN(num)) {
      inpRef.current.focus()
      throw new Error('Error')
    }
    return num
  }
  const handleSum = () => {
    try {
      const num1 = getValue(refInp1)
      const num2 = getValue(refInp2)
      setSum(num1 + num2)
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <input ref={refInp1} type="number" />
      <input ref={refInp2} type="number" />
      <button onClick={handleSum}>Sum</button>
      <div>{sum}</div>
    </>
  )
}

export default TestSum
