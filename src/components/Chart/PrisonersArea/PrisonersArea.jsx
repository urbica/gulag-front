import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { select } from 'd3-selection';

import { changeCurrentYear } from '../../../reducers/ui';

// styled
import Container from './Container';

class PrisonersArea extends PureComponent {
  componentDidMount() {
    const { data } = this.props;

    const prisonersArea = select(this.g);
    const deadG = prisonersArea
      .append('g');

    const noDataG = prisonersArea
      .append('g');

    const prisonersG = prisonersArea
      .append('g');

    // dead group
    this.deadRect = deadG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect');

    this.deadLine = deadG
      .selectAll('line')
      .data(data)
      .enter()
      .append('line');

    // no data group
    this.noDataRect = noDataG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect');

    // prisoners group
    this.prisonersRect = prisonersG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect');

    this.prisonersLine = prisonersG
      .selectAll('line')
      .data(data)
      .enter()
      .append('line');
  }

  componentWillReceiveProps(nextProps) {
    const {
      xScale,
      yScale,
      width,
      height
    } = nextProps;
    const barWidth = Math.round(width / 42) - 2;

    this.deadRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('y', d => yScale(d.dead))
      .attr('width', barWidth)
      .attr('height', d => height - yScale(d.dead));

    this.deadLine
      .attr('fill', 'none')
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('y1', d => yScale(d.dead))
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.dead === 0) {
          return xScale(date) + 1;
        }
        return xScale(date) + barWidth + 1;
      })
      .attr('y2', d => yScale(d.dead));

    this.noDataRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      // .attr('y', 0)
      .attr('y', yScale(250000))
      .attr('width', (d) => {
        if (d.prisoners === 0) {
          return barWidth;
        }
        return 0;
      })
      // .attr('height', height)
      .attr('height', height - yScale(250000))
      .attr('fill', 'url(#Gradient)')
      .on('click', d => this.props.dispatch(changeCurrentYear(d.year)));

    this.prisonersRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('y', d => yScale(d.prisoners))
      .attr('width', barWidth)
      .attr('height', d => height - yScale(d.prisoners))
      .on('click', d => this.props.dispatch(changeCurrentYear(d.year)));

    this.prisonersLine
      .attr('fill', 'none')
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('y1', d => yScale(d.prisoners))
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.prisoners === 0) {
          return xScale(date) + 1;
        }
        return xScale(date) + barWidth + 1;
      })
      .attr('y2', d => yScale(d.prisoners));
  }

  render() {
    const { margin } = this.props;

    return (
      <Container
        innerRef={(ref) => {
          this.g = ref;
        }}
        transform={`translate(${margin.left}, ${margin.top})`}
        showAllYears={this.props.showAllYears}
      />
    );
  }
}

PrisonersArea.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }).isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      prisoners: PropTypes.number,
      dead: PropTypes.number,
      year: PropTypes.number
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
  showAllYears: PropTypes.bool
};

PrisonersArea.defaultProps = {
  showAllYears: false
};

export default connect()(PrisonersArea);
