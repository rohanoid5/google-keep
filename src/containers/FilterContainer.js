import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';

import { updateNoteTitleFilter } from '../actions/filterAction';

class FilterContainer extends Component {
  render() {
    return (
      <div style={{ width: '80%' }}>
        <SearchBox {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ notes, filter }) => {
  return {
    notes: notes.filter(
      note =>
        note.title.toLowerCase().includes(filter.noteTitleFilter) ||
        note.body.toLowerCase().includes(filter.noteTitleFilter)
    ),
    value: filter.noteTitleFilter
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter(value) {
    dispatch(updateNoteTitleFilter(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
