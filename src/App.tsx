import { useContext, useEffect, useState } from 'react';
import './App.css';
import iconMoon from './assets/icons/icon-moon.svg';
import iconSun from './assets/icons/icon-sun.svg';
import iconCross from './assets/icons/icon-cross.svg';
import iconSend from './assets/icons/icon-send.svg';
import { ThemeContext, THEMES } from './context/ThemeContext';

const FILTERS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETE: 'COMPLETE',
};

const EMPTY_TODO_FILTERS_TEXT = {
  ALL: 'left',
  ACTIVE: 'active',
  COMPLETE: 'completed',
};

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [toDos, setToDos] = useState([]);
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

  const itemsLeft = toDos.filter((toDo) => toDo.active).length;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newTodoValue = e.target.elements.newTodo.value;

    if (newTodoValue !== '') {
      const newTodo = {
        id: toDos.length,
        value: newTodoValue.trim(),
        active: true,
      };

      setToDos([newTodo, ...toDos]);

      e.target.reset();
    }
  };

  const handleCheckboxClick = (idToComplete) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === idToComplete ? { ...todo, active: !todo.active } : todo
      )
    );

    // Esta opción es igual que la anterior pero usando el propio estado en vez del previo estado
    // setToDos((prevTodos) => {
    //   return prevTodos.map((todo) =>
    //     todo.id === idToComplete ? { ...todo, active: !todo.active } : todo
    //   );
    // });
  };

  const handleRemoveButton = (idToRemove) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToRemove));
  };

  const handleFilterButton = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div className='todo-app'>
      <div className='header-container'>
        <h1>TO-DO</h1>

        <button className='toggle-theme-button' onClick={toggleTheme}>
          <img src={theme === THEMES.light ? iconMoon : iconSun}></img>
        </button>
      </div>

      <form className='new-todo-container' onSubmit={handleOnSubmit}>
        <input placeholder='Create a new todo...' name='newTodo' />

        <button className='send-button' type='submit'>
          <img src={iconSend} alt='icon-send' />
        </button>
      </form>

      <div className='todos-container'>
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

                <span className={`todo-text${!active ? ' completed' : ''}`}>
                  {value}
                </span>
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
            <span className='todo-empty-text'>
              No to-do items {EMPTY_TODO_FILTERS_TEXT[filter]}!
            </span>
          </div>
        )}

        <div className='todo-resume-item'>
          <span>{itemsLeft} items left</span>

          <div className='filter-buttons-container'>
            <button
              className={`filter-button${
                filter === FILTERS.ALL ? ' active' : ''
              }`}
              id={FILTERS.ALL}
              onClick={handleFilterButton}
            >
              All
            </button>

            <button
              className={`filter-button${
                filter === FILTERS.ACTIVE ? ' active' : ''
              }`}
              id={FILTERS.ACTIVE}
              onClick={handleFilterButton}
            >
              Active
            </button>

            <button
              className={`filter-button${
                filter === FILTERS.COMPLETE ? ' active' : ''
              }`}
              id={FILTERS.COMPLETE}
              onClick={handleFilterButton}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
