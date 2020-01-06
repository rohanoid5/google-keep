import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';

import {
  toggleNote,
  removeNote,
  updateNote,
  starNote
} from '../actions/noteAction';

class NotesContainer extends Component {
  render() {
    const { notes, onRemove, onArchive, onUpdate, onStar } = this.props;
    return (
      <Notes
        notes={notes}
        onRemove={onRemove}
        onArchive={onArchive}
        onUpdate={onUpdate}
        onStar={onStar}
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
  },
  onStar(note) {
    dispatch(starNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
