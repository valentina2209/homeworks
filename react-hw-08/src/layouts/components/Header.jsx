import { NavLink } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navList}>
        <NavLink
          to={frontRoutes.pages.home}
          className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
        >
          Головна
        </NavLink>
        <NavLink
          to={frontRoutes.pages.teachers.root}
          className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
        >
          Вчителі
        </NavLink>
        <NavLink
          to={frontRoutes.pages.meeting}
          className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
        >
          Збори
        </NavLink>
        <NavLink
          to={frontRoutes.pages.aboutApp}
          className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
        >
          Про додаток
        </NavLink>
        <NavLink
          to={frontRoutes.pages.aboutDev}
          className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
        >
          Про розробника
        </NavLink>

      </div>

    </header>
  )
}

export default Header
