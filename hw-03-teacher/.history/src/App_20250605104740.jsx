import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Template project</h1>
        <div>
          {[
            <h1 key={1}>Item 1</h1>,
            <h1 key={2}>Item 2</h1>,
            <h1 key={2}>Item 3</h1>,
          ]}
        </div>
      </div>
    </>
  )
}

export default App
