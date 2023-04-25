import styled from 'styled-components';

const SCLanguageSelector = styled.div`
  position: relative;

  .selected {
    background-color: var(--accents-2);
  }

  > button {
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
      color: var(--geist-foreground);
    }
  }

  > ul {
    position: absolute;
    bottom: 36px;
    right: 0;

    z-index: 10;

    width: 192px;
    border: 1px solid var(--accents-2);
    border-radius: 10px;

    padding: 8px;

    background-color: var(--accents-1-transparent);

    > li {
      > button {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        padding: 6px 8px;
        width: 100%;
        border-radius: 5px;

        transition: color 0.2s ease, background-color 0.2s ease;

        :hover {
          background-color: var(--accents-2-transparent);
        }

        .check-container {
          height: 20px;
          width: 15px;

          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export default SCLanguageSelector;
