import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import { timeMonth } from 'd3-time';

import { calculateXScale } from '../config';

// styled
import Container from './Container';

class Axis extends PureComponent {
  constructor(props) {
    super(props);

    this.gRef = React.createRef();
    this.createAxis = this.createAxis.bind(this);
  }

  componentDidMount() {
    this.createAxis();
  }

  componentDidUpdate() {
    this.createAxis();
  }

  createAxis() {
    const { width, isChartVisible } = this.props;
    const xScale = calculateXScale(width);
    const axis = axisBottom(xScale)
      .tickSizeOuter(0)
      .tickSizeInner(4);

    if (window.innerWidth < 1024) {
      axis.ticks(0, '');
    } else if (!isChartVisible) {
      axis
        .ticks(timeMonth.filter(d => d.getMonth() === 6))
        .tickFormat((d, i) => (i % 2 === 0 ? d.getFullYear() : null));
    } else {
      axis
        .ticks(timeMonth.filter(d => d.getMonth() === 6))
        .tickFormat((d, i) => (i % 2 === 0 ? d.getFullYear() : null));
    }

    const el = select(this.gRef.current);
    el.call(axis);
  }

  render() {
    return <Container innerRef={this.gRef} />;
  }
}

Axis.propTypes = {
  width: PropTypes.number.isRequired,
  isChartVisible: PropTypes.bool.isRequired
};

export default Axis;
