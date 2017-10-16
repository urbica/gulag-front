import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// reducer && selector
import { changeCurrentYear, changeViewport } from '../../../reducers/ui';
import { langSelector } from '../../App/selectors';
import prisonSelector from './selector';

// images
import close from '../../../icons/btn-close.svg';

// utils
// import { getPeriods } from '../../utils';
import { t } from '../../../intl/helper';

import PrisonDescription from './PrisonDescription/PrisonDescription';
import PrisonChart from './PrisonChart/PrisonChart';

// styled
import Container from './Container';
import Top from './Top';
import Location from './Location';
import Left from './Left';
import HalfWidth from './HalfWidth';
import Subtitle from './Subtitle';
import Right from './Right';
import CardButton from '../../Buttons/CardButton';

class PrisonCard extends PureComponent {
  componentWillReceiveProps({ prison, history, dispatch }) {
    if (prison && history.action === 'POP') {
      const firstYear = prison.get('firstYear');
      const longitude = prison.getIn(['features', 0, 'geometry', 'coordinates', 0]);
      const latitude = prison.getIn(['features', 0, 'geometry', 'coordinates', 1]);
      dispatch(changeCurrentYear(firstYear));
      dispatch(changeViewport({ longitude, latitude }));
    }
  }

  render() {
    const { prison, dispatch, lang } = this.props;
    if (!prison) {
      return null;
    }
    const activity = prison.get('activity');

    return (
      <Container>
        <Top>
          <h1>{prison.getIn(['name', lang])}</h1>
          <Location>{prison.getIn(['additional_names', lang])}</Location>
          <CardButton onClick={dispatch.bind(null, push('/'))}>
            <img src={close} alt='cross' />
          </CardButton>
        </Top>
        <Left>
          <HalfWidth>
            <Subtitle>{t('prisonCard.yearsOfOperation')}</Subtitle>
            {/* <div>{getPeriods(prison)}</div> */}
          </HalfWidth>
          <HalfWidth>
            <Subtitle>{activity ? t('prisonCard.production') : ''}</Subtitle>
            <div>{activity}</div>
          </HalfWidth>
          <div>
            <Subtitle>{t('prisonCard.location')}</Subtitle>
            <div>{prison.getIn(['location', lang])}</div>
          </div>
          <PrisonDescription markup={prison.getIn(['description', lang])} />
        </Left>
        <Right>
          <Subtitle>{t('prisonCard.prisonersByYears')}</Subtitle>
          <PrisonChart features={prison.get('features')} />
        </Right>
      </Container>
    );
  }
}

PrisonCard.propTypes = {
  prison: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

PrisonCard.defaultProps = {
  prison: null
};

export default connect(
  (state, props) => ({
    prison: prisonSelector(state, props),
    lang: langSelector(state)
  })
)(PrisonCard);
