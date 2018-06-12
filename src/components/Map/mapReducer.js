import { fromJS, List, Map } from 'immutable';
import createImmutableSelector from 'create-immutable-selector';

import viewport from '../../config/initialViewport';

// utils
import findMaxPrisoners from '../../utils/findMaxPrisoners';
import emptyGeoJSONSource from '../../utils/emptyGeoJSONSource';

// selectors
import { filteredCampsSelector } from '../App/reducers/dataReducer';
import {
  currentYearSelector,
  campTypeFiltersSelector,
  isShowAllPrisonsSelector
} from '../App/reducers/uiReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// action
import { VIEWPORT_CHANGED } from './mapActions';

// initial state
const initState = fromJS({ viewport });

// selectors
const mapSelector = createImmutableSelector(
  state => state.get('map'),
  map => map
);
export const viewportSelector = createImmutableSelector(mapSelector, map =>
  map.get('viewport'));
// TODO refactor campsSourceSelector
export const campsSourceSelector = createImmutableSelector(
  filteredCampsSelector,
  currentYearSelector,
  localeSelector,
  campTypeFiltersSelector,
  isShowAllPrisonsSelector,
  (camps, currentYear, locale, campTypeFilters, isShowAllCamps) => {
    const features = camps.reduce((accCamps, camp) => {
      const locations = camp
        .get('locations')
        .reduce((accLocations, location) => {
          const statistics = location
            .get('statistics')
            .find(stat => stat.get('year') === currentYear);

          const feature = Map({
            type: 'Feature',
            geometry: location.get('geometry'),
            properties: {
              campId: camp.get('id'),
              name: camp.getIn(['title', locale]),
              typeId: camp.get('typeId')
            }
          });

          if (isShowAllCamps) {
            const featureWithPeoples = feature.setIn(
              ['properties', 'peoples'],
              findMaxPrisoners(location.get('statistics'))
            );

            return accLocations.push(featureWithPeoples);
          }

          if (statistics === undefined) return accLocations;

          const featureWithPeoples = feature.setIn(
            ['properties', 'peoples'],
            statistics.get('prisonersCount')
          );

          return accLocations.push(featureWithPeoples);
        }, List());

      return accCamps.merge(locations);
    }, List());

    return emptyGeoJSONSource.setIn(['data', 'features'], features);
  }
);

// reducer
export default (state = initState, { type, payload }) => {
  switch (type) {
    case VIEWPORT_CHANGED:
      return state.update('viewport', previousViewport =>
        previousViewport.merge(payload));
    default:
      return state;
  }
};
