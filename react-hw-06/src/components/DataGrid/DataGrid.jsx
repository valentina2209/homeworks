import { useCallback } from "react";
import { useMemo } from "react";
import { useDeferredValue } from "react";
import { useState } from "react";
import { users } from "../../data/users";
import css from "./DataGrid.module.css"
import GridRow from "../GridRow/GridRow";
import SortIcon from "./SortIcon";

function DataGrid() {
    const [query, setQuery] = useState("")
    const deferredQuery = useDeferredValue(query)

    const [sortKey, setSortKey] = useState("name")
    const [sortOrder, setSortOrder] = useState("asc")



    const handleSort = useCallback((key) => {
        setSortOrder((prev) =>
            sortKey === key && prev === "asc" ? "desc" : "asc"
        )
        setSortKey(key)
    }, [sortKey])

    const filteredAndSortedData = useMemo(() => {
        let result = users.filter((item) =>
            item.name.toLowerCase().includes(deferredQuery.toLowerCase())
        )

        result.sort((a, b) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]

            if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
            if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
            return 0
        })

        return result
    }, [deferredQuery, sortKey, sortOrder])

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Users Data Grid</h2>

            <div className={css.searchWrapper}>
                <input
                    className={css.input}
                    placeholder="Search by name..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </div>
            <table className={css.table}>
                <thead>
                    <tr>
                        <th onClick={() => handleSort("id")}>
                            ID
                            <SortIcon active={sortKey === "id"} direction={sortOrder} />
                        </th>
                        <th onClick={() => handleSort("name")}>
                            Name
                            <SortIcon active={sortKey === "name"} direction={sortOrder} />
                        </th>
                        <th onClick={() => handleSort("age")}>
                            Age
                            <SortIcon active={sortKey === "age"} direction={sortOrder} />
                        </th>
                        <th onClick={() => handleSort("email")}>
                            Email
                            <SortIcon active={sortKey === "email"} direction={sortOrder} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredAndSortedData.map((user) => (
                        <GridRow key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataGrid;