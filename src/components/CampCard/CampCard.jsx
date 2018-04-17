import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// utils
import { t } from '../../intl/helper';

// images
import close from '../cross.svg';

// components
import YearsOfOperation from './YearsOfOperation/YearsOfOperation';
import PrisonDescription from './PrisonDescription/PrisonDescription';
import PrisonChart from './PrisonChart/PrisonChart';
// import Gallery from './campDescription/Gallery/Gallery';
import Slider from './PrisonDescription/Slider/Slider';

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
import Gallery from './PrisonDescription/Gallery/Gallery.styled';

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

class CampCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      active: 0
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickActive = this.handleClickActive.bind(this);
  }

  handleOpen(e) {
    const active = parseInt(e.target.getAttribute('count'), 10);

    this.setState({ active });
    this.handleToggleVisible();
  }

  handleToggleVisible() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  handleClick(bool) {
    const { camp } = this.props;
    const { active } = this.state;
    const arr = getList(camp);
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

  render() {
    const { camp, lang, closeCard, activities } = this.props;
    if (!camp) {
      return null;
    }

    const activity = camp.get('activityId');
    const markup = camp.getIn(['description', lang]);

    return (
      <Container>
        <Top>
          <h1>{camp.getIn(['title', lang])}</h1>
          <Location>{camp.getIn(['subTitles', lang])}</Location>
          <CardButton onClick={closeCard}>
            <img src={close} alt='cross' />
          </CardButton>
        </Top>
        <Left>
          <HalfWidth>
            <Subtitle>{activity ? t('prisonCard.production') : ''}</Subtitle>
            <div>
              {activities.getIn([camp.get('activityId'), 'title', lang])}
            </div>
          </HalfWidth>
          <YearsOfOperation locations={camp.get('locations')} lang={lang} />
          <PrisonDescription markup={markup} />
        </Left>
        <Right>
          <Subtitle>{t('prisonCard.prisonersByYears')}</Subtitle>
          <PrisonChart locations={camp.get('locations')} lang={lang} />
        </Right>
        <Bottom>
          <Subtitle>Фото и документы</Subtitle>
          <Gallery onMouseDown={this.handleOpen} role='presentation'>
            {getList(camp).map(item => (
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
              list={getList(camp)}
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

CampCard.propTypes = {
  camp: PropTypes.object,
  lang: PropTypes.string.isRequired,
  closeCard: PropTypes.func.isRequired,
  activities: PropTypes.object
};

CampCard.defaultProps = {
  camp: null,
  activities: null
};

export default CampCard;
