import CartList from '../widgets/CartList/CartList'
import { useSelector } from 'react-redux'

export default function CartPage() {
  const user = useSelector((state) => state.auth.user)
  if (!user) return <div>Тільки для авторизованих користувачів</div>
  return (
    <div>
      <h1>Мій кошик</h1>
      <CartList userId={user.uid} />
    </div>
  )
}
