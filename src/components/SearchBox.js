import React, { useState } from 'react';
import './SearchBox.css';

import FilterContainer from '../containers/FilterContainer';

const SearchBox = ({ suggestions }) => {
  const [state, setState] = useState({
    // The active selection's index
    activeSuggestion: 0,
    // The suggestions that match the user's input
    filteredSuggestions: [],
    // Whether or not the suggestion list is shown
    showSuggestions: false,
    // What the user has entered
    userInput: ''
  });

  const displaySuggestions = notes => {
    // console.log(notes);
  };

  const onChange = e => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  const onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  let {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput
  } = state;

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul class="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = 'suggestion-active';
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div class="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <FilterContainer>
      {filterProps => (
        <div className="search-component">
          <i className="material-icons search-icon">search</i>
          <input
            placeholder="Search"
            className="search-input"
            type="text"
            onChange={e => filterProps.updateFilter(e.currentTarget.value)}
            // onKeyDown={onKeyDown}
            value={filterProps.value}
          />
          <div>{displaySuggestions(filterProps.notes)}</div>
          <i className="material-icons search-icon">close</i>
        </div>
      )}
    </FilterContainer>
  );
};

export default SearchBox;
