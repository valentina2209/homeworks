import './App.css'
import LoginCheck from './components/Task-01/Task-01'
import TicketClass from './components/Task-02/Task-02'
import EnglishTrainer from './components/Task-03/Task-03'
import WorksList from './components/Task-04/WorksList'
import SearchResults from './components/Task-05/SearchResults'
import KitchenManager from './components/Task-06/Task-06'

function App() {
  return (
    <div className="appWrapper">
      <div className="block">
        <h2 className="taskTitle">Задача №1</h2>
        <LoginCheck />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №2</h2>
        <TicketClass />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №3</h2>
        <EnglishTrainer />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №4</h2>
        <WorksList />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №5</h2>
        <SearchResults />
      </div>
      <div className="block">
        <h2 className="taskTitle">Задача №6</h2>
        <KitchenManager />
      </div>
    </div>
  )
}

export default App
