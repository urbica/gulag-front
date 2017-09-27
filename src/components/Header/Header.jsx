/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// styled
import Container from './Container';
import HeaderCenterGroup from './HeaderCenterGroup';
import Desc from './Desc';
// import Amount from './Amount';
import Group from './Group';
import HeaderButton from '../Buttons/HeaderButton';

// icons
import search from '../../icons/btn-search.svg';
import info from '../../icons/btn-info.svg';
// import data from '../../../utils/prisonersAmountByYears';
// import { splitDigits } from '../../../utils/utils';

// const formatedData = {};
// // eslint-disable-next-line
// data.map(d => (formatedData[d.year] = d));

const Header = (props) => {
  const { currentYear, isShowAllPrisons } = props;

  // const dataSearchingStr = 'данные уточняются';
  const notMobilePrisoners = true;
  const notMobileDead = true;

  // if (width < 530) {
  //   notMobilePrisoners = formatedData[currentYear].prisoners !== 0;
  //   notMobileDead = formatedData[currentYear].dead !== 0;
  // }

  // const prisonersAmount = showAmountsGroup && formatedData[currentYear].prisoners !== 0 ?
  //   splitDigits(formatedData[currentYear].prisoners) : dataSearchingStr;
  // const deadAmount = showAmountsGroup && formatedData[currentYear].dead !== 0 ?
  //   splitDigits(formatedData[currentYear].dead) : dataSearchingStr;

  return (
    <Container>
      <HeaderButton>
        <img src={search} alt='loupe-icon' />
      </HeaderButton>
      <HeaderCenterGroup>
        <Group>
          <div>
            {`${(currentYear === 'all') ? '1918 – 1960' : currentYear}\n`}
            <Desc>{`${(currentYear === 'all') ? 'годы' : 'год'}`}</Desc>
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
              {/* <Amount>{`${prisonersAmount}\n`}</Amount> */}
              <Desc>заключённых</Desc>
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
              {/* <Amount>{`${deadAmount}\n`}</Amount> */}
              <Desc>умерших</Desc>
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
              {`${props.prisonsAmount}\n`}
              <Desc>лагерь</Desc>
            </div>
          </Group>
        }
      </HeaderCenterGroup>
      <HeaderButton>
        <img src={info} alt='info-sign' />
      </HeaderButton>
    </Container>
  );
};

Header.propTypes = {
  currentYear: PropTypes.number
};

export default connect(
  state => ({
    currentYear: state.getIn(['ui', 'currentYear']),
    isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons'])
  })
)(Header);
