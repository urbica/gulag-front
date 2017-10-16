/* eslint-disable */
const waterfall = require('async/waterfall');
const fetch = require('node-fetch');
// const data = require('./newPrisons.json');

const token = 'sk.eyJhbGciOiJIUzI1NiJ9.cHJpdmF0ZQ.ga6Y4f_-OxagXvu4LcRjQf_59616cTy8xj3sZZRvlCY';

const fetches = data.map((prison) => {
  const options = {
    body: JSON.stringify(prison),
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  return (callback) => {
    fetch(`https://gulagmap.ru/api/public/camps/id/${prison.id}`, options)
      .then((res) => {
        console.log('prison.id:', prison.id, res.status);
        callback(null);
      })
      .catch((err) => {
        console.log('prison.id: ', prison.id, err);
        callback(err);
      });
  };
});

waterfall(fetches, function (err, result) {
  console.log('err: ', err, '\nresult: ', result);
});
