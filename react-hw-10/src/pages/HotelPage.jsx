import { useBooking } from "@/context/BookingContext";
import { hotels } from "@/data/hotelData";
import css from "./HotelPage.module.css"
import ItemCard from "@/components/ItemCard";

function HotelPage() {
    const { addHotel, selectHotel } = useBooking()


    return (
        <section className={css.page}>
            <h1 className={css.title}>Оберіть свій готель</h1>
            <div className={css.grid}>
                {hotels.map(hotel => (
                    <ItemCard
                        key={hotel.id}
                        image={hotel.image}
                        name={hotel.name}
                        type={hotel.type}
                        extra={`Вільні номери: ${hotel.rooms}`}
                        isSelected={
                            selectHotel.some(selected => selected.id === hotel.id)
                        }
                        onToggle={() => addHotel(hotel)}
                    />
                ))}
            </div>
        </section>

    );
}

export default HotelPage;