import css from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={css.overlay}>
            <div className={css.spinner}></div>
            <p className={css.text}>Завантаження...</p>
        </div>
    );
};

export default Loader;