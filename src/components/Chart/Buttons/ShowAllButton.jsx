import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { t } from '../../../intl/helper';

import chart from './chart.svg';

import ChartButton from './ChartButton';

const Button = styled(ChartButton)`
  position: relative;

  font-size: 12px;
  color: rgba(255, 255, 255, ${({ isShowAll }) => (isShowAll ? '1' : '0.6')});

  background-color: ${({ isShowAll }) =>
    isShowAll ? '#000' : 'rgba(0,0,0,.5)'};

  @media (max-width: 1023px) {
    display: none;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 10px;
  left: calc(100% + 7px);
`;

const ShowAllButton = ({ onClick, isShowAll }) => (
  <Button onClick={onClick} isShowAll={isShowAll}>
    <img src={chart} alt='chart-icon' />
    <Text>{t('showAllButton')}</Text>
  </Button>
);

ShowAllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowAll: PropTypes.bool.isRequired
};

export default ShowAllButton;
