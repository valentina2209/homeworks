import { useState } from "react";
import useDebounce from "./useDebounce";
import { useEffect } from "react";
import css from "./Search.module.css"

function Search() {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 500)

    useEffect(() => {
        if (!debouncedQuery.trim()) return

        console.log("🔍 Search request:", debouncedQuery)
    }, [debouncedQuery])

    return (
        <div className={css.wrapper}>
            <label className={css.label} htmlFor="searchInput">
                Search
            </label>
            <input
                id="searchInput"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={css.input}
            />
        </div>
    );
}

export default Search;