/*Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. 
Якщо не введено дозволену швидкість, 
то елемент введення поточної швидкості заблокований. 
Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, 
якщо від 50% до 100% - зелений, вище 100% - червоний. 
Якщо значення вище 90% починає блимати повідомлення «Увага!» */

import { useState } from "react";
import css from "./Task-03.module.css"

function SpeedChecker() {
    const [allowedSpeed, setAllowedSpeed] = useState("")
    const [currentSpeed, setCurrentSpeed] = useState("")

    let speedClass = ""
    let showWarning = false;

    if (allowedSpeed && currentSpeed) {
        const allowed = Number(allowedSpeed)
        const current = Number(currentSpeed)
        const ratio = current / allowed

        if (ratio < 0.5) {
            speedClass = css.speedLow
        } else if (ratio <= 1) {
            speedClass = css.speedNormal
        } else {
            speedClass = css.speedHigh
        }

        showWarning = ratio > 0.9
    }

    return (
        <div className={css.container}>
            <h1>Перевірка швидкості авто</h1>

            <div className={css.inputGroup}>
                <label>Дозволена швидкість:</label>
                <input
                    type="number"
                    value={allowedSpeed}
                    onChange={(e) => setAllowedSpeed(e.target.value)}
                />
            </div>
            <div className={css.inputGroup}>
                <label>Поточна швидкість:</label>
                <input
                    type="number"
                    value={currentSpeed}
                    onChange={(e) => setCurrentSpeed(e.target.value)}
                    disabled={!allowedSpeed}
                    className={speedClass}
                />
            </div>

            {showWarning && <div className={css.warning}>Увага!</div>}
        </div>

    )
}

export default SpeedChecker;