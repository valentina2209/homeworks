import css from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Як нас знайти?</h2>
            <p className={css.contactText}>1. Для початку, потрібно дістатися потягом до Ужгорода.</p>
            <p className={css.contactText}>2. Запитати у баби Галі</p>
            <p className={css.contactText}>До зустрічі!!!</p>
        </div>
    );
}

export default Contacts;