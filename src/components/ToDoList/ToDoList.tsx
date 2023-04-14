import { EMPTY_TODO_FILTERS_TEXT, FILTERS } from '../../utils/constants/filters';
import iconCross from '../../assets/icons/icon-cross.svg';
import SCToDoList from './ToDoList.style';

const ToDoList = ({ toDos, setToDos, filteredToDos, filter, setFilter }) => {
  const handleCheckboxClick = (idToComplete) => {
    setToDos(
      toDos.map((toDo) => (toDo.id === idToComplete ? { ...toDo, active: !toDo.active } : toDo))
    );
  };

  const handleRemoveButton = (idToRemove) => {
    setToDos(toDos.filter((toDo) => toDo.id !== idToRemove));
  };

  const handleFilterButton = (e) => {
    setFilter(e.target.id);
  };

  const itemsLeft = toDos.filter((toDo) => toDo.active).length;

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
                  handleCheckboxClick(id);
                }}
              />

              <span className={`todo-text${!active ? ' completed' : ''}`}>{value}</span>
            </div>

            <button
              className='remove-button'
              onClick={() => {
                handleRemoveButton(id);
              }}
            >
              <img src={iconCross} />
            </button>
          </div>
        ))
      ) : (
        <div className='todo-item'>
          <span className='todo-empty-text'>No to-do items {EMPTY_TODO_FILTERS_TEXT[filter]}!</span>
        </div>
      )}

      <div className='todo-resume-item'>
        <span>{itemsLeft} items left</span>

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
