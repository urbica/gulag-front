import createImmutableSelector from 'create-immutable-selector';
import { connect } from 'react-redux';

// selectors
import {
  currentYearSelector,
  isShowAllPrisonsSelector
} from '../../App/reducers/uiReducer';

// action
import { changeCurrentYear } from '../../App/reducers/uiActions';

import Slider from './Slider';

const mapStateToProps = createImmutableSelector(
  currentYearSelector,
  isShowAllPrisonsSelector,
  (currentYear, isShowAllPrisons) => ({ currentYear, isShowAllPrisons })
);

export default connect(
  mapStateToProps,
  { changeCurrentYear }
)(Slider);
