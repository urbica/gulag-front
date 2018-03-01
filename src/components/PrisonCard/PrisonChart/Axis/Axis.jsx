import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

import Container from './Container';

class Axis extends PureComponent {
  componentDidMount() {
    const { scale, ticks } = this.props;

    const axis =
      axisLeft(scale)
        .ticks(ticks)
        .tickSize(0);

    this.g
      .call(axis)
      .selectAll('text')
      .attr('y', 14);
  }

  componentWillReceiveProps({ scale, ticks }) {
    const axis =
      axisLeft(scale)
        .ticks(ticks)
        .tickSize(0);

    this.g
      .call(axis)
      .selectAll('text')
      .attr('y', 14);
  }

  render() {
    return (
      <Container
        innerRef={(ref) => {
          this.g = select(ref);
        }}
      />
    );
  }
}

Axis.propTypes = {
  scale: PropTypes.func.isRequired,
  ticks: PropTypes.number.isRequired
};

export default Axis;
