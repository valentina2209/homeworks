import { useNavigate } from 'react-router'
import editIcon from '@/assets/icons/edit-white.svg'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'

export function UserEditButton({ userId }) {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.UserEditPage.navigationPath(userId))
  }
  return (
    <button
      className="px-1.5 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center"
      title="Редагувати користувача"
      onClick={onClick}
    >
      <img src={editIcon} alt="Редагувати" className="w-4 h-4" />
    </button>
  )
}
