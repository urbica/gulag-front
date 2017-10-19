import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scaleTime } from 'd3-scale';

import { toggleAllPrisons, changeCurrentYear, toggleDemo } from '../App/reducers/uiReducer';

import { height, margin } from './config';

import PlayButton from '../Buttons/PlayButton';
import ShowAllButton from '../Buttons/ShowAllButton';
import PrisonersArea from './PrisonersArea/PrisonersArea';
import Axis from './Axis/Axis';
import Slider from './Slider/Slider';
import Periods from './Periods/Periods';

// styled
import Container from './Container';
import ChartWrap from './ChartWrap';

let width;
const { innerWidth } = window;

if (innerWidth < 1024) {
  width = innerWidth - 40 - margin.left - margin.right;
} else if (innerWidth < 1280) {
  width = innerWidth - 150 - margin.left - margin.right;
} else {
  width = innerWidth - 200 - margin.left - margin.right;
}

const xScale = scaleTime()
  .domain([new Date(1918, 0, 1), new Date(1960, 11, 31)])
  .range([0, width])
  .clamp(true);

class Chart extends PureComponent {
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
      <Container>
        <PlayButton
          isDemoPlayed={this.props.isDemoPlay}
          onClick={this.demo}
        />
        <ChartWrap>
          <svg
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
          >
            <defs>
              <linearGradient
                id='Gradient'
                x1='0%'
                y1='31%'
                x2='10%'
                y2='0%'
                spreadMethod='repeat'
              >
                <stop offset='0%' stopColor='rgb(225,225,225)' />
                <stop offset='12%' stopColor='rgb(225,225,225)' />
                <stop offset='13%' stopColor='rgb(0,0,0)' />
                <stop offset='25%' stopColor='rgb(0,0,0)' />
                <stop offset='26%' stopColor='rgb(225,225,225)' />
                <stop offset='38%' stopColor='rgb(225,225,225)' />
                <stop offset='39%' stopColor='rgb(0,0,0)' />
                <stop offset='51%' stopColor='rgb(0,0,0)' />
                <stop offset='52%' stopColor='rgb(225,225,225)' />
                <stop offset='64%' stopColor='rgb(225,225,225)' />
                <stop offset='65%' stopColor='rgb(0,0,0)' />
                <stop offset='77%' stopColor='rgb(0,0,0)' />
                <stop offset='78%' stopColor='rgb(225,225,225)' />
                <stop offset='90%' stopColor='rgb(225,225,225)' />
                <stop offset='91%' stopColor='rgb(0,0,0)' />
                <stop offset='100%' stopColor='rgb(0,0,0)' />
              </linearGradient>
              <filter
                id='gaussianBlur'
                width='185.7%'
                height='400%'
                x='-42.9%'
                y='-150%'
                filterUnits='objectBoundingBox'
              >
                <feGaussianBlur stdDeviation='5' in='SourceGraphic' />
              </filter>
            </defs>
            <PrisonersArea
              width={width}
              xScale={xScale}
            />
            <Axis
              width={width}
              xScale={xScale}
            />
            <Slider
              width={width}
              xScale={xScale}
            />
          </svg>
          <Periods
            width={width}
            xScale={xScale}
          />
        </ChartWrap>
        <ShowAllButton
          isShowAll={this.props.isShowAll}
          onClick={this.props.toggleAllPrisons}
        />
      </Container>
    );
  }
}

Chart.propTypes = {
  toggleDemo: PropTypes.func.isRequired,
  isDemoPlay: PropTypes.bool.isRequired,
  isShowAll: PropTypes.bool.isRequired,
  currentYear: PropTypes.number.isRequired,
  changeCurrentYear: PropTypes.func.isRequired,
  toggleAllPrisons: PropTypes.func.isRequired
};

export default connect(
  state => ({
    currentYear: state.getIn(['ui', 'currentYear']),
    isDemoPlay: state.getIn(['ui', 'isDemoPlay']),
    isShowAll: state.getIn(['ui', 'isShowAllPrisons'])
  }),
  { toggleAllPrisons, changeCurrentYear, toggleDemo }
)(Chart);
