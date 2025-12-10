/* Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.*/

import { useState } from "react";

function CalkCounter() {
    const [number, setNumber] = useState('')
    const numberSm = Number(number)

    const isNumberValid =
        !!numberSm &&
        !Number.isNaN(numberSm) &&
        Number.isFinite(numberSm) &&
        numberSm >= 0

    const meters = (isNumberValid && numberSm / 100) || 0
    const km = meters / 1000

    return (
        <div>
            <div>
                <label>
                    Sm
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </label>
            </div>
            <hr />
            {!isNumberValid ? (
                <div>Задайте довжину у сантиметрах</div>
            ) : (
                <div>
                    <div>Метрів: {meters}</div>
                    <div>Кілометрів: {km}</div>
                </div>
            )}
        </div>
    );
}

export default CalkCounter;