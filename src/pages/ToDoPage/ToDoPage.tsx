import type { FC } from 'react';
import NewTodoForm from '../../components/NewTodoForm/NewTodoForm';
import ToDoList from '../../components/ToDoList/ToDoList';
import useToDo from '../../hooks/useToDo';
import SCToDoPage from './ToDoPage.style';

const ToDoPage: FC = () => {
  const { toDos, setToDos, filteredToDos, filter, setFilter } = useToDo();

  return (
    <SCToDoPage>
      <h1>My ToDos</h1>

      <NewTodoForm toDos={toDos} setToDos={setToDos} />

      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
        filter={filter}
        setFilter={setFilter}
      />
    </SCToDoPage>
  );
};

export default ToDoPage;
