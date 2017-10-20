import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { t } from '../../../intl/helper';

import ChartButton from './ChartButton';

const Button = styled(ChartButton)`
  font-size: 12px;
  background-color: ${({ isShowAll }) => (isShowAll ? '#000' : 'rgba(0,0,0,.5)')};
  color: ${({ isShowAll }) => (isShowAll ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,.6)')};
  @media (max-width: 1023px) {
    display: none;
  }
`;

const Text = styled.div`
  margin-top: -2px;
`;
const ShowAllButton = ({ onClick, isShowAll }) => (
  <Button
    onClick={onClick}
    isShowAll={isShowAll}
  >
    <Text>{t('showAllButton')}</Text>
  </Button>
);

ShowAllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowAll: PropTypes.bool.isRequired
};

export default ShowAllButton;
