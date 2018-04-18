import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  campsSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector
} from '../App/selectors';
import { changeViewport } from '../App/reducers/uiReducer';

import Map from './Map';

const mapStateToProps = createSelector(
  state => state.getIn(['router']).location.pathname,
  campsSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector,
  (
    pathname,
    prisons,
    currentYear,
    viewport,
    isShowAllPrisons,
    campsSource
  ) => ({
    isSlideUp: /\/camp/.test(pathname),
    prisons,
    currentYear,
    viewport,
    isShowAllPrisons,
    campsSource
  })
);

const mapDispatchToProps = dispatch => ({
  changeViewportHandler: newViewport => dispatch(changeViewport(newViewport)),
  openCampCard: (lngLat, id) => {
    const newViewport = {
      latitude: lngLat.lat,
      longitude: lngLat.lng
    };

    dispatch(changeViewport(newViewport));
    dispatch(push(`/camp${id}`));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
