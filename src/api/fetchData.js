import Immutable from 'immutable';
import { dataToken, mapToken } from '../config/tokens';

const dataOptions = { headers: { Authorization: `Bearer ${dataToken}` } };
const mapStylesUrl = `https://api.mapbox.com/styles/v1/gulagmap/cj8bt4qbw7kbo2rry4oft6e5g?access_token=${mapToken}`;

export default () =>
  new Promise((resolve, reject) =>
    Promise.all([
      fetch('/api/camps', dataOptions).then(res => (res.status !== 200 ? reject(res) : res.json())),
      // fetch('/api/public/uploads.json', dataOptions)
      //   .then(res => (res.status !== 200 ? reject(res) : res.json())),
      fetch('/api/camp-activities', dataOptions).then(
        res => (res.status !== 200 ? reject(res) : res.json())
      ),
      fetch('/api/camp-regions', dataOptions).then(
        res => (res.status !== 200 ? reject(res) : res.json())
      ),
      fetch('/api/camp-types', dataOptions).then(
        res => (res.status !== 200 ? reject(res) : res.json())
      ),
      fetch('/api/periods', dataOptions).then(
        res => (res.status !== 200 ? reject(res) : res.json())
      ),
      fetch(mapStylesUrl).then(res => (res.status !== 200 ? reject(res) : res.json()))
    ])
      .then(([camps, activities, regions, types, periods, mapStyles]) =>
        resolve(
          Immutable.fromJS({
            camps,
            activities,
            regions,
            types,
            periods,
            mapStyles
          })
        ))
      .catch(err => reject(err)));
