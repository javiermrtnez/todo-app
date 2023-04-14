import styled from 'styled-components';

const SCNewTodoForm = styled.form`
  width: 100%;
  height: 70px;

  padding: 15px 20px;

  display: flex;
  gap: 10px;

  background-color: var(--geist-background);

  border: 1px solid var(--accents-2);
  box-shadow: var(--shadow-small);
  border-radius: 5px;

  > input {
    width: 100%;
    color: var(--geist-foreground);
  }

  > input::placeholder {
    color: var(--accents-4);
  }

  > button {
    padding: 5px;

    > svg {
      color: var(--geist-foreground);
    }
  }
`;

export default SCNewTodoForm;
