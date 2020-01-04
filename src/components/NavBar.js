import React, { useState } from 'react';
import './NavBar.css';

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

const NavBar = () => {
  const [mainItemIndex, setMainItemIndex] = useState(0);

  const renderListItem = MAIN_LIST.map(({ icon, title }, index) => {
    return (
      <div
        key={title}
        className={
          mainItemIndex === index ? 'list-item list-item-active' : 'list-item'
        }
        onClick={() => setMainItemIndex(index)}
      >
        <i className="material-icons list-icon">{icon}</i>
        <div className="list-title">{title}</div>
      </div>
    );
  });

  return (
    <nav className="navbar">
      {renderListItem}
      <div style={{ backgroundColor: '#BBB', height: '1px' }}></div>
    </nav>
  );
};

export default NavBar;
