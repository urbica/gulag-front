import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import { toggleAllPrisons, changeCurrentYear, toggleDemo } from '../../reducers/ui';

import Header from '../Header/Header';
import Map from '../Map/Map';
import ChartWrap from './ChartWrap';
import PlayButton from '../Buttons/PlayButton';
import Chart from '../Chart/Chart';
import ShowAllButton from '../Buttons/ShowAllButton';
import PrisonCard from '../Cards/PrisonCard/PrisonCard';
import PeriodCard from '../Cards/PeriodCard/PeriodCard';
import SearchCard from '../Cards/SearchCard/SearchCard';
import AboutCard from '../Cards/AboutCard/AboutCard';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.demo = this.demo.bind(this);
  }

  demo() {
    this.props.toggleDemo();

    if (this.props.isDemoPlay) {
      clearInterval(this.playDemo);
    } else {
      this.playDemo = setInterval(() => {
        if (this.props.currentYear < 1956 && this.props.isDemoPlay) {
          this.props.changeCurrentYear(this.props.currentYear + 1);
        } else {
          clearInterval(this.playDemo);
        }
      }, 1000);
    }
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Header />
          <Map />
          <ChartWrap>
            <PlayButton
              isDemoPlayed={this.props.isDemoPlay}
              onClick={this.demo}
            />
            <Chart />
            <ShowAllButton onClick={this.props.toggleAllPrisons} />
          </ChartWrap>
          <Switch>
            <Route path='/prison:id' component={PrisonCard} />
            <Route path='/period:id' component={PeriodCard} />
            <Route path='/search' component={SearchCard} />
            <Route path='/about' component={AboutCard} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  isDemoPlay: PropTypes.bool.isRequired,
  currentYear: PropTypes.number.isRequired,
  toggleAllPrisons: PropTypes.func.isRequired,
  toggleDemo: PropTypes.func.isRequired,
  changeCurrentYear: PropTypes.func.isRequired
};

export default connect(
  state => ({
    isDemoPlay: state.getIn(['ui', 'isDemoPlay']),
    currentYear: state.getIn(['ui', 'currentYear'])
  }),
  { toggleAllPrisons, changeCurrentYear, toggleDemo }
)(App);
