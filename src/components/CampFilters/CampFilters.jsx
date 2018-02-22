import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// selectors
import { isCampFiltersOpenSelector, typesSelector } from '../App/selectors';

// action creator
import { toggleCampFilters } from '../App/reducers/uiReducer';

// styled
import Container from './Container';
import Title from './Title';
import Switcher from './Switcher';

const CampFilters = ({ types, isCampFiltersOpen, closeCampFilters }) => (
  <Container
    mountOnEnter
    isCampFiltersOpen={isCampFiltersOpen}
    in={isCampFiltersOpen}
    timeout={400}
  >
    <div>
      <Title>CampFilters</Title>
      <button onClick={closeCampFilters}>close</button>
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
  types: PropTypes.object.isRequired,
  isCampFiltersOpen: PropTypes.bool.isRequired,
  closeCampFilters: PropTypes.func.isRequired
};

const selector = createSelector(
  typesSelector,
  isCampFiltersOpenSelector,
  (types, isCampFiltersOpen) => ({
    types,
    isCampFiltersOpen
  })
);
const mapDispatchToProps = dispatch => ({
  closeCampFilters: () => dispatch(toggleCampFilters())
});

export default connect(selector, mapDispatchToProps)(CampFilters);
