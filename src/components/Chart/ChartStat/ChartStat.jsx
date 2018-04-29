import React from 'react';
import PropTypes from 'prop-types';

import { splitDigits } from '../../../utils/utils';
import { chartData } from '../config';

import { t } from '../../../intl/helper';

// styled
import Container from './Container';
import Amount from './Amount';
import Title from './Title';

const ChartStat = ({ currentYear, isShowAll }) => {
  const { prisoners, dead } = chartData.find(
    ({ year }) => year === currentYear
  );
  const { allPrisoners, allDead } = chartData.reduce(
    (acc, val) => ({
      allPrisoners: acc.allPrisoners + val.prisoners,
      allDead: acc.allDead + val.dead
    }),
    { allPrisoners: 0, allDead: 0 }
  );
  const slitedPrisoners = isShowAll
    ? splitDigits(allPrisoners)
    : splitDigits(prisoners);
  const slitedDead = isShowAll ? splitDigits(allDead) : splitDigits(dead);

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
