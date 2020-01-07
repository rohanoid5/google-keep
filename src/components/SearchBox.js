import React, { useRef, useEffect, useState } from 'react';
import localforage from 'localforage';
import './SearchBox.css';

const SearchBox = ({ updateFilter, value }) => {
  const searchInput = useRef(null);
  const [filterValue, setFilterValue] = useState(value);

  const handleFilterChange = e => {
    updateFilter(e.currentTarget.value);
    setFilterValue(e.currentTarget.value);
  };

  useEffect(() => {
    localforage.getItem('filter', filterValue).then(res => {
      setFilterValue(res);
      updateFilter(res);
    });
  }, []);

  useEffect(() => {
    localforage.setItem('filter', filterValue);
  }, [filterValue]);

  return (
    <div className="search-component search-component-dark">
      <i
        className="icon material-icons search-icon"
        onClick={() => searchInput.current.focus()}
      >
        search
      </i>
      <input
        ref={searchInput}
        placeholder="Search"
        className="search-input"
        type="text"
        onChange={handleFilterChange}
        value={filterValue}
      />
      <i
        className="icon material-icons search-icon"
        onClick={() => {
          updateFilter('');
          setFilterValue('');
        }}
      >
        close
      </i>
    </div>
  );
};

export default SearchBox;
