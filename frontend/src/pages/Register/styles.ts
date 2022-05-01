import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;


  form {
    display: flex;
    flex-direction: column;

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
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      max-width: 400px;
    }
  }
`;
