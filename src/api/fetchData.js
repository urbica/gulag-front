import { fromJS } from 'immutable';

export default () =>
  new Promise((resolve, reject) => {
    const checkStatus = res => (res.status !== 200 ? reject(res) : res.json());

    return Promise.all([
      fetch('/api/camps').then(checkStatus),
      fetch('/api/camp-activities').then(checkStatus),
      fetch('/api/camp-regions').then(checkStatus),
      fetch('/api/camp-types').then(checkStatus),
      fetch('/api/periods').then(checkStatus)
    ])
      .then(([camps, activities, regions, types, periods]) =>
        resolve(fromJS({ camps, activities, regions, types, periods })))
      .catch(err => reject(err));
  });
