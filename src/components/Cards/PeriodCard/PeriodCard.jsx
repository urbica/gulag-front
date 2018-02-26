import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { langSelector } from '../../App/selectors';
import periodSelector from './selector';

import CardButton from '../CardButton';

// icons
import close from '../../FullScreenCard/btn-close.svg';

// styled
import Container from './Container';
import Title from './Title';
import Period from './Period';
import Description from './Description';

const PeriodCard = ({ period, dispatch, lang }) => (
  !period ? null : (
    <Container>
      <CardButton onClick={dispatch.bind(null, push('/'))}>
        <img src={close} alt='cross' />
      </CardButton>
      <Title>{period.getIn(['name', lang])}</Title>
      <Period>{`${period.get('year_start')} – ${period.get('year_end')}`}</Period>
      <Description>{period.getIn(['description', lang])}</Description>
    </Container>
  )
);

PeriodCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  period: PropTypes.object
};

PeriodCard.defaultProps = {
  period: null
};

export default connect(
  (state, props) => ({
    lang: langSelector(state),
    period: periodSelector(state, props)
  })
)(PeriodCard);
