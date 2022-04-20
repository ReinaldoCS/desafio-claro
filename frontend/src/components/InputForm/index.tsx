import { useState } from 'react';
import { ImEyeBlocked, ImEye } from 'react-icons/im';

import { Container } from './styles';

interface InputProps {
  label: string,
  type: 'text' | 'password',
}

export function InputForm({ label, type }: InputProps) {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>

      <input
        type={type === 'text' ? type : showPassword ? 'text' : 'password'}
        autoComplete='off'
        placeholder=' '
        required
        />
      
      <label>{label}</label>
      
      {type === 'password' &&
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <ImEyeBlocked /> : <ImEye />}
        </button>
      }
    </Container>
  )
}