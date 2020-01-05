import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';

import { toggleNote, removeNote, updateNote } from '../actions/noteAction';

class NotesContainer extends Component {
  render() {
    const { notes, onRemove, onArchive, onUpdate } = this.props;
    return (
      <Notes
        notes={notes}
        onRemove={onRemove}
        onArchive={onArchive}
        onUpdate={onUpdate}
      />
    );
  }
}

const mapStateToProps = ({ notes, filter }) => {
  return {
    notes: notes.filter(
      note =>
        !note.isArchived &&
        (note.title.toLowerCase().includes(filter.noteTitleFilter) ||
          note.body.toLowerCase().includes(filter.noteTitleFilter))
    )
  };
};

const mapDispatchToProps = dispatch => ({
  onArchive(note) {
    dispatch(toggleNote(note));
  },
  onRemove(note) {
    dispatch(removeNote(note));
  },
  onUpdate(note) {
    dispatch(updateNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
