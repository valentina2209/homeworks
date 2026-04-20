import React from 'react'
import { Outlet } from 'react-router'
import MainMenu from './MainMenu'
import css from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <h1 className={css.title}>React + RTK Query додаток</h1>
        <MainMenu />
      </header>

      <main className={css.main}>
        <Outlet />
      </main>

      <footer className={css.footer}>
        &copy; {new Date().getFullYear()} React RTK Query App
      </footer>
    </div>
  )
}

export default MainLayout
