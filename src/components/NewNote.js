import React, { useRef, useEffect, useState } from 'react';
import { DEFAULT_STATE } from '../utils/constants';
import autosize from 'autosize';

const NewNote = ({ addNewNote, isFocussed, setFocus }) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const contentInput = useRef(null);

  useEffect(() => {
    if (contentInput && contentInput.current) {
      contentInput.current.focus();
      autosize(contentInput.current);
    }
  }, []);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSave = () => {
    let { title, body, isStarred, isArchived } = state;
    if (title !== '' || body !== '') {
      addNewNote(title, body, '', isStarred, isArchived);
      setState(DEFAULT_STATE);
    }
  };

  const handleStar = () => {
    setState(state => {
      return {
        ...state,
        isStarred: !state.isStarred
      };
    });
  };

  const handleArchive = () => {
    setState(state => {
      return {
        ...state,
        isArchived: !state.isArchived
      };
    });
  };

  if (isFocussed) {
    return (
      <div className="note-add" onClick={e => e.stopPropagation()}>
        <div className="note-btns">
          <button className="note-btn" onClick={onSave}>
            Save
          </button>
          <button className="note-btn">Close</button>
        </div>
        <div className="star-icon icon" onClick={handleStar}>
          <i className="material-icons">
            {state.isStarred ? 'star' : 'star_border'}
          </i>
        </div>
        <input
          onChange={handleChange}
          value={state.title}
          className="note-title-input"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={state.body}
          name="body"
          ref={contentInput}
          rows={1}
          className="note-content-input"
          type="text"
          placeholder="Take a note..."
        ></textarea>
        <div className="note-add-actions">
          <div className="icon" onClick={handleArchive}>
            <i
              className={
                state.isArchived ? 'material-icons' : 'material-icons-outlined'
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
      </div>
    );
  } else {
    return (
      <div
        style={{ display: 'flex' }}
        className="note-add"
        onClick={e => e.stopPropagation()}
      >
        <div
          style={{
            padding: 8,
            cursor: 'text',
            color: '#cccccc',
            fontWeight: 'bold',
            flex: '9'
          }}
          onClick={() => setFocus(true)}
        >
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
