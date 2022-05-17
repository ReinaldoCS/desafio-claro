import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;


  form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 8px;
    
    background-color: var(--black);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    width: 90%;

    header {
      margin-bottom: 1.5rem;
      
      strong {
        line-height: 2rem;
        color: var(--gray-300);
      }
    }

  }

  @media screen and (min-width: 575px) {

    form {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      max-width: 400px;
    }
  }
`;

export const BackButton = styled(Link)`
  /* height: 2rem; */
  /* width: 2rem; */
  position: absolute;

  transform: scaleX(-1);

  top: 2.5rem;
  right: 2rem;

  color: var(--gray-300);
`
