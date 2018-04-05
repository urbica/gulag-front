import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
import parseMarkup from '../../utils/parseMarkup';

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
import Gallery from './PrisonDescription/Gallery/Gallery';

class PrisonCard extends PureComponent {
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
          {parseMarkup(markup).map((elem, i) => {
            switch (elem.type) {
              case 'gallery': {
                const photos = [];
                elem.payload.split('![](').forEach((e, index) => {
                  if (index > 0) {
                    const photoWithDesc = e.split(')\n');
                    photos.push({
                      src: photoWithDesc[0],
                      desc: photoWithDesc[1]
                    });
                  }
                });

                return (
                  <Gallery
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    photos={photos}
                  />
                );
              }
              default:
                return null;
            }
          })}
        </Bottom>
      </Container>
    );
  }
}

PrisonCard.propTypes = {
  // history: PropTypes.object.isRequired,
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
