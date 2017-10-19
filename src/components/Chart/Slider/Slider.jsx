import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { select, event } from 'd3-selection';
import { drag } from 'd3-drag';

import { height, chartData, yScale } from '../config';

import { changeCurrentYear } from '../../App/reducers/uiReducer';

// styled
import Container from './Container';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.setYear = this.setYear.bind(this);
  }

  componentDidMount() {
    const translateX = this.props.xScale(new Date(this.props.currentYear, 0, 1));
    const barWidth = Math.round(this.props.width / 42) - 2;
    let prisoners = 0;

    // eslint-disable-next-line
    chartData.forEach(d => (d.year === this.props.currentYear ? prisoners = d.prisoners : 0));

    const slider = select(this.g);
    this.handle = slider
      .append('g')
      .attr('class', 'handle')
      .attr('transform', `translate(${translateX}, 0)`);

    // current year rect
    this.currentYearRect = this.handle
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('fill', '#fff')
      .attr('opacity', 0.5)
      .attr('class', 'currentYearRect')
      .attr('width', barWidth)
      .attr('height', height - yScale(prisoners))
      .attr('transform', `translate(1, -${height - yScale(prisoners)})`);

    // handle year
    this.year = this.handle
      .append('text')
      .attr('transform', 'translate(-11, -17)')
      .attr('class', 'currentYear');

    this.sliderLine = slider
      .append('line')
      .attr('stroke-width', 30)
      .attr('stroke', 'transparent')
      .attr('pointer-events', 'auto')
      .attr('x1', this.props.xScale.range()[0])
      .attr('x2', this.props.xScale.range()[1])
      .call(
        drag().on('start drag', this.setYear)
      );

    // handle circle
    this.handle
      .append('circle')
      .attr('r', 10)
      .attr('cx', 5)
      .attr('fill', '#333')
      .attr('stroke', '#979797')
      .attr('class', 'circle');

    // handle shadow
    this.handleShadow = this.handle
      .append('rect')
      .attr('height', 11)
      .attr('fill', '#1E2734')
      .attr('filter', 'url(#gaussianBlur)')
      .attr('transform', 'translate(1, -5)')
      .attr('class', 'handleShadow');

    // handle rect
    this.handleRect = this.handle
      .append('rect')
      .attr('height', 11)
      .attr('fill', '#fff')
      .attr('transform', 'translate(1, -5)')
      .attr('class', 'rect');

    // handle lines
    this.handleLines = this.handle
      .append('path')
      .attr('d', 'M15,3 L16,3 L16,9 L15,9 L15,3 Z M19,3 L20,3 L20,9 L19,9 L19,3 Z M23,3 L24,3 L24,9 L23,9 L23,3 Z')
      .attr('fill', '#22252F')
      .attr('opacity', '0.3')
      .attr('class', 'handleLines');

    if (this.props.width >= 833) {
      // handle shadow
      this.handleShadow
        .attr('width', barWidth);

      // handle rect
      this.handleRect
        .attr('width', barWidth);

      // handle lines
      this.handleLines
        .attr('transform', `translate(${-18.3 + (barWidth / 2)}, -5.5)`);
    }
  }

  componentWillReceiveProps({ width, xScale, currentYear }) {
    const translateX = xScale(new Date(currentYear, 0, 1));
    const barWidth = Math.round(width / 42) - 2;
    let prisoners = 0;

    // eslint-disable-next-line
    chartData.forEach(d => (d.year === currentYear ? prisoners = d.prisoners : 0));

    this.handle
      .attr('transform', `translate(${translateX}, 0)`);

    this.currentYearRect
      .attr('width', barWidth)
      .attr('height', height - yScale(prisoners))
      .attr('transform', `translate(1, -${height - yScale(prisoners)})`);

    this.sliderLine
      .attr('x1', xScale.range()[0])
      .attr('x2', xScale.range()[1]);

    this.year.text(currentYear);

    if (width >= 833) {
      // handle shadow
      this.handleShadow
        .attr('width', barWidth);

      // handle rect
      this.handleRect
        .attr('width', barWidth);

      // handle lines
      this.handleLines
        .attr('transform', `translate(${-18.3 + (barWidth / 2)}, -5.5)`);
    }
  }

  setYear() {
    this.props.dispatch(changeCurrentYear(this.props.xScale.invert(event.x).getFullYear()));
  }

  render() {
    return (
      <Container
        innerRef={(ref) => {
          this.g = ref;
        }}
        isVisible={!this.props.isShowAllPrisons}
      />
    );
  }
}

Slider.propTypes = {
  xScale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
  isShowAllPrisons: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    currentYear: state.getIn(['ui', 'currentYear']),
    isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons'])
  })
)(Slider);
