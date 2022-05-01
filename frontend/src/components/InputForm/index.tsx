import { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { ImEyeBlocked, ImEye } from 'react-icons/im';

import { Container, Content } from './styles';

interface InputProps {
  label: string,
  type: 'text' | 'password',
  fieldValidate: Path<IRegister>,
  register: UseFormRegister<IRegister>,
  yupError: string | undefined,
}

export function InputForm({ 
  label,
  type,
  fieldValidate,
  register,
  yupError
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>
      <Content 
        isShowed={ type !== 'password' }
        isErrord={ yupError ? true : false }
      >
        <input
          type={type === 'text' ? type : showPassword ? 'text' : 'password'}
          autoComplete='off'
          placeholder=' '
          {...register(fieldValidate)}
          required
        />
        
        <label>{label}</label>
        
        {type === 'password' &&
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ImEyeBlocked /> : <ImEye />}
          </button>
        }
      </Content>
      <span>{ yupError }</span>
    </Container>
  )
}