export default function CartItemCard({ item, children }) {
  const quantity = item.quantity || 1
  const total = (item.price || 0) * quantity
  return (
    <div style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
      <div>{item.name}</div>
      <div>Ціна: {item.price}</div>
      <div>Сума: {total}</div>
      {children}
    </div>
  )
}
