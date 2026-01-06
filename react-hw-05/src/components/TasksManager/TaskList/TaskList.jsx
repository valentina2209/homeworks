import TaskItem from "../TaskItem/TaskItem";
import css from './TaskList.module.css'

function TaskList({ tasks, employees, assignedTasks, onAssign }) {

    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Задачі</h3>

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    employees={employees}
                    assignedEmployee={assignedTasks[task.id]}
                    onAssign={onAssign}
                />
            ))}
        </div>
    );
}

export default TaskList;


