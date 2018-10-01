/* eslint-disable react/destructuring-assignment,
react/no-access-state-in-setstate */
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';

import mapConfig from '../../config/map';
import layers from '../../config/layers';

// component
import Popup from './Popup/Popup';

// styled
import Container from './Container';

import Controls from './Controls/Controls';
import MapButton from './Controls/MapButton';
import plus from './btn-plus.svg';
import minus from './btn-minus.svg';

class Map extends PureComponent {
  static propTypes = {
    isSlideUp: PropTypes.bool.isRequired,
    viewport: PropTypes.object.isRequired,
    campsSource: PropTypes.object.isRequired,
    changeViewport: PropTypes.func.isRequired,
    openCampCard: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    closeCampCard: PropTypes.func.isRequired,
    isShowAllPrisons: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      layers
    };

    this.mapGlRef = React.createRef();

    this.onZoomend = this.onZoomend.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onLayerHover = this.onLayerHover.bind(this);
    this.onLayerLeave = this.onLayerLeave.bind(this);
    this.openCampCardHandler = this.openCampCardHandler.bind(this);
    this.onLayerClick = this.onLayerClick.bind(this);
    this.translateLayers = this.translateLayers.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { currentYear, lang, campId, isShowAllPrisons } = nextProps;
    const ussrBoundaryFilter = List([
      'all',
      ['<=', 'year_start', isShowAllPrisons ? 1960 : currentYear],
      ['>=', 'year_end', isShowAllPrisons ? 1960 : currentYear]
    ]);
    const citiesFilter = List([
      'all',
      ['==', 'year', isShowAllPrisons ? 1960 : currentYear]
    ]);
    const citiesNames = `{historical_name${lang === 'ru' ? '' : '_en'}}`;
    const activeCampHaloFilter = List([
      'all',
      ['==', 'campId', parseInt(campId, 10)]
    ]);
    const activeCampNameFilter = List([
      'all',
      ['==', 'campId', parseInt(campId, 10)]
    ]);

    const updatedLayers = prevState.layers
      .setIn(['ussrBoundary', 'filter'], ussrBoundaryFilter)
      .setIn(['cities', 'filter'], citiesFilter)
      .setIn(['citiesDots', 'filter'], citiesFilter)
      .setIn(['cities', 'layout', 'text-field'], citiesNames)
      .setIn(['campHalo_active', 'filter'], activeCampHaloFilter)
      .setIn(['campName_active', 'filter'], activeCampNameFilter);

    return { layers: updatedLayers };
  }

  componentDidMount() {
    this.map = this.mapGlRef.current.getMap();
    this.map.touchZoomRotate.disableRotation();
    this.map.on('zoomend', this.onZoomend);
    this.map.on('click', this.onMapClick);
    this.map.on('load', this.translateLayers);
  }

  componentDidUpdate() {
    this.translateLayers();
  }

  translateLayers() {
    const { lang } = this.props;
    const translatedLayers = [
      'marine-label-others-line',
      'marine-label-others',
      'marine-sea-line',
      'marine-sea',
      'oceans',
      'water-label',
      'ussr-name'
    ];

    translatedLayers.forEach(layer => {
      this.map.setLayoutProperty(layer, 'text-field', `{name_${lang}}`);
    });
  }

  onZoomend() {
    const { changeViewport } = this.props;
    const { lng, lat } = this.map.getCenter();
    const zoom = this.map.getZoom();
    const pitch = this.map.getPitch();
    const bearing = this.map.getBearing();

    const viewport = {
      latitude: lat,
      longitude: lng,
      zoom,
      pitch,
      bearing
    };

    changeViewport(viewport);
  }

  onMapClick(e) {
    const { closeCampCard } = this.props;
    const features = this.map.queryRenderedFeatures(e.point, {
      layers: ['campsHalo']
    });

    if (features.length === 0) {
      closeCampCard();
    }
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

  openCampCardHandler(lngLat, campId) {
    if (this.popup) this.popup.remove();
    this.props.openCampCard(lngLat, campId);
  }

  onLayerClick(e) {
    if (e.features.length > 1) {
      const div = document.createElement('div');
      ReactDom.render(
        <Popup features={e.features} onClick={this.openCampCardHandler} />,
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
      this.openCampCardHandler(
        e.features[0].geometry.coordinates,
        e.features[0].properties.campId
      );
    }
  }

  render() {
    const { isSlideUp, viewport, changeViewport, campsSource } = this.props;
    const zoom = viewport.get('zoom');

    const zoomIn = () => changeViewport({ zoom: zoom + 1 });
    const zoomOut = () => changeViewport({ zoom: zoom - 1 });

    return (
      <Container slideUp={isSlideUp}>
        <MapGL
          ref={this.mapGlRef}
          style={{ width: '100%', height: '100%' }}
          onViewportChange={changeViewport}
          {...mapConfig}
          {...viewport.toJS()}
        >
          <Source id='camps' source={campsSource} />
          <Layer
            layer={this.state.layers.get('ussrBoundary')}
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
          <Layer layer={this.state.layers.get('campHalo_active')} />
          <Layer layer={this.state.layers.get('campName_active')} />
        </MapGL>
        <Controls slideUp={isSlideUp}>
          <MapButton onClick={zoomIn}>
            <img src={plus} alt='plus' />
          </MapButton>
          <MapButton onClick={zoomOut}>
            <img src={minus} alt='minus' />
          </MapButton>
        </Controls>
      </Container>
    );
  }
}

export default Map;
