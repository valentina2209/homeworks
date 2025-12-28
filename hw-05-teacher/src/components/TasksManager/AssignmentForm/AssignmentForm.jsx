import TaskSelector from './TaskSelector'

function AssignmentForm({ usersList, tasksList, onTaskAssigned }) {
  return (
    <div>
      <h1>Розподілювач задач</h1>
      <div>
        {tasksList?.length > 0 ? (
          tasksList.map((task) => (
            <TaskSelector
              key={task.id}
              task={task}
              usersList={usersList}
              onTaskAssigned={onTaskAssigned}
            />
          ))
        ) : (
          <div>Список задач порожній</div>
        )}
      </div>
    </div>
  )
}

export default AssignmentForm
