import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ReactMarkdown from 'react-markdown';

import { changeCurrentPrison } from '../../reducers/ui';
import PrisonChart from './PrisonChart';

// images
import close from '../../icons/btn-close.svg';
import preloader from '../../icons/preloader.svg';

// utils
// import { getPeriods, getRightLang } from '../../utils';
// import getFirstYear from '../../../utils/prison-utils';

// styled
import Container from './Container';
import Preloader from './Preloader';
import Top from './Top';
// import Location from './Location';
import Left from './Left';
import HalfWidth from './HalfWidth';
import Subtitle from './Subtitle';
import MarkdownStyled from './MarkdownStyled';
import Right from './Right';
import CardButton from '../Buttons/CardButton';

class PrisonCard extends PureComponent {
  render() {
    // const { prison, activities, currentPrison, currentLanguage } = this.props;
    const { prison, activities, currentPrison } = this.props;

    const activity =
      prison && prison.activity_id && activities && activities[prison.activity_id]
        ? activities[prison.activity_id].name
        : '';

    const activityTitle =
      prison && prison.activity_id && activities && activities[prison.activity_id]
        ? 'Тип деятельности'
        : '';

    if (!prison && currentPrison) {
      return (
        <Container>
          <Preloader src={preloader} alt='preloader' />
        </Container>
      );
    }

    return currentPrison ? (
      <Container>
        <Top>
          {/* <h1>{getRightLang(prison.name, currentLanguage)}</h1> */}
          {/* <Location>{getRightLang(prison.additional_names, currentLanguage)}</Location> */}
          <CardButton onClick={this.props.dispatch.bind(null, changeCurrentPrison(null))}>
            <img src={close} alt='cross' />
          </CardButton>
        </Top>
        <Left>
          <HalfWidth>
            <Subtitle>Годы существования</Subtitle>
            {/* <div>{getPeriods(prison)}</div> */}
          </HalfWidth>
          <HalfWidth>
            <Subtitle>{activityTitle}</Subtitle>
            <div>{activity}</div>
          </HalfWidth>
          <div>
            <Subtitle>Местоположение</Subtitle>
            {/* <div>{getRightLang(prison.location, currentLanguage)}</div> */}
          </div>
          <MarkdownStyled>
            {/* <ReactMarkdown source={getRightLang(prison.description, currentLanguage)} /> */}
          </MarkdownStyled>
        </Left>
        <Right>
          <Subtitle>Количество заключенных по годам</Subtitle>
          <PrisonChart features={prison.features} />
        </Right>
      </Container>
    ) : null;
  }
}

PrisonCard.propTypes = {
  prison: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  currentPrison: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({
    currentPrison: state.ui.currentPrison,
    prison: state.data.prisons ? state.data.prisons[state.ui.currentPrison] : null,
    activities: state.data.activities
  })
)(PrisonCard);
