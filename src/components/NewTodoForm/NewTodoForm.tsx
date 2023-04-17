import SCNewTodoForm from './NewTodoForm.style';
import { SendIcon } from '../Icons/Icons';
import useToDo from '../../hooks/useToDo';

const NewTodoForm = () => {
  const { handleCreateToDo } = useToDo();

  return (
    <SCNewTodoForm onSubmit={handleCreateToDo}>
      <input placeholder='Create a new todo...' name='newToDo' autoFocus />

      <button type='submit'>
        <SendIcon />
      </button>
    </SCNewTodoForm>
  );
};

export default NewTodoForm;
