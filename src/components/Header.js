import React from 'react';
import './Header.css';
import SearchBox from './SearchBox';

function Header({ setNavbarCollapse }) {
  return (
    <header className="header">
      <div className="navbar-icon">
        <div className="icon" onClick={setNavbarCollapse}>
          <i className="material-icons hamburger">menu</i>
        </div>
        <div className="icon-title">Google Keep</div>
      </div>
      <div className="search-box">
        <SearchBox
          suggestions={[
            'Alligator',
            'Bask',
            'Crocodilian',
            'Death Roll',
            'Eggs',
            'Jaws',
            'Reptile',
            'Solitary',
            'Tail',
            'Wetlands'
          ]}
        />
      </div>
      <div className="action-area">Action Area</div>
    </header>
  );
}

export default Header;
