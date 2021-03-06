import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserServices } from '../../services/userService';

import * as Yup from 'yup';

import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';

import { Modal } from '../../components/Modal';

import { FiLogOut } from 'react-icons/fi';

import { Container, BackButton } from './styles';

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
  
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');

  async function onSubmit(data: IRegister) {
    const { email, username, password } = data;
    const { create } = UserServices;

    try {
      const response = await create({email, username, password});

      if (response.message === 'EMAIL_IN_USE') {
        setShowModal(true);
        setTitleModal('E-mail em uso.');
        setDescriptionModal('Já existe um cadastro com este e-mail. Escolha outro para continuar.');
        return;
      }
  
      if (response.message === 'USER_IN_USE') {
        setShowModal(true);
        setTitleModal('Usuário em uso.');
        setDescriptionModal('Já existe um cadastro com este usuário. Escolha outro para continuar.');
        return;
      }

      setShowModal(true);
      setTitleModal(`Parabens ${response.newUser.username}!!!`);
      setDescriptionModal('Seu cadastro foi realizado com sucesso');
      return;

    } catch (error) {
      setShowModal(true);
      setTitleModal(`Ops!!!`);
      setDescriptionModal('Aconteceu um erro não espero, foi culpa do estagiário!');      
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <BackButton to='/'> 
          <FiLogOut size={'1.5rem'} /> 
        </BackButton>

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

      <Modal
        isOpen={showModal}
        title={titleModal}
        description={descriptionModal}
        onRequestClose={() => setShowModal(false)}
      />
    </Container>
  )
}