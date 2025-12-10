/*Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. 
Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» 
(і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, 
спробуйте ще раз» (і додаємо червону рамку).
*/

import { useState } from "react"
import { words } from "./word"
import style from "./Task-03.module.css"

function EnglishTrainer() {
    const [index, setIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState("")
    const [status, setStatus] = useState(null)

    const current = words[index];


    const handleCheck = () => {
        if (userAnswer.trim().toLowerCase() === current.translation.toLowerCase()) {
            setStatus("success")
        } else {
            setStatus("error")
        }
    }

    const handleNext = () => {
        setIndex(prev => (prev + 1) % words.length)
        setUserAnswer("")
        setStatus(null)
    }

    return (
        <div className={style.wrapper}>
            <img
                src={current.img}
                alt={current.word}
                className={`${style.image} ${status === "success"
                    ? style.successBorder
                    : status === "error"
                        ? style.errorBorder
                        : ""
                    }`}
            />

            <p className={style.word}>{current.word}</p>

            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={style.input}
            />

            <button onClick={handleCheck} className={style.btn}>
                Перевірити
            </button>

            {status === "success" && (
                <p className={style.successMsg}>Добре. Відповідь правильна! 😊</p>
            )}

            {status === "error" && (
                <p className={style.errorMsg}>Невірно, спробуй ще 😔</p>
            )}

            {status && (
                <button onClick={handleNext} className={style.nextBtn}>
                    Наступне слово
                </button>
            )}

        </div>
    )

}

export default EnglishTrainer;

