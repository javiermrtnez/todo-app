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

  a,
  button {
    font-size: 14px;
  }

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
        font-weight: var(--font-weight-bold);
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

    .navigation-button,
    button {
      padding: 7px 9px;
      border-radius: 6px;
      transition: color 0.2s ease, background-color 0.2s ease;
      font-weight: 500;
      line-height: 1;

      :hover {
        background-color: rgba(208, 215, 222, 0.32);
      }
    }

    > button {
      background-color: var(--red);
      color: white;

      :hover {
        background-color: #d05865;
        color: white;
      }
    }
  }
`;

export default SCNavbar;
