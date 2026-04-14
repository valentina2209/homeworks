import MainMenu from '@/components/MainMenu'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast';
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Toaster position="top-center" />
      <MainMenu />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout








