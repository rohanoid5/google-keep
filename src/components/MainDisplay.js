import React, { useState } from 'react';
import './MainDisplay.css';
import NotesContainer from '../containers/NotesContainer';
import ArchivedNotesContainer from '../containers/ArchivedNotesContainer';
import NewNoteContainer from '../containers/NewNoteContainer';

const MainDisplay = ({ selctedIndex }) => {
  const [isFocussed, setFocus] = useState(false);

  const renderContainer = () => {
    switch (selctedIndex) {
      case 0:
        return <NotesContainer />;
      case 1:
        return <ArchivedNotesContainer />;
      default:
        return null;
    }
  };

  return (
    <main
      className="main"
      onClick={() => {
        setFocus(false);
      }}
    >
      <div className="note-add-container">
        <NewNoteContainer isFocussed={isFocussed} setFocus={setFocus} />
      </div>
      <div className="notes-container">{renderContainer()}</div>
    </main>
  );
};

export default MainDisplay;
