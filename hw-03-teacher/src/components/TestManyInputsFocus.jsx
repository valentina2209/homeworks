import { useRef, useState } from 'react'

function TestManyInputsFocus({ inputsNumber = 10 }) {
  const [errMessage, setErrMessage] = useState('')
  const inpRef = useRef([])

  function checkValidation() {
    for (let i = 0; i < inputsNumber; i++) {
      if (inpRef.current[i]?.value === '') {
        setErrMessage(`${i} - ве  число не задано`)
        inpRef.current[i].focus()
        return
      }
    }
    setErrMessage('Помилок немає!')
  }

  return (
    <div>
      {Array.from({ length: inputsNumber }).map((_, i) => (
        <div key={i}>
          <label>
            {`${i} - ве число `}
            <input ref={(el) => (inpRef.current[i] = el)} type="number" />
          </label>
        </div>
      ))}
      <hr />
      {!!errMessage && <div>{errMessage}</div>}
      <div onClick={checkValidation}>Check validation</div>
    </div>
  )
}

export default TestManyInputsFocus
