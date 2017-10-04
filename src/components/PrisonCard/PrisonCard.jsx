import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import prisonSelector from './selector';

import PrisonChart from './PrisonChart/PrisonChart';

// images
import close from '../../icons/btn-close.svg';

// utils
// import { getPeriods } from '../../utils';

// styled
import Container from './Container';
import Top from './Top';
import Location from './Location';
import Left from './Left';
import HalfWidth from './HalfWidth';
import Subtitle from './Subtitle';
import MarkdownStyled from './MarkdownStyled';
import Right from './Right';
import CardButton from '../Buttons/CardButton';

const PrisonCard = ({ prison, dispatch }) => {
  if (!prison) {
    return null;
  }
  const activity = prison.get('activity');
  const activityTitle = activity ? 'Тип деятельности' : '';

  return (
    <Container>
      <Top>
        <h1>{prison.getIn(['name', 'ru'])}</h1>
        <Location>{prison.getIn(['additional_names', 'ru'])}</Location>
        <CardButton onClick={dispatch.bind(null, push('/'))}>
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
          <div>{prison.getIn(['location', 'ru'])}</div>
        </div>
        <MarkdownStyled>
          {/* <ReactMarkdown source={getRightLang(prison.description, currentLanguage)} /> */}
        </MarkdownStyled>
      </Left>
      <Right>
        <Subtitle>Количество заключенных по годам</Subtitle>
        <PrisonChart features={prison.get('features')} />
      </Right>
    </Container>
  );
};

PrisonCard.propTypes = {
  prison: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

PrisonCard.defaultProps = {
  prison: null
};

export default connect(
  (state, props) => ({ prison: prisonSelector(state, props) })
)(PrisonCard);
