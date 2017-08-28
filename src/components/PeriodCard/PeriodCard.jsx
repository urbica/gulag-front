import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeCurrentPeriod } from '../../reducers/ui';

import CardButton from '../Buttons/CardButton';

// icons
import close from '../../icons/btn-close.svg';

// styled
import Container from './Container';
import Title from './Title';
import Period from './Period';
import Description from './Description';

const PeriodCard = ({ period, dispatch, currentPeriod }) => (currentPeriod ? (
  <Container>
    <CardButton onClick={dispatch.bind(null, changeCurrentPeriod(null))}>
      <img src={close} alt='cross' />
    </CardButton>
    <Title>{period.name.ru}</Title>
    <Period>{`${period.year_start} – ${period.year_end}`}</Period>
    <Description>{period.description.ru}</Description>
  </Container>
) : null);

PeriodCard.propTypes = {
  period: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentPeriod: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    period: state.ui.currentPeriod ? state.data.periods[state.ui.currentPeriod] : null,
    currentPeriod: state.ui.currentPeriod
  })
)(PeriodCard);
