import './App.css'
import QueuePresentor from './components/QueuePresentor'
import ChargeIndicator from './components/ChargeIndicator/ChargeIndicator'

function App() {
  return (
    <>
      <ChargeIndicator />
      <hr />
      <QueuePresentor />
    </>
  )
}

export default App
