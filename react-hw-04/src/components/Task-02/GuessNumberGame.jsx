import { useState } from "react";
import { generateTargetNumber } from "./utils";
import styles from "./GuessNumberGame.module.css"
import SecretNumber from "./SecretNumber";
import PlayerControl from "./PlayerControl";

function GuessNumberGame() {
    const [targetNumber] = useState(() => generateTargetNumber(3))
    const [revealed, setRevealed] = useState([false, false, false])
    const [usedDigits, setUsedDigits] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [playerGuesses, setPlayerGuesses] = useState({ 1: [], 2: [] })
    const [winner, setWinner] = useState(null)

    const handleMove = (digit) => {
        if (winner || usedDigits.includes(digit)) return

        setUsedDigits(prev => [...prev, digit])

        let found = false
        const nextRevealed = [...revealed]

        targetNumber.forEach((number, index) => {
            if (number === digit) {
                nextRevealed[index] = true
                found = true
            }
        })

        if (found) {
            setRevealed(nextRevealed)
            setPlayerGuesses(prev => ({
                ...prev,
                [currentPlayer]: [...prev[currentPlayer], digit]
            }))

            if (nextRevealed.every(Boolean)) {
                setWinner(currentPlayer === 1 ? 2 : 1)
                return
            }
        }

        setCurrentPlayer(prev => (prev === 1 ? 2 : 1))
    }

    return (
        <div className={styles.gameWrapper}>
            <h1 className={styles.title}>Гра "Вгадай число"</h1>

            <SecretNumber target={targetNumber} revealed={revealed} />

            {winner ? (
                <div className={styles.winBanner}>
                    <h2>🎉 Гравець {winner} переміг!</h2>
                    <button className={styles.restartBtn} onClick={() => window.location.reload()}>
                        Грати знову
                    </button>
                </div>
            ) : (
                <div className={styles.playersContainer}>
                    {[1, 2].map(id => (
                        <PlayerControl
                            key={id}
                            id={id}
                            isActive={currentPlayer === id}
                            onMove={handleMove}
                            usedDigits={usedDigits}
                            guessedByPlayer={playerGuesses[id]}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default GuessNumberGame;
