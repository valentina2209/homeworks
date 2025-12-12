/* Задача 6. Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо 
у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка 
«Додати» заблокована.  Якщо не вистачає хлопців або дівчат вибір також 
блокується. */
import { useState } from "react";
import css from "./Task-06.module.css"

function CouplesForDancing() {
    const [boys, setBoys] = useState(["Іван", "Олег", "Петро"])
    const [girls, setGirls] = useState(["Марія", "Оксана", "Наталя"])
    const [selectedBoy, setSelectedBoy] = useState("")
    const [selectedGirl, setSelectedGirl] = useState("")
    const [pairs, setPairs] = useState([]);

    const addPair = () => {
        if (!selectedBoy || !selectedGirl) return
        const pairKey = `${selectedBoy}-${selectedGirl}`;
        setPairs((p) => [...p, { boy: selectedBoy, girl: selectedGirl, id: pairKey }])
        setBoys((b) => b.filter(x => x !== selectedBoy))
        setGirls((g) => g.filter(x => x !== selectedGirl))
        setSelectedBoy("")
        setSelectedGirl("")
    }

    const removePair = (id) => {
        const pair = pairs.find(p => p.id === id)
        if (!pair) return
        setPairs((p) => p.filter(x => x.id !== id))
        setBoys((b) => [...b, pair.boy])
        setGirls((g) => [...g, pair.girl])
    }

    const isAddDisabled = !selectedBoy || !selectedGirl || boys.length === 0 || girls.length === 0


    return (
        <div className={css.wrapper}>
            <h2>Створення пар для танців</h2>

            <div className={css.selectors}>
                <div>
                    <h3>Хлопці</h3>
                    <select
                        value={selectedBoy}
                        onChange={(e) => setSelectedBoy(e.target.value)}
                    >
                        <option value="">Оберіть хлопця</option>
                        {boys.map((b) => (
                            <option key={b} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <h3>Дівчата</h3>
                    <select
                        value={selectedGirl}
                        onChange={(e) => setSelectedGirl(e.target.value)}
                    >
                        <option value="">Оберіть дівчину</option>
                        {girls.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                className={css.addBtn}
                onClick={addPair}
                disabled={isAddDisabled}
            >
                ➕ Додати пару
            </button>

            <h3>Вибрані пари</h3>
            <ul className={css.pairsList}>
                {pairs.map(pair => (
                    <li key={pair.id}>
                        {pair.boy} ❤️ {pair.girl}
                        <button className={css.removeBtn}
                            onClick={() => removePair(pair.id)}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default CouplesForDancing;
