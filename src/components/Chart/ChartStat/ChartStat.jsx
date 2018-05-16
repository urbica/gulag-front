import React from 'react';
import PropTypes from 'prop-types';

import { splitDigits } from '../../../utils/utils';
import { chartData, PRISONERS_AMOUNT, DEAD_AMOUNT } from '../config';

import { t } from '../../../intl/helper';

// styled
import Container from './Container';
import Amount from './Amount';
import Title from './Title';

const ChartStat = ({ currentYear, isShowAll }) => {
  const { prisoners, dead } = chartData.find(
    ({ year }) => year === currentYear
  );
  const slitedPrisoners = isShowAll
    ? splitDigits(PRISONERS_AMOUNT)
    : splitDigits(prisoners);
  const slitedDead = isShowAll ? splitDigits(DEAD_AMOUNT) : splitDigits(dead);

  return (
    <Container>
      <Amount color='white'>
        {prisoners > 0 || isShowAll ? slitedPrisoners : t('noData')}
      </Amount>
      <Title>{t('prisoners')}</Title>
      <Amount>{dead > 0 || isShowAll ? slitedDead : t('noData')}</Amount>
      <Title>{t('dead')}</Title>
    </Container>
  );
};

ChartStat.propTypes = {
  currentYear: PropTypes.number.isRequired,
  isShowAll: PropTypes.bool.isRequired
};

export default ChartStat;
