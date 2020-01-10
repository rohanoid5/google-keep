import { UPDATE_NOTE_TITLE_FILTER } from '../constants/ActionTypes';

export const updateNoteTitleFilter = text => ({
  type: UPDATE_NOTE_TITLE_FILTER,
  text
});
