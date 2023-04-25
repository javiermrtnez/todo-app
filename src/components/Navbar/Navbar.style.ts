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

    .desktop-navbar-container {
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

      :hover {
        background-color: transparent;
        color: var(--geist-foreground);
      }
    }

    .grey-white-button {
      background-color: var(--geist-background);
      border: 1px solid var(--accents-5);
      color: var(--accents-5);

      :hover {
        background-color: transparent;
        color: var(--geist-foreground);
        border-color: var(--geist-foreground);
      }
    }

    /* .mobile-navbar-container {
      display: none;

      .hamburguer-button {
        width: 24px;
        height: 40px;

        transition: transform 0.15s ease;

        .hamburguer-icon {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          pointer-events: none;
          justify-content: center;
          align-items: center;

          ::before,
          ::after {
            content: '';
            display: block;
            height: 1px;
            width: 22px;
            background-color: var(--geist-foreground);
            transition: transform 0.15s ease;
          }

          ::before {
            transform: translateY(-4px) rotate(0deg);
          }

          ::after {
            transform: translateY(4px) rotate(0deg);
          }
        }

        .mobile-menu-open {
          ::before {
            transform: translateY(1px) rotate(45deg);
          }

          ::after {
            transform: translateY(0) rotate(-45deg);
          }
        }
      }

      .mobile-menu {
        display: block;
        height: calc(100vh - var(--navbar-height));
        width: 100%;
        max-width: 100vw;
        padding: 0 24px 24px 24px;
        background: var(--geist-background);
        z-index: 2000;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: var(--navbar-height);
        overflow-y: scroll;
      }
    } */
  }

  /* @media screen and (max-width: 600px) {
    .app-header {
      .desktop-navbar-container {
        display: none;
      }

      .mobile-navbar-container {
        display: block;
      }
    }
  } */
`;

export default SCNavbar;
