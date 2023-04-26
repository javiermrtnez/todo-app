import { useMemo, useState } from 'react';
import { FILTERS } from '../utils/constants/filters';
import { useAppDispatch, useAppSelector } from './store';
import {
  createToDo,
  deleteToDoById,
  toggleToDoActiveStatusById,
  setToDos,
  resetToDos,
} from '../store/slices/toDos.slice';
import * as toDosService from '../services/toDos.service';
import { DocumentData, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { ToDoId } from '../utils/interfaces/todo.interface';

const useToDo = () => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.toDos);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredToDos = useMemo(() => {
    if (filter === FILTERS.ACTIVE) {
      return toDos.filter((toDo) => toDo.active);
    } else if (filter === FILTERS.COMPLETE) {
      return toDos.filter((toDo) => !toDo.active);
    } else {
      return toDos;
    }
  }, [toDos, filter]);

  const sortedToDos = useMemo(
    () => [...filteredToDos].sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis()),
    [filteredToDos]
  );

  const toDosLeft = useMemo(() => toDos.filter((toDo) => toDo.active).length, [toDos]);

  const createNewToDo = (value: string) => {
    dispatch(
      createToDo({
        id: crypto.randomUUID(),
        value,
        active: true,
        createdAt: Timestamp.now(),
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

  return {
    sortedToDos,
    toDosLeft,
    filter,
    createNewToDo,
    deleteToDo,
    toggleToDoActiveStatus,
    setFilter,
    retrieveUserToDos,
    resetUserToDos,
  };
};

export default useToDo;
