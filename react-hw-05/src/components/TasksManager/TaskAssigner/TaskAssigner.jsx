import { useState } from 'react';
import { tasks, employees } from '../../../data/tasksDevider.js'
import css from './TaskAssigner.module.css'
import TaskList from '../TaskList/TaskList.jsx';
import EmployeeTasks from '../EmployeeTasks/EmployeeTasks'

function TaskAssigner() {
    const [assignedTasks, setAssignedTasks] = useState({})
    const assignTask = (taskId, employeeId) => {
        setAssignedTasks(prev => ({ ...prev, [taskId]: employeeId }))
    }
    const removeTask = (taskId) => {
        setAssignedTasks(prev => {
            const copy = { ...prev }
            delete copy[taskId]
            return copy
        })
    }

    return (
        <div className={css.wrapper}>
            <TaskList
                tasks={tasks}
                employees={employees}
                assignedTasks={assignedTasks}
                onAssign={assignTask}
            />
            <div className={css.columns}>
                {employees.map(employees => (
                    <EmployeeTasks
                        key={employees.id}
                        employee={employees}
                        tasks={tasks}
                        assignedTasks={assignedTasks}
                        onRemove={removeTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskAssigner;