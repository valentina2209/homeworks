import { Link } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'

export function LoginLink({ style }) {
  return (
    <Link to={frontRoutes.pages.LoginPage.navigationPath} style={style}>
      Увійти
    </Link>
  )
}
