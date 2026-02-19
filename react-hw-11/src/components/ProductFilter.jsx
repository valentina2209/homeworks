import { useId } from "react";
import css from "./ProductFilter.module.css";

function ProductFilter({ filter, onChange }) {
    const id = useId()

    return (
        <div className={css.filterContainer}>
            <label htmlFor={id} className={css.label}>Пошук:</label>
            <input
                type="text"
                id={id}
                className={css.input}
                placeholder="Введіть назву..."
                value={filter}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}

export default ProductFilter;