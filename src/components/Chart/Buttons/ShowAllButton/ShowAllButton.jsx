import React from 'react';
import PropTypes from 'prop-types';

// translator
import { t } from '../../../../intl/helper';

// icon
import chart from './chart.svg';

// styled
import Button from './styled/Button';
import Text from './styled/Text';

const ShowAllButton = ({ onClick, isShowAll }) => (
  <Button onClick={onClick} isShowAll={isShowAll}>
    {/* img styled in Button */}
    <img src={chart} alt='chart-icon' />
    <Text>{t('showAllButton')}</Text>
  </Button>
);

ShowAllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowAll: PropTypes.bool.isRequired
};

export default ShowAllButton;
