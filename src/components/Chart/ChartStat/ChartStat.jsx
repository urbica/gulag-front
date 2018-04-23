import React from 'react';
import PropTypes from 'prop-types';

import { splitDigits } from '../../../utils/utils';
import { chartData } from '../config';

import { t } from '../../../intl/helper';

// styled
import Container from './Container';
import Amount from './Amount';
import Title from './Title';

const ChartStat = ({ currentYear }) => {
  const { prisoners, dead } = chartData.find(
    ({ year }) => year === currentYear
  );
  const slitedPrisoners = splitDigits(prisoners);
  const slitedDead = splitDigits(dead);

  return (
    <Container>
      <Amount color='white'>
        {prisoners > 0 ? slitedPrisoners : t('noData')}
      </Amount>
      <Title>{t('prisoners')}</Title>
      <Amount>{dead > 0 ? slitedDead : t('noData')}</Amount>
      <Title>{t('deads')}</Title>
    </Container>
  );
};

ChartStat.propTypes = {
  currentYear: PropTypes.number.isRequired
};

export default ChartStat;
