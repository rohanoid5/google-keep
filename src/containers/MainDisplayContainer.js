import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainDisplay from '../components/MainDisplay';

import { addNewNote } from '../actions/noteAction';

class MainDisplayContainer extends Component {
  render() {
    return (
      <MainDisplay
        addNewNote={this.props.addNewNote}
        selctedIndex={this.props.selctedIndex}
      />
    );
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

export default connect(null, mapDispatchToProps)(MainDisplayContainer);
