import { EMPTY_TODO_FILTERS_TEXT, FILTERS } from '../../utils/constants/filters';
import SCToDoList from './ToDoList.style';
import useToDo from '../../hooks/useToDo';
import { CrossIcon } from '../Icons/Icons';

const ToDoList = () => {
  const { toDosLeft, filteredToDos, filter, deleteToDo, toggleToDoActiveStatus, setFilter } =
    useToDo();

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter((e.target as HTMLButtonElement).id);
  };

  return (
    <SCToDoList>
      {filteredToDos.length > 0 ? (
        filteredToDos.map(({ id, value, active }) => (
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
          <span className='todo-empty-text'>No to-do items {EMPTY_TODO_FILTERS_TEXT[filter]}!</span>
        </div>
      )}

      <div className='todo-resume-item'>
        <span>{toDosLeft} items left</span>

        <div className='filter-buttons-container'>
          <button
            className={`filter-button${filter === FILTERS.ALL ? ' active' : ''}`}
            id={FILTERS.ALL}
            onClick={handleFilterButton}
          >
            All
          </button>

          <button
            className={`filter-button${filter === FILTERS.ACTIVE ? ' active' : ''}`}
            id={FILTERS.ACTIVE}
            onClick={handleFilterButton}
          >
            Active
          </button>

          <button
            className={`filter-button${filter === FILTERS.COMPLETE ? ' active' : ''}`}
            id={FILTERS.COMPLETE}
            onClick={handleFilterButton}
          >
            Completed
          </button>
        </div>
      </div>
    </SCToDoList>
  );
};

export default ToDoList;
