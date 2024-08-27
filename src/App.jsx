import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';	

import Layout from './Layout/Layout';
import Home from './pages/home/home';
import Error from './pages/error/error';
import About from './pages/about/about';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;