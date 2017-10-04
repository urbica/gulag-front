import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import currentPeriodSelector from './selectors';

import CardButton from '../Buttons/CardButton';

// icons
import close from '../../icons/btn-close.svg';

// styled
import Container from './Container';
import Title from './Title';
import Period from './Period';
import Description from './Description';

const PeriodCard = ({ period, dispatch }) => (
  !period ? null : (
    <Container>
      <CardButton onClick={() => dispatch(push('/'))}>
        <img src={close} alt='cross' />
      </CardButton>
      <Title>{period.getIn(['name', 'ru'])}</Title>
      <Period>{`${period.get('year_start')} – ${period.get('year_end')}`}</Period>
      <Description>{period.getIn(['description', 'ru'])}</Description>
    </Container>
  )
);

PeriodCard.propTypes = {
  period: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

PeriodCard.defaultProps = {
  period: null
};

export default connect(
  (state, props) => ({
    period: currentPeriodSelector(state, props)
  })
)(PeriodCard);
