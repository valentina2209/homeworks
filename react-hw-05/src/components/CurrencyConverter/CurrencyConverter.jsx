import { useEffect, useState } from "react";
import css from './CurrencyConverter.module.css'
import { converters } from "../../data/converters";

function CurrencyConverter() {
    const [currency, setCurrency] = useState(converters[0].code)
    const [currencyExchange, setCurrencyExchange] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() => {
        async function fetchCurrencyExchange() {
            try {
                const day = new Date()
                const today = day.toISOString().split('T')[0].replace(/-/g, '')
                const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${today}&json`

                const response = await fetch(url)
                const data = await response.json()

                if (data.length > 0) setCurrencyExchange(data[0].rate)
                else setCurrencyExchange(null)
            }
            catch (error) {
                console.error('Помилка запиту', error)
            }
        }
        fetchCurrencyExchange()
    }, [currency])

    function convert() {
        if (currencyExchange !== null) {
            setResult((quantity * currencyExchange).toFixed(2))
        }
    }

    function clear() {
        setQuantity(0)
        setResult(0)
    }

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Конвертер валют</h2>

            <div className={css.field}>
                <label className={css.label}>Валюта:</label>
                <select
                    className={css.select}
                    value={currency}
                    onChange={(event) => setCurrency(event.target.value)}
                >
                    {converters.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.name} ({item.code})
                        </option>
                    ))}
                </select>
            </div>

            <div className={css.field}>
                <label className={css.label}>Сума:</label>
                <input
                    className={css.input}
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))} />

            </div>

            <div className={css.buttons}>
                <button className={css.buttonPrimary} onClick={convert}>
                    Конвертувати
                </button>
                <button className={css.buttonSecondary} onClick={clear}>
                    Очистити
                </button>
            </div>

            <div className={css.result}>
                Результат: {result}
            </div>
        </div>
    );
}

export default CurrencyConverter;