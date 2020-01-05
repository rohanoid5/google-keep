import React, { useRef, useEffect, useState } from 'react';
import { DEFAULT_STATE } from '../utils/constants';
import autosize from 'autosize';

const NewNote = ({ addNewNote }) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus();
    autosize(contentInput.current);
  }, []);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSave = () => {
    let { title, body } = state;
    if (title !== '' || body !== '') {
      addNewNote(title, body, '');
      setState(DEFAULT_STATE);
    }
  };

  return (
    <div className="note-add">
      <div className="note-btns">
        <button className="note-btn" onClick={onSave}>
          Save
        </button>
        <button className="note-btn">Close</button>
      </div>
      <div className="star-icon icon">
        <i className="material-icons">star_border</i>
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
        <div className="icon">
          <i className="material-icons">star_border</i>
        </div>
        <div className="icon">
          <i className="material-icons">star_border</i>
        </div>
        <div className="icon">
          <i className="material-icons">star_border</i>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
