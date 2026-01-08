import { useMemo, useId, useState } from "react";
import css from "./Calculator.module.css"
import ResultDisplay from "./ResultDisplay";

function Calculator() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [count, setCount] = useState(0)

    const id1 = useId()
    const id2 = useId()

    const result = useMemo(() => {
        return a + b
    }, [a, b])

    return (
        <div className={css.calculator}>
            <h2 className={css.heading}>Калькулятор</h2>

            <div className={css.inputGroup}>
                <label htmlFor={id1}>Число А</label>
                <input
                    type="number"
                    id={id1}
                    value={a}
                    onChange={(event) => setA(Number(event.target.value))}
                />
            </div>
            <div className={css.inputGroup}>
                <label htmlFor={id2}>Число В</label>
                <input
                    type="number"
                    id={id2}
                    value={b}
                    onChange={(event) => setB(Number(event.target.value))}
                />
            </div>

            <ResultDisplay result={result} />

            <button
                className={css.counterBtn}
                onClick={() => setCount((prev) => prev + 1)}
            >
                {count}
            </button>

        </div>
    );
}

export default Calculator;