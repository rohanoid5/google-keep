import React, { useState } from 'react';
import './Note.css';

const Note = ({
  note,
  onRemove,
  onArchive,
  onStar,
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

  const handleStar = e => {
    e.stopPropagation();
    onStar(note);
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
          <div className="star-icon-action icon" onClick={handleStar}>
            <i className="material-icons md-18">
              {note.isStarred ? 'star' : 'star_border'}
            </i>
          </div>
        )}
        <div className="note-title">{note.title}</div>
        <div className="note-content">{note.body}</div>
        <div className="note-actions">
          {showActions && (
            <div className="note-action icon" onClick={handleArchive}>
              <i
                className={
                  note.isArchived
                    ? 'material-icons md-18'
                    : 'material-icons-outlined  md-18'
                }
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
