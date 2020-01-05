import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note">
      <div className="note-inner">
        <div className="note-title">This is the Title</div>
        <div className="note-content">This is the Content</div>
        <div className="note-actions">This is the Icon Area</div>
      </div>
    </div>
  );
};

export default Note;
