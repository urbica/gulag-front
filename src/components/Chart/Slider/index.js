import { createSelector } from 'reselect';
import { connect } from 'react-redux';

// selectors
import {
  currentYearSelector,
  isShowAllPrisonsSelector
} from '../../App/reducers/uiSelectors';

// action
import { changeCurrentYear } from '../../App/reducers/uiReducer';

import Slider from './Slider';

const mapStateToProps = createSelector(
  currentYearSelector,
  isShowAllPrisonsSelector,
  (currentYear, isShowAllPrisons) => ({ currentYear, isShowAllPrisons })
);

export default connect(mapStateToProps, { changeCurrentYear })(Slider);
