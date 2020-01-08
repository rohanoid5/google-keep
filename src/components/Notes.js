import React, { useState, useRef, useEffect } from 'react';
import autosize from 'autosize';
import localforage from 'localforage';
import { DEFAULT_STATE, DARK_THEME } from '../utils/constants';
import Note from './Note';
import ThemeContext from '../contexts/ThemeContext';

const Notes = ({ notes, onRemove, onArchive, onUpdate, onStar }) => {
  const [selectedNote, setSelectedNote] = useState(DEFAULT_STATE);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [tagVisibility, setTagVisibility] = useState(false);
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus();
    autosize(contentInput.current);
    localforage.getItem('selectionInfo').then(res => {
      if (res && res.modalVisibility && res.selectedNote) {
        setModalVisibility(true);
        setSelectedNote(res.selectedNote);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem('selectionInfo', { modalVisibility, selectedNote });
  }, [modalVisibility, selectedNote]);

  useEffect(() => {
    if (
      notes.filter(item => item.isStarred).length > 0 &&
      notes.filter(item => !item.isStarred).length > 0
    ) {
      setTagVisibility(true);
    } else {
      setTagVisibility(false);
    }
  }, [notes]);

  const onNoteChange = e => {
    let note = {
      ...selectedNote,
      [e.currentTarget.name]: e.currentTarget.value
    };
    setSelectedNote(note);
    onUpdate(note);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          {tagVisibility && <div className="note-tag">STARRED</div>}
          <div className="notes">
            {notes
              .filter(item => item.isStarred)
              .map(item => {
                return (
                  <Note
                    key={item.id}
                    className="note"
                    note={item}
                    onRemove={onRemove}
                    onArchive={onArchive}
                    onStar={onStar}
                    setModalVisibility={setModalVisibility}
                    setSelectedNote={setSelectedNote}
                  />
                );
              })}
            {modalVisibility}
          </div>
          {tagVisibility && (
            <div style={{ marginTop: '8px' }} className="note-tag">
              OTHERS
            </div>
          )}
          <div className="notes">
            {notes
              .filter(item => !item.isStarred)
              .map(item => {
                return (
                  <Note
                    key={item.id}
                    className="note"
                    note={item}
                    onRemove={onRemove}
                    onArchive={onArchive}
                    onStar={onStar}
                    setModalVisibility={setModalVisibility}
                    setSelectedNote={setSelectedNote}
                  />
                );
              })}
            {modalVisibility}
          </div>
          <div className={modalVisibility ? 'modale opened' : 'modale'}>
            <div
              className={
                theme === DARK_THEME
                  ? 'modal-dialog'
                  : 'modal-dialog modal-dialog-light'
              }
            >
              <div className="modal-content">
                <input
                  onChange={onNoteChange}
                  value={selectedNote.title}
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
                  onChange={onNoteChange}
                  value={selectedNote.body}
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
                <button
                  className={
                    theme === DARK_THEME
                      ? 'modal-btn note-btn'
                      : 'modal-btn note-btn note-btn-light'
                  }
                  onClick={() => setModalVisibility(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Notes;
