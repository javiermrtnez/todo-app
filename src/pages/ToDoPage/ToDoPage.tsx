import type { FC } from 'react';
import NewTodoForm from '../../components/NewTodoForm/NewTodoForm';
import ToDoList from '../../components/ToDoList/ToDoList';
import SCToDoPage from './ToDoPage.style';

const ToDoPage: FC = () => {
  return (
    <SCToDoPage>
      <h1>My ToDos</h1>
      <NewTodoForm />
      <ToDoList />
    </SCToDoPage>
  );
};

export default ToDoPage;
