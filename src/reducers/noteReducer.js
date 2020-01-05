import {
  UPDATE_ALL_NOTES,
  ADD_NEW_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE,
  TOGGLE_NOTE,
  UPDATE_ALL_AS_ARCHIVE,
  UPDATE_ALL_AS_UNARCHIVE
} from '../utils/constants';

export default (state = {}, action) => {
  if (action.type === UPDATE_ALL_NOTES) {
    return action.notes;
  }

  if (action.type === ADD_NEW_NOTE) {
    const { id, isArchived, title, body, image } = action.note;
    return [...state, { id, isArchived, title, body, image }];
  }

  if (action.type === REMOVE_NOTE) {
    return state.filter(note => note.id !== action.id);
  }

  if (action.type === UPDATE_NOTE || action.type === TOGGLE_NOTE) {
    return state.map(note => {
      if (note.id === action.note.id) return { ...action.note };
      return note;
    });
  }

  if (action.type === UPDATE_ALL_AS_ARCHIVE) {
    return state.map(note => {
      return { ...note, isArchived: true };
    });
  }

  if (action.type === UPDATE_ALL_AS_UNARCHIVE) {
    return state.map(note => {
      return { ...note, isArchived: false };
    });
  }

  return state;
};
