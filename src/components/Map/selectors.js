import { List, Map } from 'immutable';
import { createSelector } from 'reselect';

import { langSelector, filteredCampsSelector } from '../App/selectors';
import {
  campTypeFiltersSelector,
  isShowAllPrisonsSelector,
  currentYearSelector
} from '../App/reducers/uiSelectors';

import findMaxPrisoners from '../../utils/findMaxPrisoners';
import emptyGeoJSONSource from '../../config/emptyGeoJSONSource';

export default createSelector(
  filteredCampsSelector,
  langSelector,
  campTypeFiltersSelector,
  isShowAllPrisonsSelector,
  currentYearSelector,
  (camps, lang, campTypeFilters, isShowAllCamps, currentYear) => {
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
              name: camp.getIn(['title', lang]),
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
