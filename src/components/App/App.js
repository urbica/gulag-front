/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../reducers/data';

import Map from '../Map';

class App extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Map
        currentYear={1935}
      />
    );
  }
}

export default connect(
  state => state,
  { fetchData }
)(App);
