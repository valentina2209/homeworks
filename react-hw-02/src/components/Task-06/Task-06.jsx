import { useState } from 'react';

const initialWaiting = [
    { id: 1, name: 'Голубці' },
    { id: 2, name: 'Грибовий суп' },
];
const initialProcessing = [
    { id: 3, name: 'Млинці з сиром' },
    { id: 4, name: 'Салат "Цезар"' },
    { id: 5, name: 'Салат "Грецький"' },
];
const initialCompleted = [
    { id: 6, name: 'Борщ' },
    { id: 7, name: 'Плов з овочами' },
];

function KitchenManager() {
    const [waitingList, setWaitingList] = useState(initialWaiting);
    const [processingList, setProcessingList] = useState(initialProcessing);
    const [completedList, setCompletedList] = useState(initialCompleted);
    const [newOrderName, setNewOrderName] = useState('');

    const addNewOrder = () => {
        if (newOrderName.trim() === '') return;
        const newOrder = { id: Date.now(), name: newOrderName.trim() };
        setWaitingList(prevList => [...prevList, newOrder]);
        setNewOrderName('');
    };

    const startCooking = (orderId) => {
        const orderToMove = waitingList.find(order => order.id === orderId);
        if (!orderToMove) return;
        setWaitingList(prevList => prevList.filter(order => order.id !== orderId));
        setProcessingList(prevList => [...prevList, orderToMove]);
    };

    const finishCooking = (orderId) => {
        const orderToMove = processingList.find(order => order.id === orderId);
        if (!orderToMove) return;
        setProcessingList(prevList => prevList.filter(order => order.id !== orderId));
        setCompletedList(prevList => [...prevList, orderToMove]);
    };

    const serveOrder = (orderId) => {
        setCompletedList(prevList => prevList.filter(order => order.id !== orderId));
    };

    const maxRows = Math.max(waitingList.length, processingList.length, completedList.length);

    return (
        <div>
            <h3>Замовленнями на Кухні</h3>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="newOrder">Нова замовлена страва:</label>
                <input
                    id="newOrder"
                    type="text"
                    value={newOrderName}
                    onChange={(e) => setNewOrderName(e.target.value)}
                />
                <button onClick={addNewOrder}>Додати</button>
            </div>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f0f0f0' }}>
                        <th style={{ padding: '8px' }}>Очікують на виконання</th>
                        <th style={{ padding: '8px' }}>Виконуються</th>
                        <th style={{ padding: '8px' }}>Готові до виносу</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: maxRows }).map((_, index) => (
                        <tr key={index}>
                            <td style={{ padding: '8px', verticalAlign: 'top' }}>
                                {waitingList[index] ? (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {waitingList[index].name}
                                        <button onClick={() => startCooking(waitingList[index].id)}>Готувати</button>
                                    </div>
                                ) : ""}
                            </td>
                            <td style={{ padding: '8px', verticalAlign: 'top' }}>
                                {processingList[index] ? (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {processingList[index].name}
                                        <button onClick={() => finishCooking(processingList[index].id)}>Приготовлено</button>
                                    </div>
                                ) : ""}
                            </td>
                            <td style={{ padding: '8px', verticalAlign: 'top' }}>
                                {completedList[index] ? (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {completedList[index].name}
                                        <button onClick={() => serveOrder(completedList[index].id)}>Подано</button>
                                    </div>
                                ) : ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default KitchenManager;