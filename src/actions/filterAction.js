import { UPDATE_NOTE_TITLE_FILTER } from '../utils/constants';

export const updateNoteTitleFilter = text => ({
  type: UPDATE_NOTE_TITLE_FILTER,
  text
});
