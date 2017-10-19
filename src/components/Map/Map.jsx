import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';

import MapGL from '@urbica/react-map-gl';

import { mapToken } from '../../config/tokens';

import { changeViewport } from '../App/reducers/uiReducer';
import {
  prisonsSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector
} from '../App/selectors';
import { finalStyleSelector } from './selectors';

import Container from './Container';

import Controls from './Controls/Controls';
// import Popup from './Popup';
import MapButton from '../Buttons/MapButton';
import plus from '../../icons/btn-plus.svg';
import minus from '../../icons/btn-minus.svg';
//   setTimeout(() => {
//     const credits = ' <a href="http://urbica.co" target="_blank">© Urbica</a>';
//     const attrEls = document.getElementsByClassName('mapboxgl-ctrl-attrib');
//     if (attrEls.length > 0) attrEls[0].insertAdjacentHTML('beforeend', credits);
//   }, 1000);
// }

const Map = (props) => {
  const {
    isSlideUp,
    mapStyle,
    viewport,
    dispatch
  } = props;

  return (
    <Container slideUp={isSlideUp}>
      <MapGL
        style={{ width: '100%', height: '100vh' }}
        accessToken={mapToken}
        mapStyle={mapStyle}
        onViewportChange={newViewport => dispatch(changeViewport(newViewport))}
        onClick={({ features }) => {
          if (features.length > 0) {
            const { id } = features[0].properties;
            const longitude = features[0].geometry.coordinates[0];
            const latitude = features[0].geometry.coordinates[1];
            dispatch(push(`/prison${id}`));
            dispatch(changeViewport({ longitude, latitude }));
          }
        }}
        {...viewport.toJS()}
      />
      <Controls slideUp={isSlideUp}>
        <MapButton
          onClick={dispatch.bind(null, changeViewport({ zoom: viewport.get('zoom') + 1 }))}
        >
          <img src={plus} alt='plus' />
        </MapButton>
        <MapButton
          onClick={dispatch.bind(null, changeViewport({ zoom: viewport.get('zoom') - 1 }))}
        >
          <img src={minus} alt='minus' />
        </MapButton>
      </Controls>

    </Container>
  );
};

Map.propTypes = {
  isSlideUp: PropTypes.bool,
  mapStyle: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired
};

Map.defaultProps = {
  isSlideUp: false,
  mapStyle: null
};

const selector = createSelector(
  state => state.getIn(['router']).location.pathname,
  prisonsSelector,
  finalStyleSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  (pathname, prisons, mapStyle, currentYear, viewport, isShowAllPrisons) => ({
    isSlideUp: /\/prison/.test(pathname),
    prisons,
    mapStyle,
    currentYear,
    viewport,
    isShowAllPrisons
  })
);

export default connect(selector)(Map);

