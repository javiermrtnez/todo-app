import { useEffect, useState } from 'react';
import { FILTERS } from '../utils/constants/filters';
import { useAppDispatch, useAppSelector } from './store';
import {
  ToDoId,
  createToDo,
  deleteToDoById,
  toggleToDoActiveStatusById,
  setToDos,
  resetToDos,
} from '../store/slices/toDos.slice';
import * as toDosService from '../services/toDos.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

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
    dispatch(
      createToDo({
        id: crypto.randomUUID(),
        value: toDoValue,
      })
    );
  };

  const deleteToDo = (id: ToDoId): void => {
    dispatch(deleteToDoById(id));
  };

  const toggleToDoActiveStatus = (id: ToDoId): void => {
    dispatch(toggleToDoActiveStatusById(id));
  };

  const retrieveUserToDos = () => {
    toDosService
      .getUserToDos()
      .then((toDos: QuerySnapshot<DocumentData>) => {
        dispatch(setToDos(toDos));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const resetUserToDos = () => {
    dispatch(resetToDos());
  };

  const toDosLeft = toDos.filter((toDo) => toDo.active).length;

  return {
    filteredToDos,
    filter,
    createNewToDo,
    deleteToDo,
    toggleToDoActiveStatus,
    setFilter,
    toDosLeft,
    retrieveUserToDos,
    resetUserToDos,
  };
};

export default useToDo;
