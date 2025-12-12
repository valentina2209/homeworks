/* Задача 7. Динамічний пошук. Є список працівників і поле пошуку. 
При введенні відображаються усі, які містять вказаний фрагмент */

import { useState } from "react";

function DynamicSearch() {
    const [query, setQuery] = useState("")

    const employees = ["Олексій", "Марія", "Іван", "Наталка", "Олег", "Світлана"]
    const filtered = employees.filter(e => e.toLowerCase().includes(query.toLowerCase()))

    return (
        <div>
            <h2>Search</h2>
            <input
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filtered.map(name =>
                    <li key={name}>
                        {name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default DynamicSearch;
