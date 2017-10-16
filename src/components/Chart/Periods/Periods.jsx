import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { height, margin } from '../config';

import { langSelector } from '../../App/selectors';

// styled
import Container from './Container';
import Period from './Period';
import Year from './Year';

const getWidth = (scale, endYear, startYear) => {
  const dateEnd = new Date(endYear, 0, 1);
  const dateStart = new Date(startYear, 0, 1);

  return Math.round(scale(dateEnd) - scale(dateStart));
};

const Periods = (props) => {
  const {
    width,
    xScale,
    periods,
    dispatch,
    lang
  } = props;

  return !periods ? null : (
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
          const name = period.getIn(['name', lang]);

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
};

Periods.propTypes = {
  width: PropTypes.number.isRequired,
  xScale: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  periods: PropTypes.object
};

Periods.defaultProps = {
  periods: null
};

export default connect(
  state => ({
    periods: state.getIn(['data', 'periods']),
    lang: langSelector(state)
  })
)(Periods);
