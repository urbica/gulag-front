import React from 'react';
import PropTypes from 'prop-types';

// utils
import { t } from '../../../intl/helper';

// styled
import Title from './Title';
import Location from './Location';
import Period from './Period';

const YearsOfOperation = ({ locations, lang }) => (
  <div>
    <Title>{t('prisonCard.yearsOfOperation')}</Title>
    {locations
      .sort((a, b) => a.get('orderIndex') > b.get('orderIndex'))
      .map(location => {
        if (location.get('statistics').size > 0) {
          let period;
          if (location.get('statistics').size === 1) {
            period = location.getIn(['statistics', 0, 'year']);
          } else {
            const firstYear = location
              .get('statistics')
              .first()
              .get('year');
            const lastYear = location
              .get('statistics')
              .last()
              .get('year');

            period = `${firstYear}—${lastYear}`;
          }

          return (
            <Location key={location.get('id')}>
              <Period>{period}</Period>
              <div>{location.getIn(['description', lang])}</div>
            </Location>
          );
        }
        return null;
      })}
  </div>
);

YearsOfOperation.propTypes = {
  locations: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

export default YearsOfOperation;
