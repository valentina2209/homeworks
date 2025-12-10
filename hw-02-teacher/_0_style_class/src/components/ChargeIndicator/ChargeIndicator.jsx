import { useState } from 'react'
import styles from './ChargeIndicator.module.css'
// Приклад. У залежності від заряду батареї застосовувати відповідний колір фону
// Заряд > 80 – зелений
// 30 <= Заряд <= 80 - жовтий
// Заряд < 30 - червоний

function ChargeIndicator() {
  console.log('1111111')

  const [chargeValue, setChargeValue] = useState(50)
  function changeHandler(e) {
    const val = parseInt(e.target.value)
    if (!isNaN(val)) setChargeValue(val)
  }

  function getColorClass() {
    let colorClass
    if (chargeValue > 80) colorClass = styles.full
    else if (chargeValue >= 30) colorClass = styles.medium
    else colorClass = styles.low
    return colorClass
  }

  return (
    <label>
      Заряд батареї
      <input type="number" onBlur={changeHandler} className={getColorClass()} />
    </label>
  )
}

export default ChargeIndicator
