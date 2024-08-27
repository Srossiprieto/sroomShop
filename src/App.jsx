import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';	

import Layout from './Layout/Layout';
import Home from './pages/home/home';
import Error from './pages/error/error';
import About from './pages/about/about';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;