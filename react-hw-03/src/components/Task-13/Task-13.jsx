/*Задача 13. Тренажер додавання. Вводимо загальну кількість прикладів 
і натискаємо на кнопку «Старт». Після запуску (натисканні на кнопку «Старт») 
кожні 10 секунд (10 секунд між завданнями) користувачу задають випадковий 
приклад з додавання двох цифр і робиться перевірка. Формується список  тих, 
які він відповів правильно, і які він відповів неправильно. 
Загальна кількість прикладів вводиться.*/

import { useEffect, useState } from 'react'
import css from './Task-13.module.css'

function getRandomTask() {
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)
    return { x, y }
}

function AdditionTrainer() {
    const [totalTask, setTotalTask] = useState("")
    const [currentTask, setCurrentTask] = useState(null)
    const [answer, setAnswer] = useState("")
    const [started, setStarted] = useState(false)

    const [taskIndex, setTaskIndex] = useState(0)
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])


    const nextTask = () => {
        if (!currentTask) return

        const rightAnswer = currentTask.x + currentTask.y
        const userAnswer = Number(answer)

        if (answer !== "") {
            if (userAnswer === rightAnswer) {
                setCorrect((prev) => [
                    ...prev,
                    `${currentTask.x} + ${currentTask.y} = ${userAnswer}`
                ])
            } else {
                setWrong((prev) => [
                    ...prev,
                    `${currentTask.x} + ${currentTask.y} ≠ ${userAnswer} (✔ ${rightAnswer}) `,
                ])
            }
        } else {
            setWrong((prev) => [
                ...prev,
                `${currentTask.x} + ${currentTask.y} = ? (Час вийшов, ✔ ${rightAnswer})`
            ])
        }

        const nextIndex = taskIndex + 1

        if (nextIndex >= Number(totalTask)) {
            setStarted(false)
            setCurrentTask(null)
            return
        }

        setCurrentTask(getRandomTask())
        setAnswer("")
        setTaskIndex(nextIndex)
    }

    useEffect(() => {
        if (!started) return

        const timer = setTimeout(() => {
            nextTask()
        }, 10000)

        return () => clearTimeout(timer)
    }, [started, taskIndex])


    const startTrainer = () => {
        if (!totalTask || totalTask <= 0) return

        setCorrect([])
        setWrong([])
        setTaskIndex(0)
        setCurrentTask(getRandomTask())
        setAnswer("")
        setStarted(true)
    }

    return (
        <div className={css.trainer}>
            <h2>➕ Тренажер додавання</h2>

            <div className={css.controls}>
                <input
                    type="number"
                    placeholder="Кількість прикладів"
                    value={totalTask}
                    onChange={(event) => setTotalTask(event.target.value)}
                    disabled={started}
                />
                <button onClick={startTrainer} disabled={started}>
                    Старт
                </button>
            </div>

            {currentTask && (
                <>
                    <div className={css.task}>
                        {currentTask.x} + {currentTask.y} = ?
                    </div>

                    <input
                        className={css.answerInput}
                        type="number"
                        placeholder="Ваша відповідь"
                        value={answer}
                        onChange={(event) => setAnswer(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                nextTask();
                            }
                        }}
                    />
                </>
            )}

            <div className={css.results}>
                <div className={css.correct}>
                    <h4>✅ Правильно</h4>
                    <ul>
                        {correct.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={css.wrong}>
                    <h4>❌ Неправильно</h4>
                    <ul>
                        {wrong.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdditionTrainer;