import HomePage from '@/pages/HomePage'
import ContactsPage from '@/pages/ContactsPage'
import PostsPage from '@/pages/PostsPage'
import PostsInfinite from '@/pages/PostsInfinite'
import MainLayout from '@/components/MainLayout/MainLayout'
import { Navigate } from 'react-router'



export const pagesRoutes = [
  {
    path: '/',
    element: <HomePage />,
    meta: { title: 'Головна' },
  },
  {
    path: '/posts',
    element: <PostsPage />,
    meta: { title: 'Пости' },
  },
  {
    path: '/posts-infinite',
    element: <PostsInfinite />,
    meta: { title: 'Нескінченне завантаження' },
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
    meta: { title: 'Контакти' },
  },
]

const routes = [
  {
    element: <MainLayout />,
    children: pagesRoutes,
  },
  // Перенаправлення неіснуючих шляхів на головну
  { path: '*', element: <Navigate to="/" replace /> },
]

export default routes
