import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  campsSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  finalStyleSelector,
  prisonSourceSelector
} from '../App/selectors';
import { changeViewport } from '../App/reducers/uiReducer';

import Map from './Map';

const mapStateToProps = createSelector(
  state => state.getIn(['router']).location.pathname,
  campsSelector,
  finalStyleSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector,
  (
    pathname,
    prisons,
    mapStyle,
    currentYear,
    viewport,
    isShowAllPrisons,
    prisonSource
  ) => ({
    isSlideUp: /\/prison/.test(pathname),
    prisons,
    mapStyle,
    currentYear,
    viewport,
    isShowAllPrisons,
    prisonSource
  })
);

const mapDispatchToProps = dispatch => ({
  changeViewportHandler: newViewport => dispatch(changeViewport(newViewport)),
  openCampCard: id => dispatch(push(`/camp${id}`))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
