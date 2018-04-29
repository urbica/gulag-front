import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';

import Container from './Container';

import { mainFontColour } from '../../../../config/styles';

import { splitDigits } from '../../../../utils/utils';

class PrisonersArea extends PureComponent {
  constructor(props) {
    super(props);

    this.gRef = React.createRef();
    this.createArea = this.createArea.bind(this);
  }

  componentDidMount() {
    this.createArea();
  }

  createArea() {
    const { data, xScale, yScale, lang } = this.props;
    const prisonersArea = select(this.gRef.current);

    // creating bar
    prisonersArea
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', ({ year }) => yScale(new Date(year, 0, 1)) + 1)
      .attr('width', ({ prisonersCount }) => xScale(prisonersCount))
      .attr('height', 25);

    // creating bar border
    prisonersArea
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr(
        'stroke',
        ({ prisonersCount }) =>
          prisonersCount !== 0 && prisonersCount !== null
            ? mainFontColour
            : 'transparent'
      )
      .attr('x1', ({ prisonersCount }) => xScale(prisonersCount))
      .attr('x2', ({ prisonersCount }) => xScale(prisonersCount))
      .attr('y1', ({ year }) => yScale(new Date(year, 0, 1)) + 1)
      .attr('y2', ({ year }) => yScale(new Date(year, 11, 31)));

    // creating prisoners amount
    prisonersArea
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
      .attr('x', ({ prisonersCount }) => xScale(prisonersCount) + 10)
      .attr('y', ({ year }) => yScale(new Date(year, 0, 1)) + 19);

    // creating "no data"
    prisonersArea
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('text')
      .text(({ prisonersCount }) => {
        if (prisonersCount === 0 || prisonersCount === null) {
          return lang === 'ru' ? 'нет данных' : 'no data';
        }
        return '';
      })
      .attr('x', 10)
      .attr('y', ({ year }) => yScale(new Date(year, 0, 1)) + 19);
  }

  render() {
    return <Container innerRef={this.gRef} />;
  }
}

PrisonersArea.propTypes = {
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      prisonersCount: PropTypes.number,
      year: PropTypes.number
    })
  ).isRequired,
  lang: PropTypes.string.isRequired
};

export default PrisonersArea;
