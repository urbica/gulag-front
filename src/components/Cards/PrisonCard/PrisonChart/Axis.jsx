import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

import AxisContainer from './AxisContainer';

class Axis extends PureComponent {
  componentDidMount() {
    const { scale, ticks } = this.props;

    const axis = axisLeft(scale);
    axis.ticks(ticks)
      .tickSize(0);

    const el = select(this.axis);
    el.call(axis)
      .selectAll('text')
      .attr('y', 14);
  }

  render() {
    const { margin } = this.props;

    return (
      <AxisContainer
        innerRef={(ref) => {
          this.axis = ref;
        }}
        transform={`translate(${margin.left}, ${margin.top})`}
      />
    );
  }
}

Axis.propTypes = {
  scale: PropTypes.func.isRequired,
  ticks: PropTypes.number.isRequired,
  margin: PropTypes.object.isRequired
};

export default Axis;
