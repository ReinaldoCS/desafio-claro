import { Content, Header, Footer, X } from './styles';

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
        <X type="button" onClick={ onRequestClose }>X</X>
        <Header>
          <h1>{ title }</h1>
        </Header>
        <span>{ description }</span>

        <Footer>
          <button type="button" onClick={ onRequestClose }>Voltar</button>
        </Footer>
      </div>
    </Content>
  )
}