import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { t } from '../../intl/helper';

// action
import { toggleMenu } from '../App/reducers/uiReducer';

// icon
import menu from '../menu.svg';

// styled
import Container from './Container';
import Button from '../Button';
import Title from './Title';

const Menu = ({ dispatch, isDataLoading }) => (
  <Container in={!isDataLoading} timeout={400}>
    <Button
      onClick={() => {
        dispatch(push('/'));
        dispatch(toggleMenu());
      }}
    >
      <img src={menu} alt='menu' />
    </Button>
    <Title>{t('menu.title')}</Title>
  </Container>
);

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDataLoading: PropTypes.bool.isRequired
};

export default connect(state => ({
  isDataLoading: state.getIn(['ui', 'isDataLoading'])
}))(Menu);
