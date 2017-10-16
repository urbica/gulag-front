/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { t } from '../../intl/helper';

import ChartButton from '../Buttons/ChartButton';

const Button = styled(ChartButton)`
  font-size: 12px;
  background-color: ${({ showAll }) => (showAll ? '#000' : 'rgba(0,0,0,.5)')};
  color: ${({ showAll }) => (showAll ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,.6)')};
  @media (max-width: 1023px) {
    display: none;
  }
`;

const Text = styled.div`
  margin-top: -2px;
`;
const PlayButton = ({ onClick, showAll }) => (
  <Button
    onClick={onClick}
    showAll={showAll}
  >
    <Text>{t('showAllButton')}</Text>
  </Button>
);

PlayButton.propTypes = {
  onClick: PropTypes.func,
  showAll: PropTypes.bool
};

export default PlayButton;
