import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { height, margin, calculateXScale } from './config';

import PlayButton from './Buttons/PlayButton';
import ChartStat from './ChartStat/ChartStat';
import ShowAllButton from './Buttons/ShowAllButton';
import PrisonersArea from './PrisonersArea/PrisonersArea';
import Axis from './Axis/Axis';
import Slider from './Slider';

// styled
import Container from './Container';
import ChartWrap from './ChartWrap';

const calculateChartWidth = () => {
  if (window.innerWidth > 1500) {
    return 1300;
  } else if (window.innerWidth >= 1024) {
    return window.innerWidth - 300;
  }
  return window.innerWidth - 40;
};

class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: calculateChartWidth()
    };

    this.onResize = this.onResize.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentDidMount() {
    window.onresize = this.onResize;
  }

  onResize() {
    this.setState({ width: calculateChartWidth() });
  }

  demo() {
    this.props.toggleDemo();

    if (this.props.isDemoPlay) {
      clearInterval(this.playDemo);
    } else {
      this.playDemo = setInterval(() => {
        if (this.props.currentYear < 1960 && this.props.isDemoPlay) {
          this.props.changeCurrentYear(this.props.currentYear + 1);
        } else if (this.props.currentYear === 1960) {
          clearInterval(this.playDemo);
          this.props.toggleDemo();
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
        <ChartWrap>
          <ChartStat currentYear={this.props.currentYear} />
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
              <PrisonersArea
                width={width}
                xScale={calculateXScale(width)}
                isShowAll={this.props.isShowAll}
                changeCurrentYear={this.props.changeCurrentYear}
              />
            )}
            <Axis width={width} isChartVisible={this.props.isChartVisible} />
            <Slider
              width={width}
              xScale={calculateXScale(width)}
              isChartVisible={this.props.isChartVisible}
            />
          </svg>
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
