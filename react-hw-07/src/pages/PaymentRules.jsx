import css from "./PaymentRules.module.css"

function PaymentRules() {
    return (
        <div className={css.container}>
            <p className={css.subtext}>При отриманні</p>
            <p className={css.subtext}>Переказ на картку</p>
            <p className={css.subtext}>Записати у зошит</p>
        </div>
    );
}

export default PaymentRules;