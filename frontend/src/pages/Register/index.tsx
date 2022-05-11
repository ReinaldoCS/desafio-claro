import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from '../../services/api'

import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';

import { Container } from './styles';

const schema = Yup.object({
  email: Yup.string().trim().email("E-mail inválido").required("E-mail inválido"),
  username: Yup.string().trim().required("Usuário inválido"),
  password: Yup.string().trim().min(4, "Mínimo 4 caracteres").required("Senha inválido"),
}).required();

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  async function onSubmit(data: IRegister) {

    const { email, username, password } = data;

    axios.post('/user/create', { email, username, password })
    .then((response) => alert("Usuário criado com sucesso!!!"))
    .catch((error) => alert(error.response.data.message));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <header>
          <h1>Cadastro</h1>
          <strong>Cadastro seus dados</strong>
        </header>

        <main>
          <InputForm 
            type='text'
            label='E-mail'
            register={register}
            fieldValidate='email'
            yupError={errors.email?.message}
          />

          <InputForm 
            type='text'
            label='Usuário'
            register={register}
            fieldValidate='username'
            yupError={errors.username?.message}
          />

          <InputForm 
            type='password'
            label='Senha'
            register={register}
            fieldValidate='password'
            yupError={errors.password?.message}
          />
        </main>

        <footer>
          <Button type='submit' title='Cadastrar-se' style={{marginTop: '1.5rem'}}/>
        </footer>
      </form>
    </Container>
  )
}