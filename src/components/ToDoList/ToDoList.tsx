import { FILTERS } from '../../utils/constants/filters';
import SCToDoList from './ToDoList.style';
import useToDo from '../../hooks/useToDo';
import { CrossIcon } from '../Icons/Icons';
import { useTranslation } from 'react-i18next';

const ToDoList = () => {
  const { t } = useTranslation();
  const { toDosLeft, sortedToDos, filter, deleteToDo, toggleToDoActiveStatus, setFilter } =
    useToDo();

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter((e.target as HTMLButtonElement).id);
  };

  const EMPTY_TODO_FILTERS_TEXT = {
    [FILTERS.ALL]: t('toDoPage.noToDoItems.left'),
    [FILTERS.ACTIVE]: t('toDoPage.noToDoItems.active'),
    [FILTERS.COMPLETE]: t('toDoPage.noToDoItems.completed'),
  };

  return (
    <SCToDoList>
      {sortedToDos.length > 0 ? (
        sortedToDos.map(({ id, value, active }) => (
          <div className='todo-item' key={id}>
            <div className='checkbox-text-container'>
              <input
                checked={!active}
                type='checkbox'
                onChange={() => {
                  toggleToDoActiveStatus(id);
                }}
              />

              <span className={`todo-text${!active ? ' completed' : ''}`}>{value}</span>
            </div>

            <button
              className='remove-button'
              onClick={() => {
                deleteToDo(id);
              }}
            >
              <CrossIcon />
            </button>
          </div>
        ))
      ) : (
        <div className='todo-item'>
          <span className='todo-empty-text'>{EMPTY_TODO_FILTERS_TEXT[filter]}</span>
        </div>
      )}

      <div className='todo-resume-item'>
        <span>
          {t('toDoPage.itemsLeft', {
            numItemsLeft: toDosLeft,
          })}
        </span>

        <div className='filter-buttons-container'>
          <button
            className={`filter-button${filter === FILTERS.ALL ? ' active' : ''}`}
            id={FILTERS.ALL}
            onClick={handleFilterButton}
          >
            {t('toDoPage.filters.all')}
          </button>

          <button
            className={`filter-button${filter === FILTERS.ACTIVE ? ' active' : ''}`}
            id={FILTERS.ACTIVE}
            onClick={handleFilterButton}
          >
            {t('toDoPage.filters.active')}
          </button>

          <button
            className={`filter-button${filter === FILTERS.COMPLETE ? ' active' : ''}`}
            id={FILTERS.COMPLETE}
            onClick={handleFilterButton}
          >
            {t('toDoPage.filters.completed')}
          </button>
        </div>
      </div>
    </SCToDoList>
  );
};

export default ToDoList;
