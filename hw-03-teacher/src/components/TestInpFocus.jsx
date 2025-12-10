import { useEffect, useRef } from 'react'

function TestInpFocus() {
  const inpRef = useRef(null)

  useEffect(() => {
    // Автоматично встанолвюєм фокус після монтування
    inpRef.current?.focus()
  }, [])

  function onClickHandler() {
    //встановлюємо фокурс при кліку на кнопці
    inpRef.current?.focus()
  }

  return (
    <div>
      <input ref={inpRef} type="text" />
      <button onClick={onClickHandler}>Setfocus</button>
    </div>
  )
}

export default TestInpFocus
