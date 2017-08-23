import { dataToken } from './config/tokens';

const options = { headers: { Authorization: `Bearer ${dataToken}` } };

// eslint-disable-next-line import/prefer-default-export
export const getData = () => (
  Promise.all([
    fetch('http://gulag.urbica.co/api/public/camps.json', options).then(res => res.json()),
    fetch('http://gulag.urbica.co/api/public/uploads.json', options).then(r => r.json()),
    fetch('http://gulag.urbica.co/api/public/activities.json', options).then(r => r.json()),
    fetch('http://gulag.urbica.co/api/public/places.json', options).then(r => r.json()),
    fetch('http://gulag.urbica.co/api/public/types.json', options).then(r => r.json()),
    fetch('http://gulag.urbica.co/api/public/periods.json', options).then(r => r.json())
  ])
    .then(([prisons, photos, activities, places, types, periods]) => ({
      prisons,
      photos,
      activities,
      places,
      types,
      periods
    }))
);
