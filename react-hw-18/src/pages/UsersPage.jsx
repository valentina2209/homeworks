import { UserList } from '@/widgets/userList/UserList'
import { useSelector } from 'react-redux'

export default function UsersPage() {
  const role = useSelector((state) => state.auth.role)

  if (role !== 'admin') {
    return <div>Доступ лише для адміністратора</div>
  }

  return (
    <div>
      <h1>Користувачі</h1>
      <UserList />
    </div>
  )
}
