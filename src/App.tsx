import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Toaster from './components/Toaster/Toaster';
import AuthGuard from './guards/AuthGuard';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Toaster />
        <Routes>
          <Route element={<BaseLayout />}>
            <Route
              path='/'
              element={
                <AuthGuard>
                  <ToDoPage />
                </AuthGuard>
              }
            />
            <Route path='login' element={<LogInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
