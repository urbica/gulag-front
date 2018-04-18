import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { t } from '../../intl/helper';

import FullScreenCard from '../FullScreenCard/FullScreenCard';

// styled
import Title from './Title';
import Period from './Period';
import Year from './Year';
import PeriodTitle from './PeriodTitle';
import Description from './Description';
import ToggleVisible from './ToggleVisible';

const toggleVisible = () => {
  const showElements = [...document.querySelectorAll('.to-show')];
  const toggleFn = arr =>
    arr.map(
      i =>
        i.getBoundingClientRect().top > -100 &&
        i.getBoundingClientRect().top < window.innerHeight - 100 &&
        i.getBoundingClientRect().bottom > 100
          ? i.classList.remove('hidden')
          : i.classList.add('hidden')
    );
  if (showElements.length > 0) toggleFn(showElements);
};
class Chronology extends PureComponent {
  render() {
    const { pushToRoot, periods } = this.props;
    return (
      <FullScreenCard onClick={pushToRoot}>
        <Title>{t('aside.gulagChronology')}</Title>
        <ToggleVisible onWheel={toggleVisible}>
          {periods.map(period => (
            <Period key={period.get('id')} className='to-show'>
              <Year>{period.get('year')}</Year>
              <PeriodTitle>{period.getIn(['title', 'ru'])}</PeriodTitle>
              <Description>{period.getIn(['description', 'ru'])}</Description>
            </Period>
          ))}
        </ToggleVisible>
      </FullScreenCard>
    );
  }
}

Chronology.propTypes = {
  pushToRoot: PropTypes.func.isRequired,
  periods: PropTypes.object.isRequired
};

export default Chronology;
