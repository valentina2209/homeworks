import { useAddOrIncreaseToCartMutation } from '@/entities/cartItem/api/cartItemApi'

export default function CartAddButton({ product, userId }) {
  const [addOrIncrease] = useAddOrIncreaseToCartMutation()
  return (
    <button
      className="px-1.5 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-green-400 whitespace-nowrap"
      onClick={() => addOrIncrease({ userId, productId: product.id, product })}
    >
      Додати
    </button>
  )
}
