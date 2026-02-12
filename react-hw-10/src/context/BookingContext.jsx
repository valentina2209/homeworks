import { createContext, useContext, useState } from "react";


const BookingContext = createContext()

export function BookingProvider({ children }) {
    const [selectedBuses, setSelectedBuses] = useState([])
    const [selectHotel, setSelectHotel] = useState([])

    const [finalBus, setFinalBus] = useState(null)
    const [finalHotel, setFinalHotel] = useState(null)

    function addBus(bus) {
        setSelectedBuses(prev => {
            const exists = prev.some(item => item.id === bus.id)
            if (exists) {
                return prev.filter(item => item.id !== bus.id)
            }
            return [...prev, bus];
        });
    };

    function removeBus(id) {
        setSelectedBuses(prev => prev.filter(bus => bus.id !== id))
    }

    function addHotel(hotel) {
        setSelectHotel(prev => {
            const exists = prev.some(item => item.id === hotel.id);
            if (exists) {
                return prev.filter(item => item.id !== hotel.id);
            }
            return [...prev, hotel];
        });
    };

    function removeHotel(id) {
        setSelectHotel(prev => prev.filter(hotel => hotel.id !== id))
    }

    function getRandomItem(items) {
        const randomInd = Math.floor(Math.random() * items.length)
        return items[randomInd]
    }

    const chooseByAgency = () => {
        if (selectedBuses.length > 0) {
            setFinalBus(getRandomItem(selectedBuses));
        } else {
            setFinalBus(null);
        }

        if (selectHotel.length > 0) {
            setFinalHotel(getRandomItem(selectHotel));
        } else {
            setFinalHotel(null);
        }
    };

    return (
        <BookingContext.Provider
            value={{ selectedBuses, selectHotel, addBus, removeBus, addHotel, removeHotel, chooseByAgency, finalBus, finalHotel }} >
            {children}
        </BookingContext.Provider>
    )
}

export function useBooking() {
    return useContext(BookingContext)
}