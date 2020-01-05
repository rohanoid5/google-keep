import React, { useState } from 'react';

const Note = ({ note, onRemove, onArchive }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="note">
      <div
        className="note-inner"
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <div className="note-title">{note.title}</div>
        <div className="note-content">{note.body}</div>
        <div className="note-actions">
          {showActions && (
            <div className="note-action icon">
              <i
                className={
                  note.isArchived
                    ? 'material-icons md-18'
                    : 'material-icons-outlined  md-18'
                }
                onClick={() => onArchive(note)}
              >
                archive
              </i>
            </div>
          )}
          {showActions && (
            <div className="note-action icon">
              <i className="material-icons md-18">add_photo_alternate</i>
            </div>
          )}
          {showActions && (
            <div className="note-action icon">
              <i className="material-icons md-18">color_lens</i>
            </div>
          )}
          {showActions && (
            <div className="note-action icon" onClick={() => onRemove(note)}>
              <i className="material-icons md-18">delete</i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
