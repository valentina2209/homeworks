/* Задача 14. Розробити форму для бронювання номера у готелі 
(придумайте самі які мають бути поля)
*/

import { useState } from "react";
import css from "./Task-14.module.css";

function HotelBooking() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        room: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        services: [],
        comment: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const servicesList = ["Сніданок", "Паркінг", "SPA", "Трансфер", "Обід", "Вечеря"];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const toggleService = (service) => {
        setForm(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(service => service !== service)
                : [...prev.services, service]
        }));
    };

    const isValid =
        form.name &&
        form.email &&
        form.room &&
        form.checkIn &&
        form.checkOut &&
        new Date(form.checkOut) > new Date(form.checkIn);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValid) return;
        setSubmitted(true);
    };

    return (
        <div className={css.wrapper}>
            <h2>🏨 Бронювання номера</h2>

            {submitted ? (
                <div className={css.success}>
                    <h3>✅ Бронювання успішне!</h3>
                    <p>Дякуємо, {form.name}. Ми надішлемо підтвердження на {form.email}</p>
                </div>
            ) : (
                <form className={css.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше ім’я"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <select name="room" value={form.room} onChange={handleChange}>
                        <option value="">Тип номера</option>
                        <option value="single">Одномісний</option>
                        <option value="double">Двомісний</option>
                        <option value="lux">Люкс</option>
                    </select>

                    <div className={css.dates}>
                        <input
                            type="date"
                            name="checkIn"
                            value={form.checkIn}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="checkOut"
                            value={form.checkOut}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="number"
                        name="guests"
                        min="1"
                        max="5"
                        placeholder="Вкажіть кількість гостей"
                        value={form.guests}
                        onChange={handleChange}
                    />

                    <div className={css.services}>
                        {servicesList.map(service => (
                            <label key={service}>
                                <input
                                    type="checkbox"
                                    checked={form.services.includes(service)}
                                    onChange={() => toggleService(service)}
                                />
                                {service}
                            </label>
                        ))}
                    </div>

                    <textarea
                        name="comment"
                        placeholder="Коментар"
                        value={form.comment}
                        onChange={handleChange}
                    />

                    <button disabled={!isValid}>
                        🏷 Забронювати
                    </button>
                </form>
            )}
        </div>
    );
}

export default HotelBooking;
