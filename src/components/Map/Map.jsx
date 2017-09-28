import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import MapGL from '@urbica/react-map-gl';

import Container from './Container';

import { mapToken } from '../../config/tokens';

import {
  prisonsSelector,
  currentYearSelector,
  isShowAllPrisonsSelector
} from '../App/selectors';

import { finalStyleSelector } from './selectors';

// import Controls from './ControlsStyle';
// import Popup from './Popup';
// import { MapButton } from './StyledButtons';
// import plus from './icons/btn-plus.svg';
// import minus from './icons/btn-minus.svg';
// import allCities from '../../utils/newCities.geojson';
//   this.map.addLayer({
//     id: 'ussr',
//     type: 'fill',
//     source: 'ussr',
//     'source-layer': 'NEWUSSR_BOUND',
//     layout: {},
//     paint: {
//       'fill-color': '#1b2128', // 222933 #1b2128
//       'fill-opacity': 1
//     },
//     filter: ['all'
//       // ['<=', 'year_start', this.props.currentYear],
//       // ['>=', 'year_end', this.props.currentYear]
//     ]
//   }, 'waterway');
//   this.map.addLayer({
//     id: 'chukotka',
//     type: 'fill',
//     source: 'chukotka',
//     'source-layer': 'chukotka_patch-4b7lx1',
//     layout: {},
//     paint: {
//       'fill-color': '#1b2128',
//       'fill-opacity': 1
//     }
//   }, 'waterway');
//
//   // this.map.addSource('allCities', {
//   //   type: 'geojson',
//   //   data: allCities
//   // });
//
//   this.map.addLayer({
//     id: 'cities_labels',
//     type: 'symbol',
//     source: 'allCities',
//     layout: {
//       'text-anchor': 'top',
//       'text-field': '{historical_name}',
//       'text-size': {
//         stops: [
//           [0, 8],
//           [4, 10],
//           [6, 14],
//           [12, 22],
//           [22, 28]
//         ]
//       },
//       'text-font': ['PT Sans Regular'],
//       'text-padding': {
//         stops: [
//           [2, 4]
//         ]
//       }
//     },
//     paint: {
//       'text-color': '#6A748C'
//     }
//   });
//   this.map.addLayer({
//     id: 'cities_dots',
//     type: 'circle',
//     source: 'allCities',
//     paint: {
//       'circle-color': '#6A748C',
//       'circle-radius': {
//         stops: [
//           [7, 0],
//           [8, 1.6],
//           [22, 2]
//         ]
//       }
//     }
//   });
//
//   setTimeout(() => {
//     const credits = ' <a href="http://urbica.co" target="_blank">© Urbica</a>';
//     const attrEls = document.getElementsByClassName('mapboxgl-ctrl-attrib');
//     if (attrEls.length > 0) attrEls[0].insertAdjacentHTML('beforeend', credits);
//   }, 1000);
// }

const Map = props => (
  <Container slideUp={false}>
    <MapGL
      style={{ width: '100%', height: '100vh' }}
      accessToken={mapToken}
      mapStyle={props.mapStyle}
      latitude={60}
      longitude={90}
      zoom={2.5}
      onViewportChange={(viewport) => {
        console.log(viewport);
      }}
    />
  </Container>
);

Map.propTypes = {
  mapStyle: PropTypes.object
};

Map.defaultProps = {
  mapStyle: null
};

const selector = createSelector(
  prisonsSelector,
  finalStyleSelector,
  currentYearSelector,
  isShowAllPrisonsSelector,
  (prisons, mapStyle, currentYear, isShowAllPrisons) => ({
    prisons,
    mapStyle,
    currentYear,
    isShowAllPrisons
  })
);

export default connect(selector)(Map);

