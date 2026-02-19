import css from "./Error.module.css"

function Error({ message }) {
    return (
        <div className={css.errorWrapper}>
            <div className={css.errorIcon}>⚠️</div>
            <p className={css.errorText}>
                Ой! Щось пішло не так: <br />
                <span>{message}</span>
            </p>
            <button
                className={css.retryBtn}
                onClick={() => window.location.reload()}
            >
                Спробувати знову
            </button>
        </div>
    );
}

export default Error;