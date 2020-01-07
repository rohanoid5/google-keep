import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';

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
      <div className="note-add" onClick={e => e.stopPropagation()}>
        <div className="star-icon icon" onClick={handleStar}>
          <i className="material-icons">
            {noteState.isStarred ? 'star' : 'star_border'}
          </i>
        </div>
        <input
          onChange={handleChange}
          value={noteState.title}
          className="note-title-input"
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
          className="note-content-input"
          type="text"
          placeholder="Take a note..."
        ></textarea>
        <div className="note-add-actions">
          <div style={{ display: 'flex' }}>
            <div className="icon" onClick={handleArchive}>
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
            <div className="icon">
              <i className="material-icons">add_photo_alternate</i>
            </div>
            <div className="icon">
              <i className="material-icons">color_lens</i>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <button className="note-btn" onClick={onSave}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ display: 'flex' }}
        className="note-add"
        onClick={e => e.stopPropagation()}
      >
        <div className="note-add-unfocussed" onClick={() => setFocus(true)}>
          Take a note
        </div>
        <div style={{ flex: '1', display: 'flex' }}>
          <div className="icon">
            <i className="material-icons">add_photo_alternate</i>
          </div>
        </div>
      </div>
    );
  }
};

export default NewNote;
