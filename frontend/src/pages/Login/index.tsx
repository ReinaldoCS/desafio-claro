import { InputForm } from '../../components/InputForm/index';
import { Button } from '../../components/Button';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  height: 100vh;

  h1 {
    margin-bottom: 1rem;
  }
`

export default function Login() {
  return (
    <Container>
      <h1>Hello world!</h1>
      <InputForm type='text' label='E-mail'/>
      <InputForm type='password' label='senha'/>

      <Button title='Continuar'/>
  </Container>
  )
}