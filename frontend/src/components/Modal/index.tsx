import { Content } from './styles';

interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  description: string;
}

export function Modal({ isOpen, onRequestClose, title, description }:ModalProps) {
  return (
    <Content 
      isOpen={ isOpen }
      onRequestClose={ onRequestClose }
    >
      <div>
        <button type="button" onClick={ onRequestClose }>X</button>
        <header>
          <h1>{ title }</h1>
        </header>
        <span>{ description }</span>
      </div>
    </Content>
  )
}