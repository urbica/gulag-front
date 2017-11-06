import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { t } from '../../intl/helper';

import { chartData } from '../Chart/config';
import { splitDigits } from '../../utils/utils';

// styled
import Container from './Container';
import Button from './Button/Button';
import Middle from './Middle';
import Amount from './Amount';
import Desc from './Desc';
import Group from './Group';

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
      <Button
        onClick={props.dispatch.bind(null, push('/search'))}
        type='search'
      />
      <Middle>
        <Group>
          <div>
            <Amount>{(isShowAllPrisons) ? '1918 – 1960' : currentYear}</Amount>
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
              <Amount>{`${prisonsAmount}\n`}</Amount>
              <Desc>{t('header.camps')}</Desc>
            </div>
          </Group>
        }
      </Middle>
      <Button
        onClick={props.dispatch.bind(null, push('/about'))}
        type='info'
      />
    </Container>
  );
};

Header.propTypes = {
  isShowAllPrisons: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentYear: PropTypes.number.isRequired,
  prisons: PropTypes.object
};

Header.defaultProps = {
  prisons: null
};

export default connect(
  state => ({
    isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons']),
    currentYear: state.getIn(['ui', 'currentYear']),
    prisons: state.getIn(['data', 'prisons'])
  })
)(Header);
