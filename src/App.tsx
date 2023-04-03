import { AuthProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import ToDoPage from './pages/ToDoPage';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <ToDoPage />
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
