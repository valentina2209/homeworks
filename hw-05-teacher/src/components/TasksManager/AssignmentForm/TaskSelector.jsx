import styles from './TaskSelector.module.css'
function TaskSelector({ task, usersList, onTaskAssigned }) {
  function selectUser(e) {
    onTaskAssigned(task.id, Number(e.target.value))
  }
  const agUsersList = [{ id: 0, name: 'Виберіть користувача' }, ...usersList]
  return (
    <div className={styles.taskItem}>
      <div>{task.title}</div>
      <select onChange={selectUser}>
        {agUsersList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TaskSelector
