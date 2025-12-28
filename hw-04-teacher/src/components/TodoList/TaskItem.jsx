function TaskItem({ id, title, isCompleted, deleteTask, completeTask }) {
  function onDelete() {
    deleteTask(id)
  }

  return (
    <div>
      <div>
        {title} - {isCompleted ? 'Done' : 'todo'}
      </div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => completeTask(id)}>Complete</button>
    </div>
  )
}

export default TaskItem
