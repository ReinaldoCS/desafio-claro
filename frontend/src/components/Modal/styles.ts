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

    max-width: 90%;

    span {
      color: var(--gray-300);
    }
  }
`;

export const X = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;

  width: 2rem;
  height: 2rem;

  text-align: center;
  border: 1px solid var(--gray-300);
  background-color: transparent;

  border-radius: 50%;
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--gray-300);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  
  h1 {
    max-width: 90%;
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;

  justify-content: flex-end;

  button {
    margin-top: 2rem;
    border: 0;
    border-radius: 5rem;

    font-weight: bold;
    color: var(--white);

    padding: 0.75rem 2.5rem;
    background-color: var(--red);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`