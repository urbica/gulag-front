/* eslint-disable react/prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// styled
import Container from './Container';
import Period from './Period';
import Year from './Year';

const getWidth = (scale, endYear, startYear) => {
  const dateEnd = new Date(endYear, 0, 1);
  const dateStart = new Date(startYear, 0, 1);

  return Math.round(scale(dateEnd) - scale(dateStart));
};

const Periods = ({ width, height, margin, xScale, periods, dispatch }) => (
  <Container
    top={height + margin.top}
    width={width}
    left={margin.left}
  >
    {periods
      .toList()
      .map((period) => {
        const id = period.get('id');
        const yearStart = period.get('year_start');
        const yearEnd = period.get('year_end');
        const name = period.getIn(['name', 'ru']);

        return (
          <Period
            key={id}
            id={id}
            width={getWidth(xScale, yearEnd, yearStart)}
            onClick={dispatch.bind(null, push(`/period${id}`))}
          >
            <Year>{yearStart}</Year>
            <div>{name}</div>
          </Period>
        );
      })}
  </Container>
);

Periods.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  xScale: PropTypes.func,
  periods: PropTypes.shape({
    id: PropTypes.number,
    year_end: PropTypes.number,
    year_start: PropTypes.number,
    description: PropTypes.shape({
      ru: PropTypes.string,
      en: PropTypes.string,
      de: PropTypes.string
    }),
    name: PropTypes.shape({
      ru: PropTypes.string,
      en: PropTypes.string,
      de: PropTypes.string
    })
  })
};

export default connect()(Periods);
