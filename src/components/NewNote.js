import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';
import ThemeContext from '../contexts/ThemeContext';
import { DARK_THEME } from '../utils/constants';

const NewNote = ({ isFocussed, setFocus, noteState, setNoteState, onSave }) => {
  const contentInput = useRef(null);

  useEffect(() => {
    if (contentInput && contentInput.current) {
      contentInput.current.focus();
      autosize(contentInput.current);
    }
  }, []);

  const handleChange = e => {
    setNoteState({
      ...noteState,
      [e.target.name]: e.target.value
    });
  };

  const handleStar = () => {
    setNoteState(noteState => {
      return {
        ...noteState,
        isStarred: !noteState.isStarred
      };
    });
  };

  const handleArchive = () => {
    setNoteState(noteState => {
      return {
        ...noteState,
        isArchived: !noteState.isArchived
      };
    });
  };

  if (isFocussed) {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="note-add" onClick={e => e.stopPropagation()}>
            <div
              className={
                theme === DARK_THEME
                  ? 'star-icon icon'
                  : 'star-icon icon icon-light'
              }
              onClick={handleStar}
            >
              <i className="material-icons">
                {noteState.isStarred ? 'star' : 'star_border'}
              </i>
            </div>
            <input
              onChange={handleChange}
              value={noteState.title}
              className={
                theme === DARK_THEME
                  ? 'note-title-input'
                  : 'note-title-input note-title-input-light'
              }
              type="text"
              name="title"
              placeholder="Title"
            />
            <textarea
              onChange={handleChange}
              value={noteState.body}
              name="body"
              ref={contentInput}
              rows={1}
              className={
                theme === DARK_THEME
                  ? 'note-content-input'
                  : 'note-content-input note-content-input-light'
              }
              type="text"
              placeholder="Take a note..."
            ></textarea>
            <div className="note-add-actions">
              <div style={{ display: 'flex' }}>
                <div
                  className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
                  onClick={handleArchive}
                >
                  <i
                    className={
                      noteState.isArchived
                        ? 'material-icons'
                        : 'material-icons-outlined'
                    }
                  >
                    archive
                  </i>
                </div>
                <div
                  className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
                >
                  <i className="material-icons">add_photo_alternate</i>
                </div>
                <div
                  className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
                >
                  <i className="material-icons">color_lens</i>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <button
                  className={
                    theme === DARK_THEME
                      ? 'note-btn'
                      : 'note-btn note-btn-light'
                  }
                  onClick={onSave}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  } else {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            style={{ display: 'flex' }}
            className="note-add"
            onClick={e => e.stopPropagation()}
          >
            <div className="note-add-unfocussed" onClick={() => setFocus(true)}>
              Take a note
            </div>
            <div style={{ flex: '1', display: 'flex' }}>
              <div
                className={theme === DARK_THEME ? 'icon' : 'icon icon-light'}
              >
                <i className="material-icons">add_photo_alternate</i>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
};

export default NewNote;
