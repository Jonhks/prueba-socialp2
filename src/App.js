import SimpleContainer from './components/SimpleContainer'
import styled from 'styled-components'



function App() {
  return (
    <DivStyled>
      <SimpleContainer />
    </DivStyled>
  );
}

const DivStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
