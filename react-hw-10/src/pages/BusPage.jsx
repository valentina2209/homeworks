import ItemCard from "@/components/ItemCard";
import { useBooking } from "@/context/BookingContext";
import { buses } from "@/data/busData";
import css from "./BusPage.module.css"

function BusPage() {
    const { addBus, selectedBuses } = useBooking()

    return (
        <section className={css.page}>
            <h1 className={css.title}>Комфортні перевезення</h1>
            <div className={css.grid}>
                {buses.map(bus => (
                    <ItemCard
                        key={bus.id}
                        image={bus.image}
                        name={bus.name}
                        type={bus.type}
                        extra={`Місць: ${bus.seats || "Стандарт"}`}
                        isSelected={
                            selectedBuses.some(selected => selected.id === bus.id)
                        }
                        onToggle={() => addBus(bus)}
                    />
                ))}
            </div>
        </section>
    );
}

export default BusPage;