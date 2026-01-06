import './App.css'
import ProductsList from './components/ProductCard/ProductList'
import { products } from './data/products'
import { socials } from './data/socials'
import SocialList from './components/SocialList/SocialList'
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'
import { converters } from './data/converters'
import TaskAssigner from './components/TasksManager/TaskAssigner/TaskAssigner'

function App() {
  return (
    <div className="app">
      <ProductsList products={products} />
      <SocialList socials={socials} />
      <CurrencyConverter converters={converters} />
      <TaskAssigner />
    </div>
  )
}

export default App
