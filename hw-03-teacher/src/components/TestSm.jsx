// Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.

import { useState } from 'react'

function TestSm() {
  const [sm, setSm] = useState('')
  const numericSm = Number(sm)

  const isSmValid =
    !!numericSm &&
    !Number.isNaN(numericSm) &&
    Number.isFinite(numericSm) &&
    numericSm >= 0

  const meters = (isSmValid && numericSm / 100) || 0
  const km = meters / 1000

  return (
    <div>
      <div>
        <label>
          Sm
          <input
            type="number"
            value={sm}
            onChange={(e) => setSm(e.target.value)}
          />
        </label>
      </div>
      <hr />
      {!isSmValid ? (
        <div>Задайте довжину у сантиметрах</div>
      ) : (
        <div>
          <div>Метрів: {meters}</div>
          <div>Кілометрів: {km}</div>
        </div>
      )}
    </div>
  )
}

export default TestSm
