
import './App.css'
import CalkCounter from './components/Task-01/Task-01'
import TempSwitch from './components/Task-02/Task-02'
import SpeedChecker from './components/Task-03/Task-03'
import SingleSapper from './components/Task-04/Task-04'
import Sportsman from './components/Task-05/Task-05'
import CouplesForDancing from './components/Task-06/Task-06'
import DynamicSearch from './components/Task-07/Task-07'


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
        <CouplesForDancing />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №7</h2>
        <DynamicSearch />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №8</h2>
        <TempSwitch />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №9</h2>
        <SpeedChecker />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №10</h2>
        <SingleSapper />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №11</h2>
        <Sportsman />

      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №12</h2>
        <CouplesForDancing />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №13</h2>
        <TempSwitch />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №14</h2>
        <SpeedChecker />
      </div>
    </div>
  )
}

export default App
