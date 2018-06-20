import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';

import { chartData, yScale, height } from '../config';

// styled
import Container from './Container';

class PrisonersArea extends PureComponent {
  constructor(props) {
    super(props);

    this.gRef = React.createRef();
    this.createArea = this.createArea.bind(this);
  }

  componentDidMount() {
    this.createArea();
  }

  componentDidUpdate() {
    this.createArea();
  }

  createArea() {
    select(this.gRef.current)
      .selectAll('*')
      .remove();

    const { width, xScale, changeCurrentYear } = this.props;
    const barWidth = Math.round(width / 42) - 2;
    const prisonersArea = select(this.gRef.current);
    const deadG = prisonersArea.append('g');
    const noDataG = prisonersArea.append('g');
    const prisonersG = prisonersArea.append('g');

    // dead group
    deadG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', ({ dead }) => yScale(dead))
      .attr('height', ({ dead }) => height - yScale(dead))
      .attr('x', ({ year }) => xScale(new Date(year, 0, 1)) + 1)
      .attr('width', barWidth);

    deadG
      .selectAll('line')
      .data(chartData)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('y1', ({ dead }) => yScale(dead))
      .attr('y2', ({ dead }) => yScale(dead))
      .attr('x1', ({ year }) => xScale(new Date(year, 0, 1)) + 1)
      .attr('x2', d => {
        const date = new Date(d.year, 0, 1);

        if (d.dead === 0) {
          return xScale(date) + 1;
        }

        return xScale(date) + barWidth + 1;
      });

    // no data group
    noDataG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', yScale(300000))
      .attr('height', height - yScale(300000))
      .attr('fill', 'url(#Gradient)')
      .on('click', ({ year }) => changeCurrentYear(year))
      .attr('x', ({ year }) => xScale(new Date(year, 0, 1)) + 1)
      .attr('width', ({ prisoners }) => (prisoners === 0 ? barWidth : 0));

    // prisoners group
    prisonersG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', ({ prisoners }) => yScale(prisoners))
      .attr('height', ({ prisoners }) => height - yScale(prisoners))
      .on('click', ({ year }) => changeCurrentYear(year))
      .attr('x', ({ year }) => xScale(new Date(year, 0, 1)) + 1)
      .attr('width', barWidth);

    prisonersG
      .selectAll('line')
      .data(chartData)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('y1', ({ prisoners }) => yScale(prisoners))
      .attr('y2', ({ prisoners }) => yScale(prisoners))
      .attr('x1', ({ year }) => xScale(new Date(year, 0, 1)) + 1)
      .attr('x2', d => {
        const date = new Date(d.year, 0, 1);

        if (d.prisoners === 0) {
          return xScale(date) + 1;
        }

        return xScale(date) + barWidth + 1;
      });
  }

  render() {
    return (
      <Container innerRef={this.gRef} showAllYears={this.props.isShowAll} />
    );
  }
}

PrisonersArea.propTypes = {
  width: PropTypes.number.isRequired,
  xScale: PropTypes.func.isRequired,
  changeCurrentYear: PropTypes.func.isRequired,
  isShowAll: PropTypes.bool.isRequired
};

export default PrisonersArea;
