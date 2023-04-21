import styled from 'styled-components';

const SCGoogleButton = styled.button`
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

  background-color: #0052cc;

  :hover {
    background-color: #1668e2;
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export default SCGoogleButton;
