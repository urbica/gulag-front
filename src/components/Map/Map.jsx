import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';

import { mapToken } from '../../config/tokens';
import layers from '../../config/layers';

// component
import Popup from './Popup/Popup';

// styled
import Container from './Container';

// import Controls from './Controls/Controls';
// import MapButton from './Controls/MapButton';
// import plus from './btn-plus.svg';
// import minus from './btn-minus.svg';
//   setTimeout(() => {
//     const credits = ' <a href="http://urbica.co" target="_blank">© Urbica</a>';
//     const attrEls = document.getElementsByClassName('mapboxgl-ctrl-attrib');
//     if (attrEls.length > 0)
//       attrEls[0].insertAdjacentHTML('beforeend', credits);
//   }, 1000);
// }

class Map extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const ussrFilter = Immutable.List([
      'all',
      ['<=', 'year_start', nextProps.currentYear],
      ['>=', 'year_end', nextProps.currentYear]
    ]);
    const citiesFilter = Immutable.List([
      'all',
      ['==', 'year', nextProps.currentYear]
    ]);
    const citiesNames = `{historical_name${
      nextProps.lang === 'ru' ? '' : '_en'
    }}`;

    const updatedLayers = prevState.layers
      .setIn(['ussr', 'filter'], ussrFilter)
      .setIn(['cities', 'filter'], citiesFilter)
      .setIn(['citiesDots', 'filter'], citiesFilter)
      .setIn(['cities', 'layout', 'text-field'], citiesNames);

    return { layers: updatedLayers };
  }

  constructor(props) {
    super(props);

    this.state = {
      layers
    };

    this.mapGlRef = React.createRef();

    this.onLayerHover = this.onLayerHover.bind(this);
    this.onLayerLeave = this.onLayerLeave.bind(this);
    this.onLayerClick = this.onLayerClick.bind(this);
  }

  onLayerHover(e) {
    const feature = e.features[0];
    if (!feature) return;

    this.mapGlRef.current.getMap().getCanvas().style.cursor = 'pointer';
    const newLayers = this.state.layers
      .setIn(['campsHalo_hover', 'filter', 2], feature.properties.campId)
      .setIn(['campsNames', 'filter', 2], feature.properties.campId);

    this.setState({ layers: newLayers });
  }

  onLayerLeave() {
    this.mapGlRef.current.getMap().getCanvas().style.cursor = '';
    const newLayers = this.state.layers
      .setIn(['campsHalo_hover', 'filter', 2], '')
      .setIn(['campsNames', 'filter', 2], '');

    this.setState({ layers: newLayers });
  }

  onLayerClick(e) {
    if (e.features.length > 1) {
      const div = document.createElement('div');
      ReactDom.render(
        <Popup
          features={e.features}
          onClick={this.props.openCampCard.bind(null, e.lngLat)}
        />,
        div
      );

      this.popup = new mapboxgl.Popup({
        closeButton: false,
        anchor: 'left',
        offset: 40
      })
        .setLngLat(e.features[0].geometry.coordinates)
        .setDOMContent(div)
        .addTo(this.mapGlRef.current.getMap());
    } else {
      this.props.openCampCard(e.lngLat, e.features[0].properties.campId);
    }
  }

  render() {
    const {
      isSlideUp,
      viewport,
      changeViewportHandler,
      campsSource
    } = this.props;

    console.log(this.state.layers.getIn(['ussr', 'filter']).toArray());

    return (
      <Container slideUp={isSlideUp}>
        <MapGL
          ref={this.mapGlRef}
          style={{ width: '100%', height: '100%' }}
          accessToken={mapToken}
          mapStyle='mapbox://styles/gulagmap/cj8bt4qbw7kbo2rry4oft6e5g'
          onViewportChange={changeViewportHandler}
          {...viewport.toJS()}
        >
          <Source id='camps' source={campsSource} />
          <Layer layer={this.state.layers.get('ussr')} before='waterway-z3' />
          <Layer
            layer={this.state.layers.get('chukotka')}
            before='waterway-z3'
          />
          <Layer layer={this.state.layers.get('cities')} />
          <Layer layer={this.state.layers.get('citiesDots')} />
          <Layer layer={this.state.layers.get('camps')} />
          <Layer
            layer={this.state.layers.get('campsHalo')}
            onHover={this.onLayerHover}
            onLeave={this.onLayerLeave}
            onClick={this.onLayerClick}
          />
          <Layer layer={this.state.layers.get('campsHalo_hover')} />
          <Layer layer={this.state.layers.get('campsNames')} />
        </MapGL>
        {/* <Controls slideUp={isSlideUp}>
          <MapButton
            onClick={dispatch.bind(
              null,
              changeViewport({ zoom: viewport.get('zoom') + 1 })
            )}
          >
            <img src={plus} alt='plus' />
          </MapButton>
          <MapButton
            onClick={dispatch.bind(
              null,
              changeViewport({ zoom: viewport.get('zoom') - 1 })
            )}
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
  viewport: PropTypes.object.isRequired,
  campsSource: PropTypes.object.isRequired,
  changeViewportHandler: PropTypes.func.isRequired,
  openCampCard: PropTypes.func.isRequired
};

Map.defaultProps = {
  isSlideUp: false
};

export default Map;
