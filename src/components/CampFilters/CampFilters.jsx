import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// styled
import Container from './Container';
import Title from './Title';
import Switcher from './Switcher';

const CampFilters = ({ types }) => (
  <Container>
    <div>
      <Title>CampFilters</Title>
      <button>close</button>
    </div>
    {types.map(type => (
      <div key={type.get('id')}>
        <div>{type.get('name')}</div>
        <Switcher typeId={type.get('id')} />
      </div>
    ))}
  </Container>
);

CampFilters.propTypes = {
  types: PropTypes.object.isRequired
};

export default connect(state => ({ types: state.getIn(['data', 'types']) }))(CampFilters);
