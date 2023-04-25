import type { FC } from 'react';
import NewTodoForm from '../../components/NewTodoForm/NewTodoForm';
import ToDoList from '../../components/ToDoList/ToDoList';
import SCToDoPage from './ToDoPage.style';
import { useTranslation } from 'react-i18next';

const ToDoPage: FC = () => {
  const { t } = useTranslation();

  return (
    <SCToDoPage>
      <h1>{t('toDoPage.title')}</h1>

      <NewTodoForm />

      <ToDoList />
    </SCToDoPage>
  );
};

export default ToDoPage;
