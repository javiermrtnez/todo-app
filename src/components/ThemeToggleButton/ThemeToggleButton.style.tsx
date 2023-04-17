import styled from 'styled-components';

const SCThemeToggleButton = styled.button`
  padding: 7px 9px;
  border-radius: 50vh;
  transition: color 0.2s ease, background-color 0.2s ease;
  font-weight: 500;
  line-height: 1;

  :hover {
    background-color: rgba(208, 215, 222, 0.32);
    /* color: var(--geist-foreground); */
  }

  > svg {
    width: 20px;
    height: 20px;

    fill: var(--geist-foreground);
  }
`;

export default SCThemeToggleButton;
