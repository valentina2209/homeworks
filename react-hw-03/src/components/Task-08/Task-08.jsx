/* Задача 8. Дано список автомобілів (марка, рік випуску, ціна). 
Сформувати елементи для фільтрування з використанням випадаючого списку 
(контент цих випадаючих списків сформувати у залежності від переданого 
списку).*/

import { useState } from "react"
import css from "./Task-08.module.css"

const carsData = [
    { brand: "BMW", year: 2020, price: 25000 },
    { brand: "Audi", year: 2019, price: 23000 },
    { brand: "Tesla", year: 2021, price: 45000 },
    { brand: "BMW", year: 2018, price: 18000 },
    { brand: "Audi", year: 2022, price: 50000 },
    { brand: "Volkswagen", year: 2023, price: 26467 },
    { brand: "Mercedes", year: 2022, price: 49601 },
]

function CarsFilter() {
    const [brand, setBrand] = useState("")
    const [year, setYear] = useState("")

    const brands = Array.from(new Set(carsData.map((c) => c.brand)))
    const years = Array.from(new Set(carsData.map((c) => c.year))).sort()

    const filteredCars = carsData.filter((car) => {
        return (
            (brand === "" || car.brand === brand) &&
            (year === "" || car.year === Number(year))
        )
    })

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Фільтр автомобілів</h2>

            <div className={css.filters}>
                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Усі марки</option>
                    {brands.map((b) => (
                        <option key={b} value={b}>
                            {b}
                        </option>
                    ))}
                </select>

                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value="">Усі роки</option>
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            <div className={css.carsList}>
                {filteredCars.map((car, index) => (
                    <div key={index} className={css.card}>
                        <p><strong>Марка:</strong> {car.brand}</p>
                        <p><strong>Рік:</strong> {car.year}</p>
                        <p><strong>Ціна:</strong> {car.price}</p>
                    </div>
                ))}

                {filteredCars.length === 0 && (
                    <p className={css.noResults}>Нічого не знайдено</p>
                )}
            </div>
        </div>
    );
}

export default CarsFilter;
