import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { t } from '../../intl/helper';

import { chartData } from '../Chart/config';

// styled
import Container from './Container';
import HeaderCenterGroup from './HeaderCenterGroup';
import Desc from './Desc';
import Amount from './Amount';
import Group from './Group';
import HeaderButton from '../Buttons/HeaderButton';

// icons
import search from '../../icons/btn-search.svg';
import info from '../../icons/btn-info.svg';
import { splitDigits } from '../../utils/utils';

const formatedData = chartData.reduce((acc, year) => {
  acc[year.year] = year;
  return acc;
}, {});

const Header = (props) => {
  const { currentYear, isShowAllPrisons } = props;

  const dataSearchingStr = 'данные уточняются';
  let notMobilePrisoners = true;
  let notMobileDead = true;

  if (window.innerWidth < 530) {
    notMobilePrisoners = formatedData[currentYear].prisoners !== 0;
    notMobileDead = formatedData[currentYear].dead !== 0;
  }

  const prisonersAmount = notMobilePrisoners && formatedData[currentYear].prisoners !== 0 ?
    splitDigits(formatedData[currentYear].prisoners) : dataSearchingStr;
  const deadAmount = notMobileDead && formatedData[currentYear].dead !== 0 ?
    splitDigits(formatedData[currentYear].dead) : dataSearchingStr;

  let prisonsAmount = 0;
  if (props.prisons) {
    prisonsAmount = props.prisons
      .filter(prison => prison.getIn(['published', 'ru']))
      .size;
  }

  return (
    <Container>
      <HeaderButton onClick={props.dispatch.bind(null, push('/search'))}>
        <img src={search} alt='loupe-icon' />
      </HeaderButton>
      <HeaderCenterGroup>
        <Group>
          <div>
            <div>{(isShowAllPrisons) ? '1918 – 1960' : currentYear}</div>
            <Desc>{(isShowAllPrisons) ? t('header.years') : t('header.year')}</Desc>
          </div>
        </Group>
        {
          !isShowAllPrisons &&
          notMobilePrisoners &&
          <Group>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='37'>
              <g fill='#FFF' fillRule='evenodd'>
                <path d='M0 0h22v37H0z' opacity='.1' />
                <path d='M0 0h22v2H0z' />
              </g>
            </svg>
            <div>
              <Amount>{`${prisonersAmount}\n`}</Amount>
              <Desc>{t('header.prisoners')}</Desc>
            </div>
          </Group>
        }
        {
          !isShowAllPrisons &&
          notMobileDead &&
          <Group>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='37'>
              <g fill='none' fillRule='evenodd'>
                <path fill='#544B52' d='M0 0h22v37H0z' opacity='.5' />
                <path fill='#FF4127' d='M0 0h22v2H0z' />
              </g>
            </svg>
            <div>
              <Amount>{`${deadAmount}\n`}</Amount>
              <Desc>{t('header.dead')}</Desc>
            </div>
          </Group>
        }
        {
          isShowAllPrisons &&
          <Group>
            <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35'>
              <g fill='#E53F02' fillRule='evenodd'>
                <circle cx='17.5' cy='17.5' r='17.5' opacity='.3' />
                <circle cx='18' cy='18' r='1' />
              </g>
            </svg>
            <div>
              {`${prisonsAmount}\n`}
              <Desc>{t('header.camps')}</Desc>
            </div>
          </Group>
        }
      </HeaderCenterGroup>
      <HeaderButton onClick={props.dispatch.bind(null, push('/about'))}>
        <img src={info} alt='info-sign' />
      </HeaderButton>
    </Container>
  );
};

Header.propTypes = {
  currentYear: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  isShowAllPrisons: PropTypes.bool.isRequired,
  prisons: PropTypes.object
};

Header.defaultProps = {
  prisons: null
};

export default connect(
  state => ({
    isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons']),
    prisons: state.getIn(['data', 'prisons'])
  })
)(Header);
