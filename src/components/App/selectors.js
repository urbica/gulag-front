import { createSelector } from 'reselect';
import { List } from 'immutable';

import { campTypeFiltersSelector } from './reducers/uiSelectors';

export const langSelector = state => state.getIn(['intl', 'locale']);
export const campsSelector = state => state.getIn(['data', 'camps']);
export const typesSelector = state => state.getIn(['data', 'types']);
export const periodsSelector = state => state.getIn(['data', 'periods']);
export const activitiesSelector = state => state.getIn(['data', 'activities']);
export const regionsSelector = state => state.getIn(['data', 'regions']);

export const publishedCampsSelector = createSelector(
  campsSelector,
  langSelector,
  (camps, lang) => {
    if (!camps) return List();

    return camps.filter(
      camp => camp.getIn(['published', lang]) && camp.get('locations')
    );
  }
);

export const filteredCampsSelector = createSelector(
  campsSelector,
  langSelector,
  campTypeFiltersSelector,
  (camps, lang, campTypeFilters) => {
    if (!camps) return List();

    return camps.filter(camp => {
      const campType = camp.get('typeId') && camp.get('typeId').toString();

      return (
        camp.getIn(['published', lang]) &&
        campTypeFilters.get(campType) &&
        camp.get('locations')
      );
    });
  }
);
