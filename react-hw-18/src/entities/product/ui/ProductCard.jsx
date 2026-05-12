import { FavoriteButton } from "@/features/toggle-favorite/ui/FavoriteButton";

export default function ProductCard({ product, children }) {
  const fallbackSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='sans-serif' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-2 flex flex-col items-center transition hover:shadow-lg w-full max-w-[180px] mx-auto h-64 relative">
      <div className="absolute top-0 right-0 z-10">
        <FavoriteButton product={product} />
      </div>

      {product.image && (
        <img
          src={product.image || fallbackSVG}
          alt={product.name}
          className="mb-1 w-32 h-32 object-contain rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackSVG;
          }}

        />

      )}
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-0.5 text-center w-full truncate">
        {product.name}
      </h3>
      <div className="text-slate-600 dark:text-slate-300 mb-1 text-xs">
        <span className="font-bold">{product.price}</span> грн
      </div>
      {product.ownerName && (
        <div className="text-xs text-slate-400 mb-1">
          Власник: {product.ownerName || product.ownerId}
        </div>
      )}
      {/* Місце для додаткових елементів */}
      {children}
    </div>
  )
}
