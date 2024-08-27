
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import Error from '../pages/error/error';
import About from '../pages/about/about';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;