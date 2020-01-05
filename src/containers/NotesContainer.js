import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';

import { toggleNote, removeNote } from '../actions/noteAction';

class NotesContainer extends Component {
  render() {
    const { notes, onRemove, onArchive } = this.props;
    return <Notes notes={notes} onRemove={onRemove} onArchive={onArchive} />;
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    notes: notes.filter(note => !note.isArchived)
  };
};

const mapDispatchToProps = dispatch => ({
  onArchive(note) {
    dispatch(toggleNote(note));
  },
  onRemove(note) {
    dispatch(removeNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);