import { memo } from "react"
import css from "./GridRow.module.css"

function GridRow({ user }) {
    return (
        <tr className={css.row}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
        </tr>
    );
}

export default memo(GridRow);