import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { height, margin, calculateXScale } from './config';

import PlayButton from './Buttons/PlayButton';
import ShowAllButton from './Buttons/ShowAllButton';
import PrisonersArea from './PrisonersArea/PrisonersArea';
import Axis from './Axis/Axis';
import Slider from './Slider';

// styled
import Container from './Container';

class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth - 200
    };

    this.onResize = this.onResize.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentDidMount() {
    window.onresize = this.onResize;
  }

  onResize() {
    let width;
    const { innerWidth } = window;

    if (innerWidth < 1024) {
      width = innerWidth - 40;
    } else if (innerWidth < 1280) {
      width = innerWidth - 150;
    } else {
      width = innerWidth - 200;
    }

    this.setState({ width });
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
    const { width } = this.state;

    return (
      <Container
        mountOnEnter
        unmountOnExit
        in={!this.props.isDataLoading}
        timeout={800}
      >
        <PlayButton isDemoPlayed={this.props.isDemoPlay} onClick={this.demo} />
        <svg width={width} height={height + margin.top + margin.bottom}>
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
            <filter id='textShadow'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='4' />
            </filter>
          </defs>
          {this.props.isChartVisible && (
            <PrisonersArea width={width} xScale={calculateXScale(width)} />
          )}
          <Axis width={width} isChartVisible={this.props.isChartVisible} />
          <Slider
            width={width}
            xScale={calculateXScale(width)}
            isChartVisible={this.props.isChartVisible}
          />
        </svg>
        {this.props.isChartVisible && (
          <ShowAllButton
            isShowAll={this.props.isShowAll}
            onClick={this.props.toggleAllPrisons}
          />
        )}
      </Container>
    );
  }
}

Chart.propTypes = {
  currentYear: PropTypes.number.isRequired,
  isDemoPlay: PropTypes.bool.isRequired,
  isShowAll: PropTypes.bool.isRequired,
  toggleAllPrisons: PropTypes.func.isRequired,
  changeCurrentYear: PropTypes.func.isRequired,
  toggleDemo: PropTypes.func.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
  isChartVisible: PropTypes.bool.isRequired
};

export default Chart;
