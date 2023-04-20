import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Toaster from './components/Toaster/Toaster';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { AuthenticatedRoute, UnauthenticatedRoute } from './guards/AuthGuard';

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Toaster />
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<AuthenticatedRoute />}>
              <Route path='/' element={<ToDoPage />} />
            </Route>

            <Route element={<UnauthenticatedRoute />}>
              <Route path='login' element={<LogInPage />} />
              <Route path='signup' element={<SignUpPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
