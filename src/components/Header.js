import React from 'react';
import './Header.css';
import FilterContainer from '../containers/FilterContainer';
import ThemeContext from '../contexts/ThemeContext';
import { DARK_THEME } from '../utils/constants';

function Header({ setNavbarCollapse }) {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme, theme }) => (
        <header className="header">
          <div className="navbar-icon">
            <div
              className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
              onClick={setNavbarCollapse}
            >
              <i className="material-icons hamburger">menu</i>
            </div>
            <div className="icon-title">Google Keep</div>
          </div>
          <div className="search-box">
            <FilterContainer />
          </div>
          <div className="action-area">
            <div
              className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
              onClick={toggleTheme}
            >
              <i className="material-icons hamburger">
                {theme === DARK_THEME ? 'wb_sunny' : 'brightness_2'}
              </i>
            </div>
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
