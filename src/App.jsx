import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';	

import Layout from './Layout/Layout';
import AppRoutes from './routes/Routes';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;