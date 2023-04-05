import styled from 'styled-components';

const SCBaseLayout = styled.div`
  .base-content {
    max-width: var(--page-width-with-padding);
    padding: calc(2 * var(--page-padding)) var(--page-padding);
    margin: 0 auto;
  }
`;

export default SCBaseLayout;
