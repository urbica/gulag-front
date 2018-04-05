import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from './Container';

const Preloader = ({ isDataLoading }) => (
  <Container unmountOnExit in={isDataLoading} timeout={400}>
    Loading
  </Container>
);

Preloader.propTypes = {
  isDataLoading: PropTypes.bool.isRequired
};

export default connect(state => ({
  isDataLoading: state.getIn(['ui', 'isDataLoading'])
}))(Preloader);
