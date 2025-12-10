import { useState } from 'react'

function StartComp() {
  const [age, setAge] = useState('')

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.type == 'blur') {
      const val = Math.max(0, parseInt(e.target.value))
      if (!isNaN(val)) setAge(val)
    }
  }
  return (
    <>
      <div>
        <label>
          Age
          <input
            type="number"
            onKeyDown={handleKeyDown}
            onBlur={handleKeyDown}
          />
        </label>
      </div>
      <div>
        {age < 16 ? (
          <h1>Доступ заборонено</h1>
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/512/3125/3125815.png" />
        )}
      </div>
    </>
  )
}

export default StartComp
