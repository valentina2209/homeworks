/* Задача 9. Перекладач.Користувачу виводять змішані картки з словами на англійській 
і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). 
Якщо знайдено правильні пари карток, що відповідають одному слову, 
то видаляємо ці картки. Інакше - виділяємо червоною рамкою і 
через секунду забираємо рамку.*/

import { useState } from "react";
import css from "./Task-09.module.css"

const initialCards = [
    { id: 0, en: 'table', ua: 'стіл' },
    { id: 1, en: 'car', ua: 'автомобіль' },
    { id: 2, en: 'bus', ua: 'автобус' },
    { id: 3, en: 'man', ua: 'чоловік' },
    { id: 4, en: 'boy', ua: 'хлопець' },
    { id: 5, en: 'girl', ua: 'дівчина' },
    { id: 6, en: 'cat', ua: 'кіт' },
    { id: 7, en: 'dog', ua: 'собака' },
]

function TranslatorCards() {
    const [cards, setCards] = useState(() => {
        const preparedCards = initialCards.flatMap(word => [
            {
                id: `${word.id}-en`,
                text: word.en,
                pairId: word.id,
                lang: "en",
            },
            {
                id: `${word.id}-ua`,
                text: word.ua,
                pairId: word.id,
                lang: "ua",
            },
        ])

        return preparedCards.sort(() => Math.random() - 0.5)
    })

    const [selectedCards, setSelectedCards] = useState([])
    const [wrongCards, setWrongCards] = useState([])

    const handleCardClick = (card) => {
        if (selectedCards.length === 2) return

        if (selectedCards.some(selected => selected.id === card.id)) return

        const updatedSelected = [...selectedCards, card]
        setSelectedCards(updatedSelected)

        if (updatedSelected.length === 2) {
            const [first, second] = updatedSelected

            if (first.pairId === second.pairId) {
                setTimeout(() => {
                    setCards(prev =>
                        prev.filter(
                            card => card.id !== first.id && card.id !== second.id
                        )
                    )
                    setSelectedCards([])
                }, 500)
            } else {
                setWrongCards(updatedSelected)

                setTimeout(() => {
                    setSelectedCards([])
                    setWrongCards([])
                }, 1000)
            }
        }
    }

    const getCardClass = (card) => {
        if (wrongCards.some(wrong => wrong.id === card.id)) return css.wrong;
        if (selectedCards.some(selected => selected.id === card.id)) return css.selected
        return ""
    }

    const enCards = cards.filter(c => c.lang === "en");
    const uaCards = cards.filter(c => c.lang === "ua");

    return (
        <div className={css.wrapper}>
            <h2>Перекладач</h2>
            <div className={css.columns}>
                <div className={css.column}>
                    {enCards.map(card => (
                        <div
                            key={card.id}
                            className={`${css.card} ${getCardClass(card)}`}
                            onClick={() => handleCardClick(card)}
                        >
                            {card.text}
                        </div>
                    ))}
                </div>

                <div className={css.column}>
                    {uaCards.map(card => (
                        <div
                            key={card.id}
                            className={`${css.card} ${getCardClass(card)}`}
                            onClick={() => handleCardClick(card)}
                        >
                            {card.text}
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
}

export default TranslatorCards;