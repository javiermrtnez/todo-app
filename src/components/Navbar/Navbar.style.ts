import styled from 'styled-components';

const SCNavbar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  z-index: 101;
  height: var(--navbar-height);
  background-color: var(--navbar-background-color);
  backdrop-filter: saturate(180%) blur(5px);
  box-shadow: var(--navbar-border-bottom);

  .app-header {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    width: var(--page-width-with-padding);
    margin: auto;
    padding: 0 var(--page-padding);

    .logo-brand-container {
      display: flex;
      align-items: center;
      gap: 6px;

      .logo {
        height: 24px;
        width: 24px;
        background-image: var(--check-background);
        border-radius: 5px;
      }

      .brand {
        font-size: 14px;
      }
    }

    .navbar-buttons-toggle-theme-container {
      display: flex;
      align-items: center;
      gap: 20px;

      li > a,
      > button {
        font-size: 14px;
        height: 32px;
        display: flex;
        align-items: center;
      }

      .theme-language-buttons-container {
        display: flex;
        gap: 5px;
      }
    }

    .navbar-buttons {
      display: flex;
      gap: 10px;
      list-style: none;

      > li {
        display: flex;
      }
    }

    .navigation-button {
      padding: 7px 9px;
      border-radius: 5px;
      transition: color 0.2s ease, background-color 0.2s ease;
      font-weight: 500;
      line-height: 1;

      :hover {
        background-color: var(--accents-2);
        color: var(--geist-foreground);
      }
    }

    .white-black-button {
      background-color: var(--geist-foreground);
      color: var(--geist-background);
      border: 1px solid var(--geist-foreground);
      transition: background-color 0.15s ease, color 0.15s ease;

      :hover {
        background-color: transparent;
        color: var(--geist-foreground);
      }
    }
  }
`;

export default SCNavbar;
