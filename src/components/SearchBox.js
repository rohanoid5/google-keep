import React, { useRef, useEffect, useState } from 'react';
import localforage from 'localforage';
import './SearchBox.css';
import ThemeContext from '../contexts/ThemeContext';
import { DARK_THEME } from '../utils/constants';

const SearchBox = ({ updateFilter, value }) => {
  const searchInput = useRef(null);
  const [filterValue, setFilterValue] = useState(value);

  const handleFilterChange = e => {
    setFilterValue(e.currentTarget.value);
  };

  useEffect(() => {
    localforage.getItem('filter', filterValue).then(res => {
      if (res) {
        setFilterValue(res);
        updateFilter(res);
      }
    });
  }, []);

  useEffect(() => {
    updateFilter(filterValue);
    localforage.setItem('filter', filterValue);
  }, [filterValue, updateFilter]);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          className={
            theme === DARK_THEME
              ? 'search-component search-component-dark'
              : 'search-component search-component-light'
          }
        >
          <i
            className={
              theme === DARK_THEME
                ? 'icon material-icons search-icon'
                : 'icon icon-light material-icons search-icon'
            }
            onClick={() => searchInput.current.focus()}
          >
            search
          </i>
          <input
            ref={searchInput}
            placeholder="Search"
            className={
              theme === DARK_THEME
                ? 'search-input'
                : 'search-input search-input-light'
            }
            type="text"
            onChange={handleFilterChange}
            value={filterValue}
          />
          <i
            className={
              theme === DARK_THEME
                ? 'icon material-icons search-icon'
                : 'icon icon-light material-icons search-icon'
            }
            onClick={() => {
              updateFilter('');
              setFilterValue('');
            }}
          >
            close
          </i>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default SearchBox;
