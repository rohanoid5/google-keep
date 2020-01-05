import React from 'react';
import Note from './Note';

const Notes = ({ notes, onRemove, onArchive }) => {
  return (
    <div className="notes">
      {notes.map(item => {
        return (
          <Note
            key={item.id}
            className="note"
            note={item}
            onRemove={onRemove}
            onArchive={onArchive}
          />
        );
      })}
    </div>
  );
};

export default Notes;
