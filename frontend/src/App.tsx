import { InputForm } from './components/InputForm/index';

import styled from 'styled-components';

import GlobalStyle from './global.css';


const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  height: 100vh;

  h1 {
    margin-bottom: 1rem;
  }
`

export function App() {
  return (
    <Container>
      <h1>Hello world!</h1>
      <InputForm type='text' label='login'/>
      <InputForm type='password' label='senha'/>
      <GlobalStyle />
    </Container>
  );
}

