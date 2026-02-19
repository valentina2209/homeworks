import { Link } from "react-router";
import css from "./Home.module.css"

function Home() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Вітаємо у проєкті!</h1>

            <div className={css.grid}>
                <div className={css.card}>
                    <div className={css.icon}>🧾</div>
                    <Link to="/products" className={css.cardTitle}>Каталог товарів</Link>
                    <p className={css.description}>
                        Керуйте асортиментом: додавайте нові позиції та миттєво знаходьте потрібне за допомогою зручного пошуку.
                    </p>
                </div>

                <div className={css.card}>
                    <div className={css.icon}>📕</div>
                    <Link to="/posts" className={css.cardTitle}>Список публікацій</Link>
                    <p className={css.description}>
                        Читайте актуальні публікації, що завантажуються в реальному часі. Ми подбали про те, щоб ви бачили процес оновлення даних.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;