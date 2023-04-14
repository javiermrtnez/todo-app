import styled from 'styled-components';

const SCGitHubButton = styled.button`
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

  background-color: #24292e;

  :hover {
    background-color: #555;
  }
`;

export default SCGitHubButton;
