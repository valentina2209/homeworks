import TaskItem from './TaskItem'

function TasksList({ tasks, deleteTask, completeTask }) {
  return (
    <div>
      <h1>Список задач</h1>
      <hr />
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))
      ) : (
        <div>Список порожній</div>
      )}
    </div>
  )
}

export default TasksList
