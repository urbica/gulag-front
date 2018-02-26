import React from 'react';
import PropTypes from 'prop-types';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Input from './Input';
import Item from './Item';
import Title from './Title';
import Periods from './Periods';
import Locations from './Locations';

const Search = ({ pushToRoot, camps, pushToCamp }) => (
  <FullScreenCard onClick={pushToRoot}>
    <Input
      placeholder='Поиск'
      onChange={() => ({})}
    />
    {camps.map(camp => (
      <Item
        key={camp.get('id')}
        onClick={pushToCamp.bind(null, camp.get('id'))}
      >
        <Title>{camp.get('name')}</Title>
        <Periods>{camp.get('periods')}</Periods>
        <Locations>{camp.get('locations')}</Locations>
      </Item>
    ))}
  </FullScreenCard>
);

Search.propTypes = {
  pushToRoot: PropTypes.func.isRequired,
  camps: PropTypes.object.isRequired,
  pushToCamp: PropTypes.func.isRequired
};

export default Search;
