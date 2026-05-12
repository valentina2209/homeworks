export default function CartItemCard({ item, children }) {
  const quantity = item.quantity || 1;
  const total = (item.price || 0) * quantity;

  const fallbackSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='sans-serif' font-size='10'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div style={{ border: '1px solid #ccc', margin: '8px 0', padding: '12px', display: 'flex', gap: '16px', alignItems: 'center' }}>
      <img
        src={item.image || fallbackSVG}
        alt={item.name}
        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackSVG;
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
        <div>Ціна: {item.price} грн</div>
        <div style={{ color: '#4caf50' }}>Сума: {total} грн</div>
        <div style={{ marginTop: '8px' }}>{children}</div>
      </div>
    </div>
  );
}