import { useContext, useState } from 'react';
import './App.css';
import iconMoon from './assets/icons/icon-moon.svg';
import iconSun from './assets/icons/icon-sun.svg';
import { ThemeContext, THEMES } from './context/ThemeContext';

const TODO_STATUS = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
};

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [allTodos, setAllTodos] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newTodoValue = e.target.elements.newTodo.value;

    if (newTodoValue) {
      setAllTodos([
        ...allTodos,
        {
          id: allTodos.length,
          value: newTodoValue,
          status: TODO_STATUS.ACTIVE,
        },
      ]);

      e.target.reset();
    }
  };

  return (
    <div className='todo-app'>
      <div className='header-container'>
        <h1>TODO</h1>

        <button className='toggle-theme-button' onClick={toggleTheme}>
          <img src={theme === THEMES.light ? iconMoon : iconSun}></img>
        </button>
      </div>

      <form className='new-todo-container' onSubmit={handleOnSubmit}>
        <input placeholder='Create a new todo...' name='newTodo' />
      </form>

      <div className='todos-container'>
        {allTodos.length !== 0 &&
          allTodos.map(({ id, value }) => {
            return <div key={id}>{value}</div>;
          })}
      </div>
    </div>
  );
};

export default App;
