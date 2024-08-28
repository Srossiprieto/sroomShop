import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

import styles from './Navbar.module.css';

import SunSvg from '../../assets/Icons/sun';
import MoonSvg from '../../assets/Icons/moon';
import ShopSvg from '../../assets/Icons/shop';

import Search from '../Search/Search';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarUl}>
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
            <Link to='about'>Nosotros</Link>
          </li>
          <Outlet />
        </ul>
        <div className={styles.themeSelector}>
          <Search />
          <div className={styles.shopContainer}>
            <ShopSvg />
          </div>
          <button 
            onClick={toggleTheme} 
            className={styles.themeButton} 
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
            {theme === 'dark' ? <MoonSvg /> : <SunSvg />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;