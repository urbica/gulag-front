import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import { timeMonth } from 'd3-time';

// styled
import Container from './Container';

class Axis extends PureComponent {
  constructor(props) {
    super(props);

    this.gRef = React.createRef();

    this.createAxis = () => {
      const { xScale, width } = this.props;

      const axis = axisBottom(xScale).tickSizeOuter(0);

      if (width < 833) {
        axis.ticks(0, '');
      } else {
        axis
          .ticks(timeMonth.filter(d => d.getMonth() === 6))
          .tickFormat((d, i) => (i % 2 === 0 ? d.getFullYear() : null))
          .tickSizeInner(4);
      }

      const el = select(this.gRef.current);
      el.call(axis);
    };
  }

  componentDidMount() {
    this.createAxis();
  }

  render() {
    return <Container innerRef={this.gRef} />;
  }
}

Axis.propTypes = {
  xScale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export default Axis;
