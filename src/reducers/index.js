import { combineReducers } from 'redux';

import notes from './noteReducer';
import filter from './filterReducer';

export default combineReducers({ notes, filter });
