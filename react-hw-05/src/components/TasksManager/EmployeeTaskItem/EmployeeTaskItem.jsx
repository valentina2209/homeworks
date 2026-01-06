import css from './EmployeeTaskItem.module.css'

function EmployeeTaskItem({ task, onRemove }) {
    return (
        <div className={css.item}>
            <span className={css.title}>{task.title}</span>
            <button
                className={css.removeBtn}
                onClick={() => onRemove(task.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default EmployeeTaskItem;






