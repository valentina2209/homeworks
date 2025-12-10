import { useRef, useState } from 'react'

function TestSum() {
  const [errMsg, setErrMsg] = useState()
  const refInp1 = useRef(null)
  const refInp2 = useRef(null)
  function getValue(inpRef) {
    const num = parseInt(inpRef.current.value)
    if (isNaN(num)) {
      inpRef.current.setFocus()
      throw new Error('Error')
    }
    return num
  }
  const handleSum = () => {
    setErrMsg(null)
    try {
      const num1 = getValue(refInp1)
      const num2 = getValue(refInp1)
    } catch (error) {
      setErrMsg(error.message)
    }
  }
  return (
    <>
      <input ref={refInp1} type="number" />
      <input ref={refInp2} type="number" />
      <button onClick={handleSum}>Sum</button>
      {errMsg && <div>{errMsg}</div>}
    </>
  )
}

export default TestSum
