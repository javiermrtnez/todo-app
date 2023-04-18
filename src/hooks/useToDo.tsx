import { useEffect, useState } from 'react';
import { FILTERS } from '../utils/constants/filters';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import {
  ToDoId,
  createToDo,
  deleteToDoById,
  toggleToDoActiveStatusById,
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

  const createNewToDo = (toDoValue: string) => {
    dispatch(createToDo(toDoValue));
  };

  const deleteToDo = (id: ToDoId): void => {
    dispatch(deleteToDoById(id));
  };

  const toggleToDoActiveState = (id: ToDoId): void => {
    dispatch(toggleToDoActiveStatusById(id));
  };

  const toDosLeft = toDos.filter((toDo) => toDo.active).length;

  return {
    filteredToDos,
    filter,
    createNewToDo,
    deleteToDo,
    toggleToDoActiveState,
    setFilter,
    toDosLeft,
  };
};

export default useToDo;
