import './App.css'
import SimpleSaper from './components/SimpleSaper'
import SimpleSaperReact from './components/SimpleSaperReact'
import TestSm from './components/TestSm'

function App() {
  const gameField = [
    {
      id: 1,
      hasMine: 0,
    },
    {
      id: 2,
      hasMine: 0,
    },
    {
      id: 3,
      hasMine: 1,
    },
    {
      id: 4,
      hasMine: 0,
    },
    {
      id: 5,
      hasMine: 1,
    },
    {
      id: 6,
      hasMine: 0,
    },
  ]
  return (
    <>
      <SimpleSaperReact initGameField={gameField} />
    </>
  )
}

export default App
