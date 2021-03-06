import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getPeriods } from '../../utils/utils';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Input from './Input';
import Item from './Item';
import Title from './Title';
import Periods from './Periods';
import Locations from './Locations';

const placeholder = {
  ru: 'Поиск',
  en: 'Search'
};

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };

    this.inputRef = React.createRef();

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onSearchChange(e) {
    const searchQuery = e.target.value;

    this.setState({ searchQuery });
  }

  render() {
    const { searchQuery } = this.state;
    const { closeCard, camps, openCampCard, lang, regions } = this.props;

    const search = searchQuery.trim().toLowerCase();
    const campsFilteredBySearch = camps.filter(
      camp =>
        camp
          .getIn(['title', lang])
          .toLowerCase()
          .match(search) ||
        camp
          .getIn(['subTitles', lang])
          .toLowerCase()
          .match(search) ||
        camp
          .getIn(['description', lang])
          .toLowerCase()
          .match(search)
    );

    return (
      <FullScreenCard onClick={closeCard}>
        <Input
          innerRef={this.inputRef}
          placeholder={placeholder[lang]}
          onChange={this.onSearchChange}
        />
        {campsFilteredBySearch.map(camp => (
          <Item
            key={camp.get('id')}
            onClick={openCampCard.bind(null, camp.get('id'))}
          >
            <Title>{camp.getIn(['title', lang])}</Title>
            <Periods>{getPeriods(camp.get('locations'))}</Periods>
            <Locations>
              {regions.getIn([camp.get('regionId'), 'title', lang])}
            </Locations>
          </Item>
        ))}
      </FullScreenCard>
    );
  }
}

Search.propTypes = {
  closeCard: PropTypes.func.isRequired,
  camps: PropTypes.object.isRequired,
  openCampCard: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  regions: PropTypes.object.isRequired
};

export default Search;
