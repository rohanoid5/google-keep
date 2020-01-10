import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewNote from '../components/NewNote';

import { addNewNote } from '../actions/noteAction';

const NewNoteContainer = ({
  addNewNote,
  isFocussed,
  setFocus,
  noteState,
  setNoteState
}) => {
  return (
    <NewNote
      addNewNote={addNewNote}
      isFocussed={isFocussed}
      setFocus={setFocus}
      noteState={noteState}
      setNoteState={setNoteState}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewNote
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(NewNoteContainer);
