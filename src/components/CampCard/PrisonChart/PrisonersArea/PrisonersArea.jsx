/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';

import Container from './Container';

import { splitDigits } from '../../../../utils/utils';

class PrisonersArea extends PureComponent {
  componentDidMount() {
    const { data, xScale, yScale } = this.props;

    this.prisonersRect = this.g
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 1;
      })
      .attr('width', d => xScale(d.prisonersCount))
      .attr('height', 25);

    this.prisonersLine = this.g
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr(
        'stroke',
        d =>
          d.prisonersCount !== 0 && d.prisonersCount !== null
            ? '#fff'
            : 'transparent'
      )
      .attr('x1', d => xScale(d.prisonersCount))
      .attr('y1', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 1;
      })
      .attr('x2', d => xScale(d.prisonersCount))
      .attr('y2', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 26;
      });

    this.prisonersText = this.g
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(
        ({ prisonersCount }) =>
          prisonersCount !== 0 && prisonersCount !== null
            ? splitDigits(prisonersCount)
            : ''
      )
      .attr('x', d => xScale(d.prisonersCount) + 10)
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 19;
      });

    this.noDataText = this.g
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('text')
      .text(({ prisonersCount }) => {
        if (prisonersCount === 0 || prisonersCount === null) {
          if (this.props.lang === 'ru') {
            return 'нет данных';
          }
          return 'no data';
        }
        return '';
      })
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date);
      });
  }

  componentWillReceiveProps(nextProps) {
    const { data, xScale, yScale } = nextProps;
    this.prisonersRect.remove();
    this.prisonersLine.remove();
    this.prisonersText.remove();
    this.noDataText.remove();

    this.prisonersRect = this.g
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 1;
      })
      .attr('width', d => xScale(d.prisonersCount))
      .attr('height', 25);

    this.prisonersLine = this.g
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr(
        'stroke',
        d =>
          d.prisonersCount !== 0 && d.prisonersCount !== null
            ? '#fff'
            : 'transparent'
      )
      .attr('x1', d => xScale(d.prisonersCount))
      .attr('y1', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 1;
      })
      .attr('x2', d => xScale(d.prisonersCount))
      .attr('y2', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 26;
      });

    this.prisonersText = this.g
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(
        ({ prisonersCount }) =>
          prisonersCount !== 0 && prisonersCount !== null
            ? splitDigits(prisonersCount)
            : ''
      )
      .attr('x', d => xScale(d.prisonersCount) + 10)
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date) + 19;
      });

    this.noDataText = this.g
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('text')
      .text(({ prisonersCount }) => {
        if (prisonersCount === 0 || prisonersCount === null) {
          if (this.props.lang === 'ru') {
            return 'нет данных';
          }
          return 'no data';
        }
        return '';
      })
      .attr('y', d => {
        const date = new Date(d.year, 0, 1);
        return yScale(date);
      });
  }

  render() {
    return (
      <Container
        innerRef={ref => {
          this.g = select(ref);
        }}
      />
    );
  }
}

PrisonersArea.propTypes = {
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      prisonersCount: PropTypes.number,
      year: PropTypes.number
    })
  )
};

export default PrisonersArea;
