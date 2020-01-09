import React, { useRef, useEffect, useState } from 'react';
import autosize from 'autosize';
import ThemeContext from '../contexts/ThemeContext';
import {
  DARK_THEME,
  DARK_COLORS,
  LIGHT_COLORS,
  LIGHT_THEME
} from '../utils/constants';
import ColorPicker from './ColorPicker';

const NewNote = ({ isFocussed, setFocus, noteState, setNoteState, onSave }) => {
  const contentInput = useRef(null);
  const imageUploadButton = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

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

  const handleImageUpload = e => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
  };

  const handleBackgroundColor = (index, color) => {
    setSelectedIndex(index);
    setNoteState(noteState => {
      return {
        ...noteState,
        backgroundColor: color
      };
    });
  };

  if (isFocussed) {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className="note-add"
            style={{
              position: 'relative',
              backgroundColor:
                theme === DARK_THEME
                  ? `${DARK_COLORS[selectedIndex]}`
                  : `${LIGHT_COLORS[selectedIndex]}`
            }}
            onClick={e => e.stopPropagation()}
          >
            {colorPickerVisibility && (
              <ColorPicker
                colors={theme === DARK_THEME ? DARK_COLORS : LIGHT_COLORS}
                selectedIndex={selectedIndex}
                handleBackgroundColor={handleBackgroundColor}
                setColorPickerVisibility={setColorPickerVisibility}
                position={{ key: 'left', value: '16px' }}
              />
            )}
            <div
              className={
                theme === LIGHT_THEME && selectedIndex === 0
                  ? 'star-icon icon icon-light'
                  : 'star-icon icon material-icon-white'
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
                theme === LIGHT_THEME && selectedIndex === 0
                  ? 'note-title-input note-title-input-light'
                  : 'note-title-input'
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
                theme === LIGHT_THEME && selectedIndex === 0
                  ? 'note-content-input note-content-input-light'
                  : 'note-content-input'
              }
              type="text"
              placeholder="Take a note..."
            ></textarea>
            {noteState.image !== '' && (
              <div className="note-image-container">
                <div
                  className={
                    theme === DARK_THEME
                      ? 'icon note-image-remove'
                      : 'icon icon-light note-image-remove'
                  }
                >
                  <i
                    className={
                      noteState.isArchived
                        ? 'material-icons'
                        : 'material-icons-outlined'
                    }
                  >
                    clear
                  </i>
                </div>
                <img
                  className="note-image"
                  alt="uploaded_img"
                  src="https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </div>
            )}
            <div className="note-add-actions">
              <div style={{ display: 'flex' }}>
                <div
                  className={
                    theme === LIGHT_THEME && selectedIndex === 0
                      ? 'icon  icon-light'
                      : 'icon material-icon-white'
                  }
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
                <input
                  type="file"
                  id="file"
                  ref={imageUploadButton}
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
                <div
                  type="file"
                  className={
                    theme === LIGHT_THEME && selectedIndex === 0
                      ? 'icon  icon-light'
                      : 'icon material-icon-white'
                  }
                  onClick={() => imageUploadButton.current.click()}
                >
                  <i className="material-icons">add_photo_alternate</i>
                </div>
                <div
                  className={
                    theme === LIGHT_THEME && selectedIndex === 0
                      ? 'icon  icon-light'
                      : 'icon material-icon-white'
                  }
                  onMouseOver={() => setColorPickerVisibility(true)}
                  onMouseOut={() => setColorPickerVisibility(false)}
                >
                  <i className="material-icons">color_lens</i>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <button
                  className={
                    theme === LIGHT_THEME && selectedIndex === 0
                      ? 'note-btn note-btn-light'
                      : 'note-btn'
                  }
                  onClick={() => {
                    onSave();
                    setSelectedIndex(0);
                  }}
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
