import React from 'react';
import PropTypes from 'prop-types';
import { t } from '../../intl/helper';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Title from './Title';
import Period from './Period';
import Year from './Year';
import PeriodTitle from './PeriodTitle';
import Description from './Description';

const Chronology = ({ pushToRoot, periods }) => (
  <FullScreenCard onClick={pushToRoot}>
    <Title>{t('aside.gulagChronology')}</Title>
    {periods.map(period => (
      <Period key={period.get('id')}>
        <Year>{period.get('year')}</Year>
        <PeriodTitle>{period.getIn(['title', 'ru'])}</PeriodTitle>
        <Description>{period.getIn(['description', 'ru'])}</Description>
      </Period>
    ))}
  </FullScreenCard>
);

Chronology.propTypes = {
  pushToRoot: PropTypes.func.isRequired,
  periods: PropTypes.object.isRequired
};

export default Chronology;
