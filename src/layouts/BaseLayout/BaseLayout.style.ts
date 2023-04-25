import styled from 'styled-components';

const SCBaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  .base-content {
    width: 100%;
    max-width: var(--page-width-with-padding);
    padding: calc(2 * var(--page-padding)) var(--page-padding);

    display: flex;
    justify-content: center;

    flex: 1;

    > div {
      width: 100%;
    }
  }
`;

export default SCBaseLayout;
