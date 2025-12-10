// Приклад. Вводиться номер місця пацієнта у черзі. Відображати кольром: зелений – він у трійці перших
// жовтий – інакше

import { useState } from 'react'

function QueuePresentor() {
  const [place, setPlace] = useState(1)
  function changeHandler(e) {
    const val = parseInt(e.target.value)
    if (!isNaN(val)) setPlace(val)
  }
  return (
    <label>
      Місце у черзі
      <input
        type="number"
        style={{
          backgroundColor: place <= 3 ? 'green' : 'yellow',
        }}
        value={place}
        onChange={changeHandler}
      />
    </label>
  )
}

export default QueuePresentor
