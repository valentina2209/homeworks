import styles from "./SocialItem.module.css";

function SocialItem({ img, title, link }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img className={styles.img} src={img} alt={title} />
            </div>
            <a
                href={link}
                target="_blank"
                className={styles.link}
            >
                <div className={styles.title}>{title}</div>
            </a>
        </div>
    );
}

export default SocialItem;