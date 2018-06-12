import createImmutableSelector from 'create-immutable-selector';
import { connect } from 'react-redux';
import { branch, renderNothing, compose } from 'recompose';

// selector
import { isDataLoadingSelector } from '../App/reducers/uiReducer';

import Preloader from './Preloader';

const mapStateToProps = createImmutableSelector(
  isDataLoadingSelector,
  isDataLoading => ({ isDataLoading })
);

const withConnect = connect(mapStateToProps);
const withBranch = branch(({ isDataLoading }) => !isDataLoading, renderNothing);

const enhance = compose(
  withConnect,
  withBranch
);
export default enhance(Preloader);
