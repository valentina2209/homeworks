/*Задача 10. Хрестики-нулики. З історією (можна повернутись назад)*/

import { useState } from "react";
import css from "./Task-10.module.css"

const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner(board) {
    for (const [a, b, c] of WIN_LINES) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null
}

function TicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [step, setStep] = useState(0)

    const currentBoard = history[step]
    const xIsNext = step % 2 === 0
    const winner = checkWinner(currentBoard)

    const handleClick = (index) => {
        if (currentBoard[index] || winner) return

        const newBoard = [...currentBoard]
        newBoard[index] = xIsNext ? "X" : "O"

        const newHistory = history.slice(0, step + 1)
        setHistory([...newHistory, newBoard])
        setStep(step + 1)
    }

    const jumpTo = (move) => {
        setStep(move)
    }

    const clearHistory = () => {
        setHistory([Array(9).fill(null)])
        setStep(0)
    }


    return (
        <div className={css.wrapper}>
            <h2>Хрестики-нулики</h2>

            <div className={css.status}>
                {winner
                    ? `🏆 Переможець: ${winner}`
                    : `Хід: ${xIsNext ? "X" : "O"}`
                }
            </div>

            <div className={css.board}>
                {currentBoard.map((cell, index) => (
                    <button
                        key={index}
                        className={css.cell}
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </div>


            <button
                className={css.clearBtn}
                onClick={clearHistory}
                disabled={history.length === 1}>
                🧹 Очистити історію
            </button>
            <h3>Історія ходів</h3>
            <ul className={css.history}>
                {history.map((_, move) => (
                    <li key={move}>
                        <button
                            className={css.historyBtn}
                            onClick={() => jumpTo(move)}
                        >
                            {move === 0 ? "Початок гри" : `Хід №${move}`}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TicTacToe;