import React, { useState } from 'react';
import './Note.css';
import ThemeContext from '../contexts/ThemeContext';
import {
  DARK_THEME,
  LIGHT_THEME,
  DARK_COLORS,
  LIGHT_COLORS
} from '../utils/constants';
import ColorPicker from './ColorPicker';

const Note = ({
  note,
  onRemove,
  onArchive,
  onStar,
  onUpdate,
  setModalVisibility,
  setSelectedNote
}) => {
  const [showActions, setShowActions] = useState(false);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleBackgroundColor = (index, color) => {
    setSelectedIndex(index);
    let updatedNote = {
      ...note,
      backgroundColor: color
    };
    onUpdate(updatedNote);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="note">
          {colorPickerVisibility && (
            <ColorPicker
              colors={theme === DARK_THEME ? DARK_COLORS : LIGHT_COLORS}
              selectedIndex={selectedIndex}
              handleBackgroundColor={handleBackgroundColor}
              setColorPickerVisibility={setColorPickerVisibility}
              position={{ key: 'right', value: '16px' }}
            />
          )}
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
                  onMouseOver={() => setColorPickerVisibility(true)}
                  onMouseOut={() => setColorPickerVisibility(false)}
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
