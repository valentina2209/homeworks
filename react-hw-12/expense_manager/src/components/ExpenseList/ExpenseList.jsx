import { useSelector, useDispatch } from 'react-redux';
import { selectExpenses, selectTotalAmount, deleteExpense } from '@/store/slices/expensesSlice';
import css from './ExpenseList.module.css';
import toast from 'react-hot-toast';

const ExpenseList = () => {
    const expenses = useSelector(selectExpenses);
    const total = useSelector(selectTotalAmount);
    const dispatch = useDispatch();

    const handleDelete = (id, name) => {
        dispatch(deleteExpense(id));
        toast.success(`Витрату "${name}" видалено`);
    };

    if (expenses.length === 0) {
        return <p className={css.empty}>Ви ще нічого не витратили. Поки що ви багаті! 💰</p>;
    }

    return (
        <div className={css.container}>
            <div className={css.header}>
                <h2>Ваші витрати</h2>
                <div className={css.total}>
                    Всього: <span>{total.toFixed(2)} грн</span>
                </div>
            </div>

            <ul className={css.list}>
                {expenses.map(({ id, name, amount, date }) => (
                    <li key={id} className={css.item}>
                        <div className={css.info}>
                            <span className={css.name}>{name}</span>
                            <span className={css.date}>{date}</span>
                        </div>
                        <div className={css.amountContainer}>
                            <span className={css.amount}>-{amount} грн</span>
                            <button
                                onClick={() => handleDelete(id, name)}
                                className={css.deleteBtn}
                                title="Видалити"
                            >
                                &times;
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;