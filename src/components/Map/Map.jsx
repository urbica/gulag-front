import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import { push } from 'react-router-redux';

import { mapToken } from '../../config/tokens';

import { changeViewport } from '../App/reducers/uiReducer';
import {
  campsSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  finalStyleSelector,
  prisonSourceSelector
} from '../App/selectors';
import layers from '../../config/layers';

import Container from './Container';

// import Controls from './Controls/Controls';
// import Popup from './Popup';
// import MapButton from './Controls/MapButton';
// import plus from './btn-plus.svg';
// import minus from './btn-minus.svg';
//   setTimeout(() => {
//     const credits = ' <a href="http://urbica.co" target="_blank">© Urbica</a>';
//     const attrEls = document.getElementsByClassName('mapboxgl-ctrl-attrib');
//     if (attrEls.length > 0) attrEls[0].insertAdjacentHTML('beforeend', credits);
//   }, 1000);
// }

class Map extends PureComponent {
  componentDidMount() {
    window.mapRef = this.mapRef;
  }

  render() {
    const {
      isSlideUp,
      mapStyle,
      viewport,
      changeViewportHandler,
      prisonSource,
      openCampCard
    } = this.props;

    return (
      <Container slideUp={isSlideUp}>
        <MapGL
          ref={(ref) => {
            this.mapRef = ref;
          }}
          style={{ width: '100%', height: '100vh' }}
          accessToken={mapToken}
          mapStyle={mapStyle}
          onViewportChange={changeViewportHandler}
          {...viewport.toJS()}
        >
          <Source id='prisons' source={prisonSource} />
          <Layer layer={layers.get('prisons')} />
          <Layer
            layer={layers.get('prisonsHalo')}
            onClick={({ features }) => openCampCard(features[0].properties.campId)}
          />
        </MapGL>
        {/* <Controls slideUp={isSlideUp}>
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
        </Controls> */}
      </Container>
    );
  }
}

Map.propTypes = {
  isSlideUp: PropTypes.bool,
  mapStyle: PropTypes.object,
  viewport: PropTypes.object.isRequired,
  prisonSource: PropTypes.object.isRequired,
  changeViewportHandler: PropTypes.func.isRequired,
  openCampCard: PropTypes.func.isRequired
};

Map.defaultProps = {
  isSlideUp: false,
  mapStyle: null
};

const selector = createSelector(
  state => state.getIn(['router']).location.pathname,
  campsSelector,
  finalStyleSelector,
  currentYearSelector,
  viewportSelector,
  isShowAllPrisonsSelector,
  prisonSourceSelector,
  (pathname, prisons, mapStyle, currentYear, viewport, isShowAllPrisons, prisonSource) => ({
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

export default connect(selector, mapDispatchToProps)(Map);
