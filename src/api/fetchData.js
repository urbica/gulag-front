import Immutable from 'immutable';
import { dataToken, mapToken } from '../config/tokens';

const dataOptions = { headers: { Authorization: `Bearer ${dataToken}` } };
const mapStylesUrl =
  `https://api.mapbox.com/styles/v1/gulagmap/cj8bt4qbw7kbo2rry4oft6e5g?access_token=${mapToken}`;

export default () => (
  new Promise((resolve, reject) => (
    Promise.all([
      // fetch('/api/public/camps.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      // fetch('/api/public/uploads.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      // fetch('/api/public/activities.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      // fetch('/api/public/places.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      // fetch('/api/public/types.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      fetch('/api/periods', dataOptions)
        .then(res => (res.status !== 200 ? reject(res) : res.json())),
      fetch(mapStylesUrl)
        .then(res => (res.status !== 200 ? reject(res) : res.json()))
    ])
      .then(([periods, mapStyles]) => resolve(Immutable.fromJS({ periods, mapStyles })))
      // .then(([camps, photos, activities, places, types, periods, mapStyles]) =>
      //   resolve(Immutable.fromJS({
      //     camps, photos, activities, places, types, periods, mapStyles
      //   })))
      .catch(err => reject(err))
  ))
);
