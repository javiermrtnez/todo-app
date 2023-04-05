import type { FC } from 'react';
import Header from '../../components/Header/Header';
import NewTodoForm from '../../components/NewTodoForm/NewTodoForm';
import ToDos from '../../components/ToDos/ToDos';
import useToDo from '../../hooks/useToDo';
import SCToDoPage from './ToDoPage.style';

const ToDoPage: FC = () => {
  const { toDos, setToDos, filteredToDos, filter, setFilter } = useToDo();

  return (
    <SCToDoPage>
      <Header />

      <NewTodoForm toDos={toDos} setToDos={setToDos} />

      <ToDos
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
