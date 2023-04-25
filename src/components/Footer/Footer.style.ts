import styled from 'styled-components';

const SCFooter = styled.footer`
  width: 100%;
  height: 100%;

  background: var(--geist-background);
  border-top: 1px solid var(--accents-2);

  .logo-theme-language-container {
    display: flex;
    justify-content: space-between;

    max-width: var(--page-width-with-padding);
    margin: auto;
    padding: calc(1.5 * var(--page-padding)) var(--page-padding);

    .theme-language-buttons-container {
      display: flex;
      gap: 5px;
      font-size: 14px;
    }
  }
`;

export default SCFooter;
