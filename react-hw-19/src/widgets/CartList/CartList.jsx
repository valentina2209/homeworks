import CartItemCard from '../../entities/cartItem/ui/CartItemCard'
import {
  CartIncreaseButton,
  CartDecreaseButton,
  CartRemoveButton,
} from '../../features/cart'
import { useGetUserCartQuery } from '../../entities/cartItem/api/cartItemApi'

export default function CartList({ userId }) {
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId)
  const items = Object.entries(cart).filter(([_, item]) => item)
  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )

  if (isLoading) return <div>Завантаження...</div>

  return (
    <div>
      {items.length === 0 && <div>Кошик порожній</div>}
      {items.map(([productId, item]) => (
        <CartItemCard key={productId} item={item}>
          <CartDecreaseButton userId={userId} productId={productId} />
          <span style={{ margin: '0 8px' }}>{item.quantity || 1}</span>
          <CartIncreaseButton
            userId={userId}
            productId={productId}
            product={item}
          />
          <CartRemoveButton userId={userId} productId={productId} />
        </CartItemCard>
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: 'bold' }}>
          Загальна вартість: {total}
        </div>
      )}
    </div>
  )
}
