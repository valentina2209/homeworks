import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleChange(e) {
    setTitle(e.target.value)
  }

  function addTask(e) {
    e.preventDefault()
    onAdd(title)
    setTitle('')
  }

  return (
    <form>
      <div>
        <label>
          Назва задачі
          <input type="text" value={title} onChange={handleChange} />
        </label>
      </div>
      <button onClick={addTask}> Додати </button>
    </form>
  )
}

export default TodoForm
