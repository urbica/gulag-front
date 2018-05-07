import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// utils
import { t } from '../../intl/helper';

// images
import cross from '../cross.svg';

// components
import YearsOfOperation from './YearsOfOperation/YearsOfOperation';
import CampDescription from './CampDescription/CampDescription';
import PrisonChart from './PrisonChart/PrisonChart';
// import Gallery from './campDescription/Gallery/Gallery';
import Slider from './CampDescription/Slider/Slider';

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
import Gallery from './CampDescription/Gallery/Gallery.styled';

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
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  componentDidMount() {
    const {
      currentYear,
      camp,
      changeCurrentYear,
      campTypeFilters,
      toggleCampTypeFilters
    } = this.props;
    const coordinates = camp
      .getIn(['locations', 0, 'geometry', 'coordinates'])
      .toJS();
    const newViewport = {
      latitude: coordinates[1],
      longitude: coordinates[0]
    };
    const campYears = camp
      .get('locations')
      .flatMap(location => location.get('statistics'))
      .map(statistics => statistics.get('year'));

    const links = document.querySelectorAll('#campDescription a');
    links.forEach(link => link.addEventListener('click', this.linkOnClick));

    if (!campTypeFilters.get(camp.get('typeId').toString())) {
      toggleCampTypeFilters(camp.get('typeId').toString());
    }

    if (!campYears.includes(currentYear)) {
      changeCurrentYear(campYears.first());
    }
    this.props.changeViewport(newViewport);
  }

  linkOnClick(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
    this.props.openCard(event.target.href.match(/camp\d+/)[0]);
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
    const arr = getList(camp);

    if (bool) {
      this.setState(({ active }) => ({
        active: arr.get(active - 1) ? active - 1 : arr.size - 1
      }));
    } else {
      this.setState(({ active }) => ({
        active: arr.get(active + 1) ? active + 1 : 0
      }));
    }
  }

  handleClickActive(item) {
    this.setState({
      active: item
    });
  }

  render() {
    const { camp, lang, closeCard, activities } = this.props;

    document.title = camp.getIn(['title', lang]);

    const activity = camp.get('activityId');
    const markup = camp.getIn(['description', lang]);

    return (
      <Container>
        <Top>
          <h1>{camp.getIn(['title', lang])}</h1>
          <Location>{camp.getIn(['subTitles', lang])}</Location>
          <CardButton onClick={closeCard}>
            <img src={cross} alt='cross' />
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
          <CampDescription markup={markup} />
        </Left>
        <Right>
          <Subtitle>{t('prisonCard.prisonersByYears')}</Subtitle>
          <PrisonChart locations={camp.get('locations')} lang={lang} />
        </Right>
        {camp.get('photos').size > 0 && (
          <Bottom>
            <Subtitle>{t('prisonCard.photo')}</Subtitle>
            <Gallery onMouseDown={this.handleOpen} role='presentation'>
              {getList(camp).map(item => (
                <img
                  src={`/${item.src}`}
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
        )}
      </Container>
    );
  }
}

CampCard.propTypes = {
  camp: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  closeCard: PropTypes.func.isRequired,
  openCard: PropTypes.func.isRequired,
  activities: PropTypes.object.isRequired,
  changeViewport: PropTypes.func.isRequired,
  currentYear: PropTypes.number.isRequired,
  changeCurrentYear: PropTypes.func.isRequired,
  campTypeFilters: PropTypes.object.isRequired,
  toggleCampTypeFilters: PropTypes.func.isRequired
};

export default CampCard;
