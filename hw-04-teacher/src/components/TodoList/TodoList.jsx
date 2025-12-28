import { useState } from 'react'
import TasksList from './TasksList'
import TodoForm from './TdoForm'

function TodoList() {
  const [tasksList, setTasksList] = useState(() => [])

  const addTask = (title) => {
    setTasksList((list) => [
      ...list,
      {
        id: new Date().getTime(),
        title,
        isCompleted: false,
      },
    ])
  }

  const deleteTask = (id) => {
    setTasksList((list) => list.filter((task) => task.id !== id))
  }
  const completeTask = (id) => {
    setTasksList((list) =>
      list.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: true,
            }
          : task
      )
    )
  }

  return (
    <div>
      <TodoForm onAdd={addTask} />
      <hr />
      <TasksList
        tasks={tasksList}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  )
}

export default TodoList
