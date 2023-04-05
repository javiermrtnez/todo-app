import styled from 'styled-components';

const SCLogInPage = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;

  max-width: 320px;
  width: 100%;

  margin: 0 auto;

  > h1 {
    font-size: 32px;
    font-weight: 700;
    color: var(--white);
  }

  .log-in-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > button {
      height: 50px;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      color: var(--white);
      border-radius: 5px;
      font-weight: 500;

      transition: background-color 350ms ease 0s;
    }

    .google-button {
      background-color: #0052cc;

      :hover {
        background-color: #1668e2;
      }
    }

    .github-button {
      background-color: #24292e;

      :hover {
        background-color: #555;
      }
    }
  }
`;

export default SCLogInPage;
