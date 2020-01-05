import React, { useState, useRef, useEffect } from 'react';
import autosize from 'autosize';
import { DEFAULT_STATE } from '../utils/constants';
import Note from './Note';

const Notes = ({ notes, onRemove, onArchive, onUpdate }) => {
  const [selectedNote, setSelectedNote] = useState(DEFAULT_STATE);
  const [modalVisibility, setModalVisibility] = useState(false);
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus();
    autosize(contentInput.current);
  }, []);

  const onNoteChange = e => {
    let note = {
      ...selectedNote,
      [e.currentTarget.name]: e.currentTarget.value
    };
    setSelectedNote(note);
    onUpdate(note);
  };

  return (
    <div>
      <div className="notes">
        {notes.map(item => {
          return (
            <Note
              key={item.id}
              className="note"
              note={item}
              onRemove={onRemove}
              onArchive={onArchive}
              setModalVisibility={setModalVisibility}
              setSelectedNote={setSelectedNote}
            />
          );
        })}
        {modalVisibility}
      </div>
      <div className={modalVisibility ? 'modale opened' : 'modale'}>
        <div className="modal-dialog">
          <div className="modal-content">
            <input
              onChange={onNoteChange}
              value={selectedNote.title}
              className="note-title-input"
              type="text"
              name="title"
              placeholder="Title"
            />
            <textarea
              onChange={onNoteChange}
              value={selectedNote.body}
              name="body"
              ref={contentInput}
              rows={1}
              className="note-content-input"
              type="text"
              placeholder="Take a note..."
            ></textarea>
            <button
              className="modal-btn note-btn"
              onClick={() => setModalVisibility(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
