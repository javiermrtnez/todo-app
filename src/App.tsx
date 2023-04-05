import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path='/' element={<ToDoPage />} />
            <Route path='login' element={<LogInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='*' element={<div>¡¡404 NOT FOUND!!</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
