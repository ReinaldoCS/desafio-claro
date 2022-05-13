import styled from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
}


export const Content = styled(ReactModal)<ModalProps>`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;

    button {
      position: absolute;
      right: 2rem;
      top: 2rem;

      width: 2rem;
      height: 2rem;

      text-align: center;
      border: 1px solid var(--gray-300);
      background-color: transparent;

      border-radius: 50%;
    }

    header {
      border-bottom: 1px solid var(--gray-300);
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      
      h1 {
        max-width: 90%;
        font-size: 1.5rem;
        font-weight: normal;
      }
    }

    span {
      color: var(--gray-300);
    }
  }
`;