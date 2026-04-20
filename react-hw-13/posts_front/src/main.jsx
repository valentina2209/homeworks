import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from './store'
import router from './router/router.js'
import { Toaster } from 'react-hot-toast'

import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster position='top-center' reverseOrder={false} />
    <RouterProvider router={router} />
  </Provider>
)
