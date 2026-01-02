import { useState } from "react"
import styles from "./PlayerControl.module.css"

const PlayerControl = ({ id, onMove, isActive, usedDigits, guessedByPlayer }) => {
    const [input, setInput] = useState('')

    const digit = Number(input)
    const isAlreadyUsed = usedDigits.includes(digit)
    const isInvalid = input === "" || isAlreadyUsed || digit < 0 || digit > 9

    const handleAction = () => {
        onMove(digit)
        setInput("")
    }

    return (
        <div className={`${styles.playerPanel} ${isActive ? styles.active : ""}`}>
            <h3>Гравець {id} {isActive && "⬅"}</h3>
            <p><strong>Вгадані:</strong> {guessedByPlayer.join(', ') || '-'}</p>

            <div className={styles.inputGroup}>
                <input
                    type="number"
                    className={styles.inputField}
                    placeholder="0-9"
                    value={input}
                    onChange={(event) => setInput(event.target.value.slice(0, 1))}
                    disabled={!isActive}
                />
                <button
                    className={styles.actionButton}
                    onClick={handleAction}
                    disabled={!isActive || isInvalid}
                >
                    Зробити хід
                </button>
                {isAlreadyUsed && <span className={styles.errorText}>Вже було!</span>}
            </div>

        </div>
    )
}

export default PlayerControl;