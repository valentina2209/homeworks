import { useNavigate } from "react-router";
import ErrorIcon from "@/components/icons/ErrorIcon";
import styles from "./ErrorState.module.css";

function ErrorState({ error }) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <ErrorIcon />
            </div>
            <h2 className={styles.title}>Помилка завантаження даних</h2>
            <p className={styles.description}>
                Нам не вдалося синхронізувати інформацію. Спробуйте оновити сторінку або зверніться до техпідтримки.
            </p>

            {error?.status && (
                <div className={styles.errorCode}>
                    Код помилки: {error.status}
                </div>
            )}

            <div className={styles.actions}>
                <button className={styles.retryBtn} onClick={() => window.location.reload()}>
                    Оновити
                </button>
                <button className={styles.backBtn} onClick={() => navigate("/")}>
                    На головну
                </button>
            </div>
        </div>
    );
}

export default ErrorState;