import { useNavigate } from "react-router";
import PatchIcon from "@/components/icons/PatchIcon";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <PatchIcon />
                </div>
                <h1 className={styles.title}>Сторінка потребує лікування</h1>
                <p className={styles.text}>
                    На жаль, за цією адресою нічого немає. Ми вже наклали пластир на цю проблему, але радимо вам повернутися в безпечну зону.
                </p>
                <button
                    className={styles.backHome}
                    onClick={() => navigate("/")}
                >
                    На головну сторінку
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;