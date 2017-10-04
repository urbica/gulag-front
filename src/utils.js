import { dataToken } from './config/tokens';
import stylesUrl from './config/map';

const options = { headers: { Authorization: `Bearer ${dataToken}` } };

export const groupById = arr => (
  arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {})
);

export const getData = () => (
  Promise.all([
    fetch('/api/public/camps.json', options).then(res => res.json()),
    fetch('/api/public/uploads.json', options).then(r => r.json()),
    fetch('/api/public/activities.json', options).then(r => r.json()),
    fetch('/api/public/places.json', options).then(r => r.json()),
    fetch('/api/public/types.json', options).then(r => r.json()),
    fetch('/api/public/periods.json', options).then(r => r.json())
  ])
    .then(([prisons, photos, activities, places, types, periods]) => ({
      prisons: groupById(prisons),
      photos,
      activities,
      places: groupById(places),
      types: groupById(types),
      periods: groupById(periods)
    }))
);

export const getStyles = () => (
  fetch(stylesUrl.styles)
    .then(response => response.json())
    .then(json => json)
);
