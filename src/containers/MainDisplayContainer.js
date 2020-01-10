import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainDisplay from '../components/MainDisplay';

import { addNewNote } from '../actions/noteAction';

const MainDisplayContainer = ({ addNewNote, selctedIndex }) => {
  return <MainDisplay addNewNote={addNewNote} selctedIndex={selctedIndex} />;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewNote
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(MainDisplayContainer);
