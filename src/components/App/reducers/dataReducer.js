import { Map, List } from 'immutable';
import createImmutableSelector from 'create-immutable-selector';

// actions
import { FETCH_SUCCESS } from './dataActions';

// selectors
import { localeSelector } from './intlReducer';
import { campTypeFiltersSelector } from './uiReducer';

// initial state
const initState = Map({
  camps: List(),
  activities: List(),
  regions: List(),
  types: List(),
  periods: List()
});

// selectors
const dataSelector = createImmutableSelector(
  state => state.get('data'),
  data => data
);
export const campsSelector = createImmutableSelector(dataSelector, data =>
  data.get('camps').filter(camp => camp.get('locations')));
export const typesSelector = createImmutableSelector(dataSelector, data =>
  data
    .get('types')
    .filter(
      type =>
        type.get('id') !== 3 && type.get('id') !== 4 && type.get('id') !== 5
    ));
export const periodsSelector = createImmutableSelector(dataSelector, data =>
  data
    .get('periods')
    // TODO move sort to fetch
    .sort((a, b) => {
      if (a.get('year') > b.get('year')) return 1;
      if (a.get('year') < b.get('year')) return -1;
      return 0;
    }));
export const activitiesSelector = createImmutableSelector(dataSelector, data =>
  data
    .get('activities')
    // TODO move normalize to fetch
    .reduce((acc, activity) => acc.set(activity.get('id'), activity), Map()));
export const regionsSelector = createImmutableSelector(dataSelector, data =>
  data
    .get('regions')
    // TODO move normalize to fetch
    .reduce((acc, region) => acc.set(region.get('id'), region), Map()));
export const publishedCampsSelector = createImmutableSelector(
  campsSelector,
  localeSelector,
  (camps, locale) => camps.filter(camp => camp.getIn(['published', locale]))
);
export const filteredCampsSelector = createImmutableSelector(
  publishedCampsSelector,
  campTypeFiltersSelector,
  (camps, campTypeFilters) =>
    camps.filter(camp => {
      const campType = camp.get('typeId') && camp.get('typeId').toString();

      return campTypeFilters.get(campType);
    })
);
export const campSelector = createImmutableSelector(
  publishedCampsSelector,
  (state, { match }) => match,
  (camps, match) =>
    // TODO convert camps from List() to Map()
    camps
      .filter(camp => camp.get('id') === Number.parseInt(match.params.id, 10))
      .first()
);

// reducer
export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return state.merge(payload);
    default:
      return state;
  }
};
