/* Здача 12. Мережа магазинів. Дано список відділень та список товарів. 
Для кожного відділення можна вибирати декілька товарів. 
Вибирати та відображати перелік вибраних товарів для кожного відділення.
 */

import { useState } from "react";
import css from "./Task-12.module.css"

const stores = ["Головне", "Оптовий", "Магазин 1", "Магазин 2", "Магазин 3"];
const products = [
    "Телефони",
    "Телевізори",
    "Ноутбук",
    "Тостер",
    "Фени",
    "Чайники",
];

function StoresNetwork() {
    const [selectedStore, setSelectedStore] = useState("")
    const [selectedProducts, setSelectedProducts] = useState([])
    const [distribution, setDistribution] = useState({})

    const toggleProduct = (product) => {
        setSelectedProducts((prev) =>
            prev.includes(product)
                ? prev.filter((prev) => prev !== product)
                : [...prev, product]
        )
    }

    const addProducts = () => {
        if (!selectedStore || selectedProducts.length === 0) return

        setDistribution((prev) => ({
            ...prev,
            [selectedStore]: [
                ...(prev[selectedStore] || []),
                ...selectedProducts,
            ]
        }))

        setSelectedProducts([])
    }
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>🏬 Мережа магазинів</h2>

            <div className={css.grid}>
                <div className={css.card}>
                    <h3>Відділення</h3>
                    <select
                        value={selectedStore}
                        onChange={(event) => setSelectedStore(event.target.value)}
                    >
                        <option value="">Оберіть відділення</option>
                        {stores.map((store) => (
                            <option key={store} value={store}>
                                {store}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={css.grid}>
                <div className={css.card}>
                    <h3>Товари</h3>
                    <ul className={css.products}>
                        {products.map((product) => (
                            <li key={product}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(product)}
                                        onChange={() => toggleProduct(product)}
                                    />
                                    {product}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button
                className={css.addBtn}
                onClick={addProducts}
                disabled={!selectedStore || selectedProducts.length === 0}
            >
                ➕ Додати
            </button>

            <div className={css.result}>
                <h3>Розподіл товарів</h3>

                {Object.entries(distribution).map(([store, items]) => (
                    <div key={store} className={css.storeBlock}>
                        <strong>{store}</strong>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>* {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default StoresNetwork;
