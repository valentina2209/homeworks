import './App.css'
import CarsList from './components/CarsList'
import NumList from './components/NumList'
import ProductManager from './components/ProductManager'

function App() {
  // const numbers = [11, 22, 33]
  const numbers = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 100)
  )

  const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Tesla', model: 'Model 3', year: 2022 },
    { id: 4, brand: 'Ford', model: 'Focus', year: 2018 },
    { id: 5, brand: 'BMW', model: 'X5', year: 2021 },
  ]

  return (
    <>
      <ProductManager />
      <hr />
      <CarsList cars={cars} />
      <hr />
      <NumList numbers={numbers} />
    </>
  )
}

export default App
