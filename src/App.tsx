import { useContext, useState } from 'react';
import './App.css';
import iconMoon from './assets/icons/icon-moon.svg';
import iconSun from './assets/icons/icon-sun.svg';
import iconCross from './assets/icons/icon-cross.svg';
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

  const handleCheckboxClick = (idToComplete) => {
    setToDos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === idToComplete ? { ...todo, active: !todo.active } : todo
      );
    });

    // Esta opción es igual que la anterior pero usando el propio estado en vez del previo estado
    // setToDos(
    //   toDos.map((todo) =>
    //     todo.id === id ? { ...todo, active: !todo.active } : todo
    //   )
    // );
  };

  const handleRemoveButton = (idToRemove) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToRemove));
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
        {toDos.length > 0 ? (
          toDos.map(({ id, value, active }) => (
            <div className='todo-item' key={id}>
              <div className='checkbox-text-container'>
                <input
                  type='checkbox'
                  onClick={() => {
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
            <span className='todo-empty-text'>No todo items left!</span>
          </div>
        )}

        <div className='todo-resume-item'>
          <span>{itemsLeft} items left</span>
        </div>
      </div>
    </div>
  );
};

export default App;
