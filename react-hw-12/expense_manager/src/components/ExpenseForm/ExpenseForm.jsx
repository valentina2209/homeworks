import { useDispatch } from 'react-redux';
import useForm from '@/hooks/useForm';
import toast from 'react-hot-toast';
import { addExpense } from '@/store/slices/expensesSlice';
import css from "./ExpenseForm.module.css"

function ExpenseForm() {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        amount: "",
    }

    const { values, handleChange } = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!values.name.trim() || !values.amount || values.amount <= 0) {
            toast.error("Будь ласка, заповніть всі поля коректно");
            return;
        }

        dispatch(addExpense(values.name, values.amount));

        toast.success("Витрату додано!");
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type='text'
                    name='name'
                    placeholder='На що витратили? (напр. Проїзд)'
                    value={values.name}
                    onChange={handleChange}
                    className={css.input}
                />

                <input
                    type='number'
                    name='amount'
                    placeholder='Сума (грн)'
                    value={values.amount}
                    onChange={handleChange}
                    className={css.input}
                />

                <button type='submit' className={css.button}>
                    Додати витрату
                </button>
            </form>
        </div>

    )
}

export default ExpenseForm;