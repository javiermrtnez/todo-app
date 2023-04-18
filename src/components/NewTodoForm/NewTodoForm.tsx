import SCNewTodoForm from './NewTodoForm.style';
import { SendIcon } from '../Icons/Icons';
import useToDo from '../../hooks/useToDo';

const NewTodoForm = () => {
  const { createNewToDo } = useToDo();

  const handleCreateToDo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const newToDo = formData.get('newToDo') as string;

    if (newToDo !== '') {
      createNewToDo(newToDo);
      event.target.reset();
    }
  };

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
