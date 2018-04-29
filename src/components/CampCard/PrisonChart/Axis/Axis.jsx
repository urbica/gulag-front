import React, { PureComponent } from 'react';
import { axisLeft } from 'd3-axis';
import { timeYear } from 'd3-time';
import { select } from 'd3-selection';
import PropTypes from 'prop-types';

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

  createAxis() {
    const { scale } = this.props;

    const axis = axisLeft(scale)
      .ticks(timeYear)
      .tickSize(0);

    const el = select(this.gRef.current);

    el
      .call(axis)
      .selectAll('text')
      .attr('y', 14);
  }

  render() {
    return <Container innerRef={this.gRef} />;
  }
}

Axis.propTypes = {
  scale: PropTypes.func.isRequired
};

export default Axis;
