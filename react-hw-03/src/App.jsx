
import './App.css'
import CalkCounter from './components/Task-01/Task-01'
import TempSwitch from './components/Task-02/Task-02'
import SpeedChecker from './components/Task-03/Task-03'
import SingleSapper from './components/Task-04/Task-04'
import Sportsman from './components/Task-05/Task-05'


function App() {


  return (
    <div className="appWrapper">
      <div className="block">
        <h2 className="taskTitle">Задача №1</h2>
        <CalkCounter />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №2</h2>
        <TempSwitch />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №3</h2>
        <SpeedChecker />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №4</h2>
        <SingleSapper />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №5</h2>
        <Sportsman />

      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №6</h2>

      </div>
    </div>
  )
}

export default App
