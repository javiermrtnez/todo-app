import SCNewTodoForm from './NewTodoForm.style';
import iconSend from '../../assets/icons/icon-send.svg';
import type { INewTodoFormProps, IToDo } from '../../utils/interfaces/todo.interface';
import type { FC } from 'react';

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
        <img src={iconSend} alt='icon-send' />
      </button>
    </SCNewTodoForm>
  );
};

export default NewTodoForm;
