import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import { periodsSelector } from '../App/reducers/dataReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// action
import { closeMenus } from '../App/reducers/uiActions';

import Chronology from './Chronology';

const mapStateToProps = createImmutableSelector(
  periodsSelector,
  localeSelector,
  (periods, lang) => ({ periods, lang })
);
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => {
    dispatch(closeMenus());
    dispatch(push('/'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chronology);
