import styled, { css } from 'styled-components';

interface InputProps {
  isShowed: boolean;
  isErrord: boolean;
}

export const Container = styled.div`
  & + div {
    margin-top: 1rem;
  }

  span {
    color: var(--red);
  }
`;

export const Content = styled.div<InputProps>`
  position: relative;
  /* max-width: 300px; */

  & + div {
    margin-top: 1rem;
  }
  
  input {
    /* width: 300px; */
    width: 100%;
    padding: 1rem;
    
    border-radius: 6px;
    border: 2px solid var(--gray-300);

    font-weight: bold;
    outline: none;

    transition: all 0.3s;

    ${props =>
      !props.isShowed &&
      css`
        padding-right: 3.5rem;
      `
    }

    ${props =>
      props.isErrord &&
      css`
        border-color: var(--red);
      `
    }
  }

  label {
    padding: 0 5px;

    text-transform: capitalize;
    pointer-events: none;
    position: absolute;

    font-weight: bold;

    top: 50%;
    left: calc(1rem - 5px);

    transform: translateY(-50%);
    background: var(--white);

    transition: all 0.3s;
  }

  input:hover {
    border-color: var(--gray-900);
  }

  input:hover + label {
    color: var(--gray-900);
  }

  input:focus + label, input:not(:placeholder-shown) + label {
    font-size: 12px;
    color: var(--gray-300);
    transform: translateY(-220%);
  }

  button {
    position: absolute;
    border: 0;
    background-color: transparent;

    top: 0;
    right: 0;

    height: 100%;
    width: 3.5rem;
  }
`;