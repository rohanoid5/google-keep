import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateNoteTitleFilter } from '../actions/filterAction';

class FilterContainer extends Component {
  render() {
    return (
      <div style={{ width: '80%' }}>{this.props.children(this.props)}</div>
    );
  }
}

const mapStateToProps = ({ filter }) => {
  return {
    value: filter.noteTitleFilter
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter(value) {
    dispatch(updateNoteTitleFilter(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
