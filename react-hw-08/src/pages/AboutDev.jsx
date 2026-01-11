import GoHomeButton from '../components/GoHomeButton';
import styles from './AboutApp.module.css';

function AboutDev() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Про розробника</h1>
        <div className={styles.content}>
          <p>Додаток розроблено в рамках навчального проекту.</p>
        </div>
        <div className={styles.homeBtnWrapper}>
          <GoHomeButton />
        </div>
      </div>
    </div>
  );
}

export default AboutDev




