import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

import { store } from './store'
import router from './router'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </Provider>,
)
