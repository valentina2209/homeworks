import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import ProductsPage from './pages/ProductsPage'
import Posts from "@/pages/Posts"
import Home from '@/pages/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import AddProductPage from './pages/AddProductPage'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App