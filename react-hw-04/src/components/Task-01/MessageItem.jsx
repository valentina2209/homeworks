import styles from "./MessageItem.module.css";

function MessageItem({ id, text, likes, onLike, onDislike }) {
    return (
        <li className={styles.item}>
            <div className={styles.text}>{text}</div>

            <div className={styles.controls}>
                <button className={`${styles.btn} ${styles.btnLike}`} onClick={() => onLike(id)}>
                    👍
                </button>

                <button className={styles.btn} onClick={() => onDislike(id)}>
                    👎
                </button>

                <div className={styles.badge}>{likes}</div>
            </div>
        </li>
    );
}

export default MessageItem;