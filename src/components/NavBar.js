import React from 'react';
import './NavBar.css';
import { LIGHT_THEME } from '../constants/ThemeConstants';

const MAIN_LIST = [
  {
    title: 'Notes',
    icon: 'note'
  },
  {
    title: 'Archive',
    icon: 'archive'
  }
];

const NavBar = ({
  isNavbarCollapased,
  selctedIndex,
  setSelectedIndex,
  theme
}) => {
  const renderListItem = MAIN_LIST.map(({ icon, title }, index) => {
    return (
      <div
        key={title}
        className={
          selctedIndex === index ? 'list-item list-item-active' : 'list-item'
        }
        onClick={() => setSelectedIndex(index)}
      >
        <i className="material-icons list-icon">{icon}</i>
        <div className="list-title">{title}</div>
      </div>
    );
  });

  let className = '';
  if (isNavbarCollapased) {
    className = 'navbar navbar-hidden';
  } else {
    className = 'navbar';
  }

  if (theme === LIGHT_THEME) {
    className += ' navbar-light';
  }

  return (
    <nav className={className}>
      {renderListItem}
      <div style={{ backgroundColor: '#BBB', height: '1px' }}></div>
    </nav>
  );
};

export default NavBar;
