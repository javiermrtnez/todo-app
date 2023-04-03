import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import ToDoPage from './pages/ToDoPage';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ToDoPage />} />
        </Routes>
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
