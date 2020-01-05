import React from 'react';
import './MainDisplay.css';
import NotesContainer from '../containers/NotesContainer';
import ArchivedNotesContainer from '../containers/ArchivedNotesContainer';
import NewNoteContainer from '../containers/NewNoteContainer';

const MainDisplay = ({ selctedIndex }) => {
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
    <main className="main">
      <div className="note-add-container">
        <NewNoteContainer />
      </div>
      <div className="notes-container">{renderContainer()}</div>
    </main>
  );
};

export default MainDisplay;
