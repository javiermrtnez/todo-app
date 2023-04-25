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
import { useTranslation } from 'react-i18next';

const toDosMiddleware: Middleware = (store) => (next) => (action) => {
  // const { t } = useTranslation();
  const { type, payload } = action;
  const previousState = store.getState();

  // Posterior a la actualización de la UI guardaremos en BD y en caso de error hacemos rollback
  next(action);

  switch (type) {
    case createToDo.type: {
      const { id, value } = payload;

      toDosService.createToDo(id, value).catch((e) => {
        store.dispatch(rollbackCreateToDo(id));

        // notificationError(t('notifications.errorCreatingToDo'));
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

        // notificationError(t('notifications.errorDeletingToDo'));
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

          // notificationError(t('notifications.errorChangingStatusToDo'));
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
