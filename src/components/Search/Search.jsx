import React from 'react';
import PropTypes from 'prop-types';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Input from './Input';
import Item from './Item';
import Title from './Title';
// import Periods from './Periods';
// import Locations from './Locations';

const Search = (props) => {
  const {
    pushToRoot, camps, pushToCamp, lang
  } = props;
  return (
    <FullScreenCard onClick={pushToRoot}>
      <Input placeholder='Поиск' onChange={() => ({})} />
      {camps.map(camp => (
        <Item key={camp.get('id')} onClick={pushToCamp.bind(null, camp.get('id'))}>
          <Title>{camp.getIn(['title', lang])}</Title>
          {/* <Periods>{camp.get('periods')}</Periods> */}
          {/* <Locations>{camp.get('locations')}</Locations> */}
        </Item>
      ))}
    </FullScreenCard>
  );
};

Search.propTypes = {
  pushToRoot: PropTypes.func.isRequired,
  camps: PropTypes.object.isRequired,
  pushToCamp: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

export default Search;
