import { connect } from 'react-redux';
import { changeCurrentYear } from '../../App/reducers/uiReducer';

import Slider from './Slider';

export default connect(
  state => ({
    currentYear: state.getIn(['ui', 'currentYear']),
    isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons'])
  }),
  { changeCurrentYear }
)(Slider);
