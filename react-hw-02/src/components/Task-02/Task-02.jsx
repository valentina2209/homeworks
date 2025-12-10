/* Задача 2. З випадаючого списку вибираємо клас квитка у літаку.Якщо
1) бізнес - виводимо елементи для вибору газети та коньяку(якщо вибрано коньяк, 
то запропонувати закуску(так / ні)), на фоні зображення бізнес кают
2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки. */

import { useState } from "react";


function TicketClass() {
    const [ticketClass, setTicketClass] = useState("")
    const [drink, setDrink] = useState("")
    const [snack, setSnack] = useState("")

    const handleChange = (e) => {
        setTicketClass(e.target.value)
        setDrink("")
        setSnack("")
    }

    return (
        <div
            className={`
            min-h-screen p-6 font-sans
            flex items-center justify-center
            ${ticketClass === "business" ? "bg-cover bg-center bg-[url('https://tripmydream.cc/travelhub/travel/block_gallery/95/541/default_95541.jpg?')]" : ""}
            ${ticketClass === "economy" ? "bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/046/370/769/small/blue-sky-and-clouds-background-view-from-the-airplane-photo.jpg')]" : ""}
        `}
        >
            <div className="max-w-md w-full bg-blue/75 backdrop-blur-md text-center p-6 rounded-lg shadow-lg">
                <label className="block p-2 text-lg font-medium mb-2 text-gray-700">
                    Оберіть клас квитка:
                </label>

                <select
                    value={ticketClass}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4 text-black"
                >
                    <option value="">---</option>
                    <option className="text-gray-800" value="business">Бізнес</option>
                    <option className="text-gray-800" value="economy">Економ</option>
                </select>

                {ticketClass === "business" && (
                    <div className="mt-4">
                        <h3 className="text-xl text-amber-200 font-semibold mb-3">Ви обрали бізнес-клас</h3>

                        <label className="block mb-1 font-medium">Додаткова послуга:</label>
                        <select
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                            className="w-full p-2 border rounded mb-3 text-sky-400"
                        >
                            <option value="">---</option>
                            <option className="text-sky-400" value="newspaper">Газета</option>
                            <option className="text-sky-400" value="brandy">Коньяк</option>
                        </select>

                        {drink === "brandy" && (
                            <div className="mt-3">
                                <label className="block mb-1 font-medium">Бажаєте закуску?</label>
                                <select
                                    value={snack}
                                    onChange={(e) => setSnack(e.target.value)}
                                    className="w-full p-2 border rounded  text-sky-400"
                                >
                                    <option className=" text-sky-400" value="">---</option>
                                    <option className=" text-sky-400" value="yes">Так</option>
                                    <option className=" text-sky-400" value="no">Ні</option>

                                </select>
                            </div>
                        )}
                    </div>
                )}

                {ticketClass === "economy" && (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-3 text-blue-900">Ви обрали економ-клас</h3>

                        <label className="block mb-1 font-medium text-blue-900">Тип пива</label>
                        <select
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                            className="w-full p-2 border rounded mb-3 text-blue-900"
                        >
                            <option className="text-blue-900" value="">---</option>
                            <option className="text-blue-900" value="lager">Лагер</option>
                            <option className="text-blue-900" value="dark">Темне</option>
                        </select>

                        <label className="block mb-1 font-medium text-blue-900">Чіпси:</label>
                        <select
                            value={snack}
                            onChange={(e) => setSnack(e.target.value)}
                            className="w-full p-2 border rounded text-blue-900"
                        >
                            <option className="text-blue-900" value="">---</option>
                            <option className="text-blue-900" value="classic">Класичні</option>
                            <option className="text-blue-900" value="cheese">Сирні</option>
                            <option className="text-blue-900" value="paprika">Паприка</option>
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TicketClass;