import createImmutableSelector from 'create-immutable-selector';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// selectors
import { viewportSelector, campsSourceSelector } from './mapReducer';
import {
  isShowAllPrisonsSelector,
  currentYearSelector
} from '../App/reducers/uiReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// actions
import { changeViewport } from './mapActions';
import { closeMenus } from '../App/reducers/uiActions';

import Map from './Map';

const mapStateToProps = createImmutableSelector(
  state => state.getIn(['router']).location.pathname,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  campsSourceSelector,
  localeSelector,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
