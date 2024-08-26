import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import './Navbar.css';
import SunSvg from '../../assets/Icons/sun';
import MoonSvg from '../../assets/Icons/moon';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='navbar'>
      <ul className='navbar-ul'>
        <li>
          <h2>SROOM</h2>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='products'>Productos</Link>
        </li>
        <li>
          <Link to="about">Nosotros</Link>
        </li>
        <Outlet />
      </ul>
      <div className='theme-selector'>
        <button onClick={toggleTheme} className='theme-button'>
          {theme === "dark" ? <MoonSvg/> : <SunSvg/> }
        </button>
      </div>
    </div>
  );
};

export default Navbar;