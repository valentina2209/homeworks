import './App.css'
// import StartComp from './components/StartComp'
import BallInter from './components/BallInter'
import Test from './components/Test'

// Приклад. Користувача заходить на сайт і вводить свій вік. Якщо вік менше 16, то вивсти повідомлення про заборону користування сайтом, інакше вивести зображення товару.
// "https://cdn-icons-png.flaticon.com/512/3125/3125815.png"

function App() {
  return (
    <>
      <Test />
      <BallInter />
      {/* <StartComp /> */}
    </>
  )
}

export default App
