import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

// styled
import Container from './Container';

class Axis extends PureComponent {
  componentWillReceiveProps() {
    const { scale, width } = this.props;

    const axis = axisBottom(scale);
    if (width < 833) {
      axis
        .tickSize(0)
        .tickFormat('');
    } else {
      axis
        .ticks(42)
        .tickFormat('');
    }

    const el = select(this.axis);
    el.call(axis);
  }

  render() {
    const { height, margin } = this.props;

    return (
      <Container
        innerRef={(ref) => {
          this.axis = ref;
        }}
        transform={`translate(${margin.left}, ${height + margin.top})`}
      />
    );
  }
}

Axis.propTypes = {
  scale: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
};

export default Axis;
