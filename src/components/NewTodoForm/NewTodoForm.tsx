import SCNewTodoForm from './NewTodoForm.style';
import type { INewTodoFormProps, IToDo } from '../../utils/interfaces/todo.interface';
import type { FC } from 'react';
import { SendIcon } from '../Icons/Icons';

const NewTodoForm: FC<INewTodoFormProps> = ({ toDos, setToDos }: INewTodoFormProps) => {
  const handleOnSubmit = (e): void => {
    e.preventDefault();

    const newTodoValue = e.target.newTodo.value;

    if (newTodoValue !== '') {
      const newTodo: IToDo = {
        id: toDos.length,
        value: newTodoValue.trim(),
        active: true,
      };

      setToDos([newTodo, ...toDos]);

      e.target.reset();
    }
  };

  return (
    <SCNewTodoForm onSubmit={handleOnSubmit}>
      <input placeholder='Create a new todo...' name='newTodo' autoFocus />

      <button type='submit'>
        <SendIcon />
      </button>
    </SCNewTodoForm>
  );
};

export default NewTodoForm;
