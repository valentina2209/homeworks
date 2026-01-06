import css from './TaskItem.module.css'

function TaskItem({ task, employees, assignedEmployee, onAssign }) {
    return (
        <div className={css.item}>
            <span className={css.title}>{task.title}</span>

            <select
                className={css.select}
                value={assignedEmployee || ""}
                onChange={(event) => onAssign(task.id, Number(event.target.value))}
            >
                <option value="">Вибрати відповідального</option>

                {employees.map(employees => (
                    <option key={employees.id} value={employees.id}>
                        {employees.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TaskItem;

