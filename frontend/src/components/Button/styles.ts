import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: bold;

  border: none;
  border-radius: 5rem;

  color: var(--white);
  background-color: var(--red);

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;