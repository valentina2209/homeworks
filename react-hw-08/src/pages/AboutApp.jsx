import styles from "./AboutApp.module.css"
import GoHomeButton from "../components/GoHomeButton"

function AboutApp() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Про додаток "Вчителі"</h1>
        <div className={styles.content}>
          <p>
            Цей додаток створений для зручного керування списком вчителів,
            планування зборів та редагування інформації про викладацький склад.
          </p>
        </div>
        <div className={styles.homeBtnWrapper}>
          <GoHomeButton />
        </div>
      </div>
    </div>
  )
}

export default AboutApp
