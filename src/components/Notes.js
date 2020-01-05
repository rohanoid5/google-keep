import React from 'react';
import Note from './Note';

const Notes = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map(item => {
        return <Note key={item.id} className="note" note={item} />;
      })}
    </div>
  );
};

export default Notes;
