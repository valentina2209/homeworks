/* Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. 
При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні 
на червону стрілку спортсмен переміщається у загальний список.*/

import { useState } from "react";
import css from "./Task-05.module.css";

function Sportsman() {
    const [allSportsman, setAllSportsman] = useState([
        "Іван",
        "Олег",
        "Марина",
        "Світлана"
    ])

    const [selectedSportsman, setSelectedSportsman] = useState([])

    const moveToSelected = (name) => {
        setSelectedSportsman((prev) => [...prev, name])
        setAllSportsman((prev) => prev.filter((item) => item !== name))
    }

    const moveToAll = (name) => {
        setAllSportsman((prev) => [...prev, name])
        setSelectedSportsman((prev) => prev.filter((item) => item !== name))
    }

    return (
        <div className={css.container}>
            <div className={css.block}>
                <h3>Всі спортсмени</h3>
                <ul>
                    {allSportsman.map((name) => (
                        <li key={name}>
                            <span>{name}</span>
                            <button className={css.green}
                                onClick={() => moveToSelected(name)}>
                                ➡
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.block}>
                <h3>Вибрані для змагань</h3>
                <ul>
                    {selectedSportsman.map((name) => (
                        <li key={name}>
                            <span>{name}</span>
                            <button className={css.red}
                                onClick={() => moveToAll(name)}>
                                ⬅
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Sportsman;