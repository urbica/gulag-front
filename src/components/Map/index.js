import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector,
  langSelector
} from '../App/selectors';
import { changeViewport, closeMenus } from '../App/reducers/uiReducer';

import Map from './Map';

const mapStateToProps = createSelector(
  state => state.getIn(['router']).location.pathname,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector,
  langSelector,
  (pathname, currentYear, viewport, isShowAllPrisons, campsSource, lang) => ({
    isSlideUp: /\/camp/.test(pathname),
    currentYear,
    viewport,
    isShowAllPrisons,
    campsSource,
    lang,
    campId: pathname.match(/\d+/) ? pathname.match(/\d+/)[0] : ''
  })
);

const mapDispatchToProps = dispatch => ({
  changeViewport: newViewport => dispatch(changeViewport(newViewport)),
  openCampCard: (lngLat, id) => {
    // const newViewport = {
    //   latitude: lngLat[1],
    //   longitude: lngLat[0]
    // };

    dispatch(closeMenus());
    // dispatch(changeViewport(newViewport));
    dispatch(push(`/camp${id}`));
  },
  closeCampCard: () => {
    dispatch(closeMenus());
    dispatch(push('/'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
