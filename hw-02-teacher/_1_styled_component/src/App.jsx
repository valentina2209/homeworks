import styled from 'styled-components'
import './App.css'

function App() {
  const StyledButton = styled.button`
    background-color: red;
    color: white;
  `
  const StyledButton2 = styled(StyledButton)`
    color: blue;
  `
  return (
    <>
      <StyledButton>Ok</StyledButton>
      <StyledButton2>Ok</StyledButton2>
    </>
  )
}

export default App
