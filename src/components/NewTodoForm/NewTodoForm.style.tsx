import styled from 'styled-components';

const SCNewTodoForm = styled.form`
  display: flex;
  gap: 10px;

  width: 100%;
  height: 70px;
  background-color: var(--card-background-color);
  border-radius: 5px;
  padding: 15px 20px;

  box-shadow: 0 0 10px #1617221c;

  > input {
    width: 100%;
  }

  > input::placeholder {
    color: var(--input-placeholder-color);
  }

  > button {
    padding: 5px;
    filter: var(--font-color-filter);
  }
`;

export default SCNewTodoForm;
