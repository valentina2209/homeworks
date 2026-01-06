import EmployeeTaskItem from "../EmployeeTaskItem/EmployeeTaskItem";
import css from "./EmployeeTasks.module.css"

function EmployeeTasks({ employee, tasks, assignedTasks, onRemove }) {
    const employeeTasks = tasks.filter(
        task => assignedTasks[task.id] === employee.id
    )

    if (!employeeTasks.length) return null

    return (
        <div className={css.card}>
            <h4 className={css.title}>{employee.name}</h4>

            {employeeTasks.map(task => (
                <EmployeeTaskItem
                    key={task.id}
                    task={task}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default EmployeeTasks;


