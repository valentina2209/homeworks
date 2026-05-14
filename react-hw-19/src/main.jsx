import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './app/router/router'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { AppInit } from './app/init/AppInit'
import ErrorBoundary from './shared/ui/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppInit />
      <Suspense fallback={<div>Завантаження...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </Provider>
)



