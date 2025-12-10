// Приклад. Користувача заходить на сайт і вводить свій вік. Якщо вік менше 16, то вивсти повідомлення про заборону користування сайтом, інакше вивести зображення товару.

import { useState } from 'react'
import StartContent from './StartContent'

function StartBlock() {
  const [age, setAge] = useState(16)

  function changeHandler(e) {
    const val = parseInt(e.target.value)
    if (!isNaN(val)) setAge(val)
  }

  return (
    <>
      <label>
        Вік
        <input type="number" onBlur={changeHandler} />
      </label>
      <hr />
      <StartContent
        age={age}
        imgSrc="https://img.freepik.com/free-vector/mobile-shopping-design_1284-34802.jpg?semt=ais_hybrid&w=740"
      />
      <hr />
      <div>{age >= 18 && <h1>Реклама!</h1>}</div>
    </>
  )
}

export default StartBlock
