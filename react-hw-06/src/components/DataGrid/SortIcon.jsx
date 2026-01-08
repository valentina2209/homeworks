import css from "./SortIcon.module.css"
function SortIcon({ active, direction }) {
    if (!active) {
        return <span className={css.sortPlaceholder}>↕</span>
    }

    return <span className={css.container}>{direction === "asc" ? "⬆" : "⬇"}</span>
}

export default SortIcon;