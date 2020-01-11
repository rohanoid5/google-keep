import React, { useRef, useEffect } from 'react';
import autosize from 'autosize';
import { DARK_THEME } from '../constants/ThemeConstants';

const Modal = ({
  modalVisibility,
  setModalVisibility,
  onNoteChange,
  selectedNote,
  theme
}) => {
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus();
    autosize(contentInput.current);
  }, []);

  return (
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
          <input
            onChange={onNoteChange}
            value={selectedNote.image}
            className={
              theme === DARK_THEME
                ? 'note-title-input'
                : 'note-title-input note-title-input-light'
            }
            type="text"
            name="image"
            placeholder="Paste your image url here"
          />
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
  );
};

export default Modal;
