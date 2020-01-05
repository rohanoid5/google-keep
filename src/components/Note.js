import React, { useState } from 'react';
import './Note.css';

const Note = ({
  note,
  onRemove,
  onArchive,
  setModalVisibility,
  setSelectedNote
}) => {
  const [showActions, setShowActions] = useState(false);

  const onNoteSelect = e => {
    setModalVisibility(true);
    setSelectedNote(note);
  };

  const handleArchive = e => {
    e.stopPropagation();
    onArchive(note);
  };

  const handleRemove = e => {
    e.stopPropagation();
    onRemove(note);
  };

  return (
    <div className="note">
      <div
        className="note-inner"
        onMouseOver={() => setShowActions(true)}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
        onClick={onNoteSelect}
      >
        {showActions && (
          <div className="star-icon-action icon">
            <i className="material-icons md-18">star_border</i>
          </div>
        )}
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
                onClick={handleArchive}
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
            <div className="note-action icon" onClick={handleRemove}>
              <i className="material-icons md-18">delete</i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
