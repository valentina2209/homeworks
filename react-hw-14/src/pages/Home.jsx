import { Link } from "react-router"
import styles from "./Home.module.css"


function Home() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Керуйте медициною <br />
                    <span className={styles.accent}>майбутнього вже сьогодні</span>
                </h1>

                <p className={styles.description}>
                    Цей додаток допоможе вам ефективно керувати базою лікарів, пацієнтів
                    та записами на прийом. Організуйте роботу вашої клініки в один клік
                    за допомогою сучасного та швидкого інтерфейсу.
                </p>

                <div className={styles.actions}>
                    <Link to="/doctors" className={styles.primaryBtn}>Переглянути лікарів</Link>
                    <Link to="/appointments/new" className={styles.secondaryBtn}>Записати пацієнта</Link>
                </div>
            </div>

            <div className={styles.visual}>
                <div className={styles.blob}></div>
            </div>
        </div>
    )
}

export default Home