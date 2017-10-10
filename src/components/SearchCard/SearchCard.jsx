import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// utils
// import { getRightLang, getPeriods } from '../../../utils/utils';
// import getFirstYear from '../../../utils/prison-utils';

// ico
import cross from '../../icons/btn-close.svg';

import CardButton from '../Buttons/CardButton';

// styled
import Container from './Container';
import Header from './Header';
import Input from './Input';
import Item from './Item';
import Name from './Name';
// import Periods from './Periods';
// import Location from './Location';

class SearchCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    // this.input.focus();
  }

  onSearchChange(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    const {
      prisons
      // setYear,
      // places
    } = this.props;

    if (!prisons) {
      return null;
    }

    const onChange = event => this.onSearchChange(event.target.value);

    const handleOnChange = (event) => {
      event.persist();
      onChange(event);
    };

    const search = this.state.searchQuery.trim().toLowerCase();
    const prisonsFilteredBySearch = prisons.filter(
      prison =>
        prison.getIn(['name', 'ru']).toLowerCase().match(search) ||
        prison.getIn(['additional_names', 'ru']).toLowerCase().match(search) ||
        prison.getIn(['description', 'ru']).toLowerCase().match(search)
    );

    return (
      <Container>
        <Header>
          <Input
            placeholder='Поиск'
            onChange={handleOnChange}
            innerRef={(ref) => {
              this.input = ref;
            }}
          />
          <CardButton onClick={this.props.dispatch.bind(null, push('/'))}>
            <img src={cross} alt='cross' />
          </CardButton>
        </Header>
        <div>
          {
            prisonsFilteredBySearch
              .toList()
              .map(prison => (
                <Item
                  key={prison.get('id')}
                  onClick={this.props.dispatch.bind(null, push(`/prison${prison.get('id')}`))}
                >
                  <Name>{prison.getIn(['name', 'ru'])}</Name>
                  {/* <Periods>{getPeriods(p)}</Periods> */}
                  {/* <Location>{places[p.place_id] ? places[p.place_id].name : ''}</Location> */}
                </Item>
              ))
          }
        </div>
      </Container>
    );
  }
}

SearchCard.propTypes = {
  prisons: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

SearchCard.defaultProps = {
  prisons: null
};

export default connect(
  state => ({ prisons: state.getIn(['data', 'prisons']) })
)(SearchCard);
