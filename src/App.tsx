import { useContext, useState } from 'react';
import './App.css';
import iconMoon from './assets/icons/icon-moon.svg';
import iconSun from './assets/icons/icon-sun.svg';
import { ThemeContext, THEMES } from './context/ThemeContext';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [toDos, setToDos] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newTodoValue = e.target.elements.newTodo.value;

    if (newTodoValue) {
      const newTodo = {
        id: toDos.length,
        value: newTodoValue.trim(),
        active: true,
      };

      setToDos([newTodo, ...toDos]);

      e.target.reset();
    }
  };

  const itemsLeft = toDos.filter((toDo) => toDo.active).length;

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

      {toDos.length > 0 && (
        <div className='todos-container'>
          {toDos.map(({ id, value }) => (
            <div className='todo-item' key={id}>
              <span>{value}</span>
            </div>
          ))}

          <div className='todo-resume-item'>
            <span>{itemsLeft} items left</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
