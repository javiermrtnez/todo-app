import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SCLogo = styled(Link)`
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
`;

export default SCLogo;
