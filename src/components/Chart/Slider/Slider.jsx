import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select, event } from 'd3-selection';
import { drag } from 'd3-drag';

import { height, chartData, yScale } from '../config';
import { mainFontColour } from '../../../config/styles';

// styled
import Container from './Container';

class Slider extends PureComponent {
  static propTypes = {
    xScale: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    currentYear: PropTypes.number.isRequired,
    isShowAllPrisons: PropTypes.bool.isRequired,
    changeCurrentYear: PropTypes.func.isRequired,
    isChartVisible: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.gRef = React.createRef();
    this.setYear = this.setYear.bind(this);
    this.createSlider = this.createSlider.bind(this);
  }

  componentDidMount() {
    this.createSlider();
  }

  componentDidUpdate() {
    this.createSlider();
  }

  createSlider() {
    select(this.gRef.current)
      .selectAll('*')
      .remove();

    const { xScale, currentYear, width } = this.props;
    const translateX = xScale(new Date(currentYear, 0, 1));
    const barWidth = Math.round(width / 42) - 2;
    const { prisoners } = chartData.find(({ year }) => year === currentYear);

    const slider = select(this.gRef.current);
    this.handle = slider
      .append('g')
      .attr('class', 'handle')
      .attr('transform', `translate(${translateX}, 0)`);

    // current year rect
    this.handle
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('fill', mainFontColour)
      .attr('opacity', 0.5)
      .attr('class', 'currentYearRect')
      .attr('width', barWidth)
      .attr('height', height - yScale(prisoners))
      .attr('transform', `translate(1, -${height - yScale(prisoners)})`);

    slider
      .append('line')
      .attr('stroke-width', 30)
      .attr('stroke', 'transparent')
      .attr('pointer-events', 'auto')
      .attr('x1', xScale.range()[0])
      .attr('x2', xScale.range()[1])
      .call(drag().on('start drag', this.setYear));

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
      .attr('fill', mainFontColour)
      .attr('transform', 'translate(1, -5)')
      .attr('class', 'rect');

    // handle lines
    this.handleLines = this.handle
      .append('path')
      .attr(
        'd',
        // eslint-disable-next-line
        'M15,3 L16,3 L16,9 L15,9 L15,3 Z M19,3 L20,3 L20,9 L19,9 L19,3 Z M23,3 L24,3 L24,9 L23,9 L23,3 Z'
      )
      .attr('fill', '#22252F')
      .attr('opacity', '0.3')
      .attr('class', 'handleLines');

    // handle year
    this.year = this.handle
      .append('text')
      .attr('transform', 'translate(-11, -25)')
      .attr('class', 'currentYear')
      .text(currentYear);

    if (window.innerWidth >= 1024) {
      // handle shadow
      this.handleShadow.attr('width', barWidth);

      // handle rect
      this.handleRect.attr('width', barWidth);

      // handle lines
      this.handleLines.attr(
        'transform',
        `translate(${-18.3 + barWidth / 2}, -5.5)`
      );

      this.year.attr('transform', `translate(-${(36 - barWidth) / 2}, 25)`);
    }
  }

  setYear() {
    const { xScale, currentYear, changeCurrentYear } = this.props;

    const newYear = xScale.invert(event.x).getFullYear();

    if (currentYear !== newYear) {
      changeCurrentYear(newYear);
    }
  }

  render() {
    const { isShowAllPrisons, isChartVisible } = this.props;

    return (
      <Container
        innerRef={this.gRef}
        isVisible={!isShowAllPrisons}
        isChartVisible={isChartVisible}
      />
    );
  }
}

export default Slider;
