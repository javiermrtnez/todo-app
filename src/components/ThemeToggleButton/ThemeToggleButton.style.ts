import styled from 'styled-components';

const SCThemeToggleButton = styled.button`
  padding: 7px;
  border-radius: 5px;
  transition: color 0.2s ease, background-color 0.2s ease;

  height: 32px;
  display: flex;
  align-items: center;

  :hover {
    background-color: var(--accents-2);
  }

  > svg {
    width: 20px;
    height: 20px;
    fill: var(--geist-foreground);
  }
`;

export default SCThemeToggleButton;
