import  { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import './Navbar.css';
import SunSvg from '../../assets/sun';
import MoonSvg from '../../assets/moon';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleThemeChange = (newTheme) => {
    if (theme !== newTheme) {
      toggleTheme();
    }
    setDropdownOpen(false);
  };

  return (
    <div className='navbar'>
      <ul className='navbar-ul'>
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
        <button onClick={handleDropdownToggle} className='theme-button'>
          {theme === "dark" ? <MoonSvg/> : <SunSvg/> }
        </button>
        {dropdownOpen && (
          <div className='dropdown-menu'>
            <button onClick={() => handleThemeChange("light")} className='dropdown-item'>
              <SunSvg/> 
            </button>
            <button onClick={() => handleThemeChange("dark")} className='dropdown-item'>
              <MoonSvg/> 
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;