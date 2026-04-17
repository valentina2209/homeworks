import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Менеджер витрат 💸</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default App;


