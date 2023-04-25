import styled from 'styled-components';

const SCLogInPage = styled.div`
  max-width: 460px;

  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
  }

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;

    > button {
      height: 50px;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--geist-foreground);

      color: var(--geist-background);
      /* font-size: 14px; */
      border: 1px solid var(--geist-foreground);
      border-radius: 5px;
      font-weight: 500;

      transition: background-color 0.15s ease, color 0.15s ease;

      :hover {
        background-color: transparent;
        color: var(--geist-foreground);
      }
    }
  }
`;

export default SCLogInPage;
