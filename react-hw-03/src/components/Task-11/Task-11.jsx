/* Задача 11. Морський бій з історією. */

import { useState } from "react";
import css from './Task-11.module.css'

function SeaBattle() {
    const [history, setHistory] = useState([{ board: Array(25).fill(null) }])
    const [stepNumber, setStepNumber] = useState(0)
    const [shipIndex, setShipIndex] = useState(
        () => Math.floor(Math.random() * 25)
    )
    const [message, setMessage] = useState("")
    const current = history[stepNumber]

    const handleClick = (index) => {
        if (current.board[index] || message) return

        const boardCopy = [...current.board]
        const isHit = index === shipIndex

        boardCopy[index] = isHit ? "hit" : "miss"

        const newHistory = history.slice(0, stepNumber + 1)
        setHistory([...newHistory, { board: boardCopy }])
        setStepNumber(newHistory.length)

        if (isHit) {
            setMessage("🚢 Корабель знищено!")
        }
    }

    const startNewGame = () => {
        setHistory([{ board: Array(25).fill(null) }])
        setStepNumber(0)
        setMessage("")
        setShipIndex(Math.floor(Math.random() * 25))
    }

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>🚢 Морський бій</h2>

            {message && <h3 className={css.message}>{message}</h3>}

            <div className={css.board}>
                {current.board.map((cell, index) => (
                    <button
                        key={index}
                        className={`${css.cell} ${cell === "hit" ? css.hit : cell === "miss" ? css.miss : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        {cell === "hit" ? "🚢" : cell === "miss" ? "💦" : ""}
                    </button>
                ))}
            </div>

            <button className={css.newGameBtn} onClick={startNewGame}>🔄 Нова гра</button>

            <div className={css.history}>
                <h3>Історія ходів</h3>
                <ul className={css.historyList}>
                    {history.map((_, move) => (
                        <li key={move}>
                            <button
                                className={`${css.historyBtn} ${move === stepNumber ? css.activeStep : ""}`}
                                onClick={() => setStepNumber(move)}>
                                {move === 0 ? "Початок" : `Хід ${move}`}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default SeaBattle;