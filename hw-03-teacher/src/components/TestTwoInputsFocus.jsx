import { useRef, useState } from 'react'

function TestTwoInputsFocus() {
  const [errMessage, setErrMessage] = useState('')
  const inpRef1 = useRef(null)
  const inpRef2 = useRef(null)

  function checkValidation() {
    if (inpRef1.current?.value === '') {
      setErrMessage('Перше число не задано')
      inpRef1.current.focus()
      return
    }
    if (inpRef2.current?.value === '') {
      setErrMessage('Друге число не задано')
      inpRef2.current.focus()
      return
    }
    setErrMessage('Помилок немає!')
  }

  return (
    <div>
      <div>
        <label>
          Num1
          <input ref={inpRef1} type="number" />
        </label>
      </div>
      <div>
        <label>
          Num2
          <input ref={inpRef2} type="number" />
        </label>
      </div>
      {!!errMessage && <div>{errMessage}</div>}
      <div onClick={checkValidation}>Check validation</div>
    </div>
  )
}

export default TestTwoInputsFocus
