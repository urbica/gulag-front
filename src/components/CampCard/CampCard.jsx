import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Gallery from './PrisonDescription/Gallery/Gallery.styled';

// reducer && selector
// import {
//   changeCurrentYear, changeViewport
// } from '../App/reducers/uiReducer';
import { langSelector } from '../App/selectors';
import prisonSelector from './selector';

// images
import close from '../cross.svg';

// utils
import { getPeriods } from '../../utils/utils';
import { t } from '../../intl/helper';
// import parseMarkup from '../../utils/parseMarkup';

import PrisonDescription from './PrisonDescription/PrisonDescription';
// import PrisonChart from './PrisonChart/PrisonChart';

// styled
import Container from './Container';
import Top from './Top';
import Location from './Location';
import Left from './Left';
import HalfWidth from './HalfWidth';
import Subtitle from './Subtitle';
import Right from './Right';
import CardButton from './CardButton';
import Bottom from './Bottom';

// components
import Slider from './PrisonDescription/Slider/Slider';
// import Gallery from './PrisonDescription/Gallery/Gallery';

const getList = arr =>
  arr.get('photos').map((item, i) => ({
    src: item.get('path'),
    'title-ru': item.getIn(['title', 'ru']),
    'title-en': item.getIn(['title', 'en']),
    'title-de': item.getIn(['title', 'de']),
    'description-ru': item.getIn(['description', 'ru']),
    'description-en': item.getIn(['description', 'en']),
    'description-de': item.getIn(['description', 'de']),
    width: 2,
    height: 2,
    count: i
  }));

class PrisonCard extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpened: false,
      active: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClickActive = this.handleClickActive.bind(this);
  }

  handleClick(bool) {
    const { prison } = this.props;
    const { active } = this.state;
    const arr = getList(prison);
    if (bool) {
      this.setState({
        active: arr.get(active - 1) ? this.state.active - 1 : arr.size - 1
      });
    } else {
      this.setState({
        active: arr.get(active + 1) ? active + 1 : 0
      });
    }
  }
  handleClickActive(item) {
    this.setState({
      active: item
    });
  }

  handleOpen(e) {
    const active = parseInt(e.target.getAttribute('count'), 10);
    this.setState({
      active
    });
    this.handleToggleVisible();
  }
  // componentWillReceiveProps({ prison, history, dispatch }) {
  //   if (prison && history.action === 'POP') {
  //     const firstYear = prison.get('firstYear');
  //     const longitude = prison
  //       .getIn(['features', 0, 'geometry', 'coordinates', 0]);
  //     const latitude = prison
  //       .getIn(['features', 0, 'geometry', 'coordinates', 1]);
  //     dispatch(changeCurrentYear(firstYear));
  //     dispatch(changeViewport({ longitude, latitude }));
  //   }
  // }
  handleToggleVisible() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const { prison, dispatch, lang } = this.props;
    if (!prison) {
      return null;
    }

    const activity = prison.get('activity');
    const markup = prison.getIn(['description', lang]);

    return (
      <Container>
        <Top>
          <h1>{prison.getIn(['title', lang])}</h1>
          <Location>{prison.getIn(['subTitles', lang])}</Location>
          <CardButton onClick={dispatch.bind(null, push('/'))}>
            <img src={close} alt='cross' />
          </CardButton>
        </Top>
        <Left>
          <HalfWidth>
            <Subtitle>{t('prisonCard.yearsOfOperation')}</Subtitle>
            <div>{getPeriods(prison)}</div>
          </HalfWidth>
          <HalfWidth>
            <Subtitle>{activity ? t('prisonCard.production') : ''}</Subtitle>
            <div>{activity}</div>
          </HalfWidth>
          <div>
            <Subtitle>{t('prisonCard.location')}</Subtitle>
            <div>{prison.getIn(['location', lang])}</div>
          </div>
          <PrisonDescription markup={markup} />
        </Left>
        <Right>
          <Subtitle>{t('prisonCard.prisonersByYears')}</Subtitle>
          {/* <PrisonChart features={prison.get('features')} lang={lang} /> */}
        </Right>
        <Bottom>
          <Subtitle>Фото и документы</Subtitle>
          <Gallery onMouseDown={this.handleOpen} role='presentation'>
            {getList(prison).map(item => (
              <img
                src={item.src}
                alt={item['description-ru']}
                count={item.count}
                key={item.count}
              />
            ))}
          </Gallery>
          <section>
            <Slider
              handleToggleVisible={this.handleToggleVisible}
              photo={this.state}
              list={getList(prison)}
              active={this.state.active}
              handleClick={this.handleClick}
              handleClickActive={this.handleClickActive}
            />
          </section>
        </Bottom>
      </Container>
    );
  }
}

PrisonCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  prison: PropTypes.object
};

PrisonCard.defaultProps = {
  prison: null
};

export default connect((state, props) => ({
  lang: langSelector(state),
  prison: prisonSelector(state, props)
}))(PrisonCard);
