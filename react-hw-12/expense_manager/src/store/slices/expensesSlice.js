import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [
        {
            id: "1",
            name: "Coffee",
            amount: 60
        },
    ]
}

const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: (name, amount) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        amount: Number(amount),
                        date: new Date().toLocaleDateString(),
                    },
                };
            },
        },

        deleteExpense: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    },
})

export const { addExpense, deleteExpense } = expensesSlice.actions;

export const selectExpenses = (state) => state.expenses.items;

export const selectTotalAmount = (state) => state.expenses.items.reduce((total, item) => total + item.amount, 0)

export default expensesSlice.reducer;