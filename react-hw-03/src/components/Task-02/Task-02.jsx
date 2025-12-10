/* Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
менше нуля – білий
від 0 до 10 – синій,
    від 11 до 22 – зелений
вище 22 – червоний
Реалізувати з класами і стилями.*/
import { useState } from "react"

function TempSwitch() {
    const [temper, setTemper] = useState("")

    const getBackgroundColor = (temp) => {
        if (temp === "") return "purpure"
        const t = Number(temp)
        if (t < 0) return "white"
        if (t >= 0 && t <= 10) return "blue"
        if (t >= 11 && t <= 22) return "green"
        if (t > 22) return "red"
    }

    return (
        <div
            className="container"
            style={{
                backgroundColor: getBackgroundColor(temper),
                width: "200px",
                height: "200px"
            }}
        >
            <input
                type="number"
                value={temper}
                onChange={(e) => setTemper(e.target.value)}
                placeholder="Введіть температуру"
            />
        </div>
    )
}

export default TempSwitch;