import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewNote from '../components/NewNote';

import { addNewNote } from '../actions/noteAction';

class NewNoteContainer extends Component {
  render() {
    return <NewNote addNewNote={this.props.addNewNote} />;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewNote
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(NewNoteContainer);
