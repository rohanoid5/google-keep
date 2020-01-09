import React, { useState } from 'react';
import './Note.css';
import ThemeContext from '../contexts/ThemeContext';
import { DARK_THEME, LIGHT_THEME } from '../utils/constants';

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
    e.stopPropagation();
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
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="note">
          <div
            className="note-inner"
            onMouseOver={() => setShowActions(true)}
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
            onClick={onNoteSelect}
            style={{
              backgroundColor: `${note.backgroundColor}`,
              color:
                theme === LIGHT_THEME && note.backgroundColor === ''
                  ? '#000000'
                  : '#eeeeee'
            }}
          >
            {showActions && (
              <div
                className={
                  theme === DARK_THEME
                    ? 'star-icon-action icon'
                    : 'star-icon-action icon icon-light'
                }
                onClick={handleStar}
              >
                <i className="material-icons md-18">
                  {note.isStarred ? 'star' : 'star_border'}
                </i>
              </div>
            )}
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.body}</div>
            <div className="note-actions">
              {showActions && (
                <div
                  className={
                    theme === DARK_THEME
                      ? 'note-action icon'
                      : 'note-action icon icon-light'
                  }
                  onClick={handleArchive}
                >
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
                <div
                  className={
                    theme === DARK_THEME
                      ? 'note-action icon'
                      : 'note-action icon icon-light'
                  }
                >
                  <i className="material-icons md-18">add_photo_alternate</i>
                </div>
              )}
              {showActions && (
                <div
                  className={
                    theme === DARK_THEME
                      ? 'note-action icon'
                      : 'note-action icon icon-light'
                  }
                >
                  <i className="material-icons md-18">color_lens</i>
                </div>
              )}
              {showActions && (
                <div
                  className={
                    theme === DARK_THEME
                      ? 'note-action icon'
                      : 'note-action icon icon-light'
                  }
                  onClick={handleRemove}
                >
                  <i className="material-icons md-18">delete</i>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Note;
