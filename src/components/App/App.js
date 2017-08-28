import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../reducers/data';

import Header from '../Header/Header';
import Map from '../Map/Map';
import Chart from '../Chart/Chart';
import PrisonCard from '../PrisonCard/PrisonCard';
import PeriodCard from '../PeriodCard/PeriodCard';

class App extends PureComponent {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <Header />
        <Map />
        <Chart />
        <PrisonCard />
        <PeriodCard />
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchData }
)(App);
