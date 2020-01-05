import {
  UPDATE_ALL_NOTES,
  ADD_NEW_NOTE,
  REMOVE_NOTE,
  TOGGLE_NOTE,
  UPDATE_ALL_AS_ARCHIVE
} from '../utils/constants';

import API from '../apiCaller';

export const getAllNotes = () => {
  return dispatch => {
    API.getAll().then(notes => {
      dispatch({
        type: UPDATE_ALL_NOTES,
        notes
      });
    });
  };
};

export const addNewNote = (title, body, image) => {
  const note = {
    isArchived: false,
    title,
    body,
    image
  };

  return dispatch => {
    API.add(note).then(note => {
      dispatch({
        type: ADD_NEW_NOTE,
        note
      });
    });
  };
};

export const toggleNote = note => {
  const updatedNote = { ...note, isArchived: !note.isArchived };
  return (dispatch, getState) => {
    API.update(updatedNote).then(() => {
      dispatch({
        type: TOGGLE_NOTE,
        note: updatedNote
      });
    });
  };
};

export const removeNote = note => {
  return dispatch => {
    API.delete(note).then(() => {
      dispatch({
        type: REMOVE_NOTE,
        id: note.id
      });
    });
  };
};

export const updateAllAsArchive = () => {
  return dispatch => {
    API.updateAllAsArchive().then(() => {
      dispatch({
        type: UPDATE_ALL_AS_ARCHIVE
      });
    });
  };
};
