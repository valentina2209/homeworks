import ItemCard from "@/components/ItemCard";
import { useBooking } from "@/context/BookingContext";
import css from "./BookingPage.module.css"
import { useState } from "react";

function BookingPage() {
    const {
        selectedBuses,
        selectHotel,
        removeBus,
        removeHotel,
        chooseByAgency,
        finalBus,
        finalHotel
    } = useBooking()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleConfirm = () => {
        chooseByAgency();
        setIsModalOpen(true);
    }

    return (
        <section className={css.page}>
            <h1 className={css.title}>План вашої подорожі</h1>

            <div className={css.container}>
                <div className={css.section}>
                    <h3 className={css.sectionTitle}>Вибрані готелі ({selectHotel.length})</h3>
                    <div className={css.grid}>
                        {selectHotel.map(hotel => (
                            <ItemCard
                                key={hotel.id}
                                image={hotel.image}
                                name={hotel.name}
                                type={hotel.type}
                                showToggle={false}
                                showRemove={true}
                                onRemove={() => removeHotel(hotel.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className={`${css.section} ${css.alternateBg}`}>
                    <h3 className={css.sectionTitle}>Варіанти транспорту ({selectedBuses.length})</h3>
                    <div className={css.grid}>
                        {selectedBuses.map(bus => (
                            <ItemCard
                                key={bus.id}
                                image={bus.image}
                                name={bus.name}
                                type={bus.type}
                                showToggle={false}
                                showRemove={true}
                                onRemove={() => removeBus(bus.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className={css.actions}>
                    <button className={css.confirmBtn} onClick={handleConfirm}>
                        Сформувати тур
                    </button>
                </div>
            </div>


            {isModalOpen && (
                <div className={css.overlay} onClick={() => setIsModalOpen(false)}>
                    <div className={css.modal} onClick={(event) => event.stopPropagation()}>
                        <button className={css.closeBtn} onClick={() => setIsModalOpen(false)}>&times;</button>

                        <h2 className={css.modalTitle}>Ваша подорож сформована!</h2>
                        <p className={css.modalSubtitle}>Турфірма обрала для вас найкращі варіанти:</p>

                        <div className={css.resultCard}>
                            <div className={css.resultItem}>
                                <span className={css.label}>Транспорт:</span>
                                <span className={css.value}>{finalBus?.name || "Не обрано"}</span>
                            </div>
                            <div className={css.divider}></div>
                            <div className={css.resultItem}>
                                <span className={css.label}>Готель:</span>
                                <span className={css.value}>{finalHotel?.name || "Не обрано"}</span>
                            </div>
                        </div>

                        <button className={css.modalActionBtn} onClick={() => setIsModalOpen(false)}>
                            Чудово, дякую!
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default BookingPage;
