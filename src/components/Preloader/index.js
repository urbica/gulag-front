import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { branch, compose, renderNothing } from 'recompose';

// selector
import { isDataLoadingSelector } from '../App/reducers/uiSelectors';

import Preloader from './Preloader';

const mapStateToProps = createSelector(
  isDataLoadingSelector,
  isDataLoading => ({ isDataLoading })
);

const withConnect = connect(mapStateToProps);
const withBranch = branch(({ isDataLoading }) => !isDataLoading, renderNothing);
const enhance = compose(withConnect, withBranch);

export default enhance(Preloader);
