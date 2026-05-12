import { useSelector } from 'react-redux';
import { useGetFavoritesQuery, useToggleFavoriteMutation } from "@/entities/favorite/api/favoriteApi";

export const FavoriteButton = ({ product }) => {
    const user = useSelector((state) => state.auth.user);
    const [toggleFavorite] = useToggleFavoriteMutation();
    const { data: favorites } = useGetFavoritesQuery(user?.uid, { skip: !user?.uid });

    const isFavorite = favorites?.some(item => item.id === product.id);

    const handleToggle = async (e) => {
        e.preventDefault();
        if (!user || user.role !== 'user') {
            alert("Тільки користувачі з роллю 'user' можуть додавати в улюблені");
            return;
        }
        await toggleFavorite({ userId: user.uid, product });
    };

    return (
        <button
            onClick={handleToggle}
            className="bg-transparent border-none outline-none ring-0 hover: bg-transparent focus:bg-transparent active:bg -transparent
                        p-0 m-0 transition-transform hover: scale-110 active: scale-95"
        >
            <span
                className={`text-2xl ${isFavorite ? 'text-red-500' : 'text-white/80'}`}
            >
                {isFavorite ? '❤️' : '🤍'}
            </span>
        </button>
    );
};