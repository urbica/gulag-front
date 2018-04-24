import Immutable from 'immutable';
import { dataToken } from '../config/tokens';

const dataOptions = { headers: { Authorization: `Bearer ${dataToken}` } };

export default () =>
  new Promise((resolve, reject) =>
    Promise.all([
      fetch('/api/camps', dataOptions).then(
        res => (res.status !== 200 ? reject(res) : res.json())
      ),
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
      )
    ])
      .then(([camps, activities, regions, types, periods]) =>
        resolve(
          Immutable.fromJS({
            camps,
            activities,
            regions,
            types,
            periods
          })
        ))
      .catch(err => reject(err)));
