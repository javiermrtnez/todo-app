import { Middleware } from '@reduxjs/toolkit';
import * as toDosService from '../../services/toDos.service';
import {
  ToDo,
  createToDo,
  deleteToDoById,
  rollbackCreateToDo,
  rollbackDeleteToDoById,
  rollbackToggleToDoActiveStatusById,
  toggleToDoActiveStatusById,
} from '../slices/toDos.slice';
import { notificationError } from '../../utils/functions/notifications';

const toDosMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const previousState = store.getState();

  // Posterior a la actualización de la UI guardaremos en BD y en caso de error hacemos rollback
  next(action);

  switch (type) {
    case createToDo.type: {
      const { id, value } = payload;

      toDosService.createToDo(id, value).catch((e) => {
        store.dispatch(rollbackCreateToDo(id));

        notificationError('Oops! There was an error creating the ToDo. Please, try again later.');
      });

      break;
    }
    case deleteToDoById.type: {
      const toDoIdToRemove = payload;
      const toDoToRemove = previousState.toDos.find((toDo: ToDo) => toDo.id === toDoIdToRemove);

      toDosService.deleteToDo(toDoIdToRemove).catch((e) => {
        if (toDoToRemove) {
          store.dispatch(rollbackDeleteToDoById(toDoToRemove));
        }

        notificationError('Oops! There was an error deleting the ToDo. Please, try again later.');
      });
      break;
    }
    case toggleToDoActiveStatusById.type: {
      const toDoIdToToggle = payload;
      const toDoToToggle = previousState.toDos.find((toDo: ToDo) => toDo.id === toDoIdToToggle);

      toDosService
        .toggleToDoActiveStatus(toDoIdToToggle)
        .then(() => {})
        .catch((e) => {
          store.dispatch(rollbackToggleToDoActiveStatusById(toDoToToggle));

          notificationError(
            'Oops! There was an error changing ToDo status. Please, try again later.'
          );
        });

      break;
    }
    default:
      break;
  }

  // FASE 2
  // console.log(store.getState());
};

export default toDosMiddleware;
