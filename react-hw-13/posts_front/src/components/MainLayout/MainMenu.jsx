import React from 'react'
import { NavLink } from 'react-router'
import { pagesRoutes } from '@/router/routes'
import css from './MainMenu.module.css'

const MainMenu = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.menuList}>
        {pagesRoutes
          .filter((route) => !route.meta.notInMenu)
          .map(({ path, meta }) => (
            <li key={path} className={css.menuItem}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${css.link} ${isActive ? css.activeLink : ''}`
                }
                end={path === '/'}
              >
                {meta.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default MainMenu
