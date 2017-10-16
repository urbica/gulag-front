import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

// styled
import Container from './Container';

class Axis extends PureComponent {
  componentDidMount() {
    const { xScale, width } = this.props;

    const axis = axisBottom(xScale);
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
    return (
      <Container
        innerRef={(ref) => {
          this.axis = ref;
        }}
      />
    );
  }
}

Axis.propTypes = {
  xScale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export default Axis;
