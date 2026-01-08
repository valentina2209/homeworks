import './App.css'
import Calculator from './components/Calculator/Calculator'
import DataGrid from './components/DataGrid/DataGrid'
import Search from './components/Debounce/Search'
import BrowserSize from './components/WindowSize/BrowserSize'

function App() {
  return (
    <>
      <Calculator />
      <BrowserSize />
      <Search />
      <DataGrid />
    </>
  )
}

export default App
