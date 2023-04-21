import styled from 'styled-components';

const SCInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    color: var(--accents-4);
    font-size: 14px;
  }

  > input {
    border: 1px solid var(--accents-2);
    border-radius: 5px;
    padding: 0 12px;
    height: 40px;
    color: var(--geist-foreground);

    font-size: 16px;

    transition: border-color 0.15s ease;

    :focus {
      border-color: var(--accents-5);
    }
  }
`;

export default SCInput;
