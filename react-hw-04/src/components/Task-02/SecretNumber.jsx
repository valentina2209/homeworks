import styles from "./SecretNumber.module.css"

const SecretNumber = ({ target, revealed }) => {
    return (
        <div className={styles.container}>
            {target.map((digit, index) => (
                <div
                    key={index}
                    className={`${styles.cell} ${revealed[index] ? styles.revealed : styles.hidden}`}
                >
                    {revealed[index] ? digit : ""}
                </div>
            ))}
        </div>
    )
}

export default SecretNumber