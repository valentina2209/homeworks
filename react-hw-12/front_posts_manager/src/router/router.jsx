import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import Home from '@/pages/Home'
import PostsPage from '@/pages/PostsPage'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const LazyPostForm = lazy(() => import("../pages/PostsPage/PostForm.jsx"))

export const routes = [
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
        meta: {
          title: 'Головна',
          isShow: true
        },
      },
      {
        path: '/posts',
        Component: PostsPage,
        meta: {
          title: 'Сторінка постів',
          isShow: true
        },
      },
      {
        path: '/about',
        Component: About,
        meta: {
          title: 'Про нас',
          isShow: true
        },
      },
      {
        path: '/form/:id?',
        element: <LazyPostForm />,
        meta: {
          title: '',
          isShow: false
        }
      }
    ],
  },
]

export const router = createBrowserRouter(routes)
