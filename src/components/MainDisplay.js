import React from 'react';
import './MainDisplay.css';
import './buttons.css';
import NotesContainer from '../containers/NotesContainer';
import NewNoteContainer from '../containers/NewNoteContainer';

const MainDisplay = () => {
  return (
    <main className="main">
      <div className="note-add-container">
        <NewNoteContainer />
      </div>
      <div className="notes-container">
        <NotesContainer />
      </div>
    </main>
  );
};

export default MainDisplay;
