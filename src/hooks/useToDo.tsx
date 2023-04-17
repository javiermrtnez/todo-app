import { useEffect, useState } from 'react';
import { FILTERS } from '../utils/constants/filters';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import {
  ToDoId,
  createToDo,
  deleteToDoById,
  toggleToDoActiveStateById,
} from '../store/toDos/toDos.slice';

const useToDo = () => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.toDos);
  const [filteredToDos, setFilteredToDos] = useState(toDos);
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    if (filter === FILTERS.ACTIVE) {
      setFilteredToDos(toDos.filter((toDo) => toDo.active));
    } else if (filter === FILTERS.COMPLETE) {
      setFilteredToDos(toDos.filter((toDo) => !toDo.active));
    } else {
      setFilteredToDos(toDos);
    }
  }, [toDos, filter]);

  const handleCreateToDo = (e): void => {
    e.preventDefault();

    const newTodoValue = e.target.newToDo.value;

    if (newTodoValue !== '') {
      dispatch(createToDo(newTodoValue.trim()));

      e.target.reset();
    }
  };

  const handleDeleteToDo = (id: ToDoId): void => {
    dispatch(deleteToDoById(id));
  };

  const handleToggleToDoActiveState = (id: ToDoId): void => {
    dispatch(toggleToDoActiveStateById(id));
  };

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter((e.target as HTMLButtonElement).id);
  };

  const toDosLeft = toDos.filter((toDo) => toDo.active).length;

  return {
    filteredToDos,
    filter,
    handleCreateToDo,
    handleDeleteToDo,
    handleToggleToDoActiveState,
    handleFilterButton,
    toDosLeft,
  };
};

export default useToDo;
