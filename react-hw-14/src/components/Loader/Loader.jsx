import { useMemo } from "react";
import styles from "./Loader.module.css";

const phrases = [
    "Синхронізуємо дані...",
    "Оновлюємо інформацію...",
    "Завантажуємо актуальні записи...",
    "Будь ласка, зачекайте мить...",
    "Майже готово...",
    "Формуємо список...",
    "Отримуємо дані з сервера...",
    "Ще мить — і все з'явиться!"
];

function Loader() {
    const randomText = useMemo(() => {
        return phrases[Math.floor(Math.random() * phrases.length)];
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}></div>
            <p className={styles.text}>{randomText}</p>
        </div>
    );
}

export default Loader;