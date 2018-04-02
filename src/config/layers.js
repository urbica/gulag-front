import Immutable from 'immutable';

export default Immutable.fromJS([
  {
    id: 'prisons',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-radius': 1.75,
      'circle-color': [
        'match',
        ['get', 'typeId'],
        1,
        'rgb(235,66,0)',
        2,
        'rgb(204,145,51)',
        3,
        'rgb(42,167,148)',
        4,
        'rgb(39,73,241)',
        5,
        'rgb(136,68,119)',
        6,
        'rgb(23,149,211)',
        /* other */ '#ccc'
      ],
      'circle-opacity': 1
    }
  },
  {
    id: 'prisonsHalo',
    type: 'circle',
    interactive: true,
    source: 'prisons',
    paint: {
      'circle-color': [
        'match',
        ['get', 'typeId'],
        1,
        'rgb(235,66,0)',
        2,
        'rgb(204,145,51)',
        3,
        'rgb(42,167,148)',
        4,
        'rgb(39,73,241)',
        5,
        'rgb(136,68,119)',
        6,
        'rgb(23,149,211)',
        /* other */ '#ccc'
      ],
      'circle-opacity': 0.2,
      'circle-radius': {
        property: 'peoples',
        stops: [
          [{ zoom: 1, value: 0 }, 4],
          [{ zoom: 1, value: 200000 }, 20],
          [{ zoom: 18, value: 0 }, 32],
          [{ zoom: 18, value: 200000 }, 400]
        ]
      }
    }
  },
  {
    id: 'prisonsHalo_hover',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-color': '#eb4200',
      'circle-opacity': 0.7,
      'circle-radius': {
        property: 'peoples',
        stops: [
          [{ zoom: 1, value: 0 }, 4],
          [{ zoom: 1, value: 200000 }, 20],
          [{ zoom: 18, value: 0 }, 32],
          [{ zoom: 18, value: 200000 }, 400]
        ]
      }
    },
    filter: ['==', 'id', '']
  },
  {
    id: 'prisonsHalo_active',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-color': '#eb4200',
      'circle-opacity': 0.7,
      'circle-radius': {
        property: 'peoples',
        stops: [
          [{ zoom: 1, value: 0 }, 4],
          [{ zoom: 1, value: 200000 }, 20],
          [{ zoom: 18, value: 0 }, 32],
          [{ zoom: 18, value: 200000 }, 400]
        ]
      }
    },
    filter: ['==', 'id', '']
  },
  {
    id: 'prisonsNames',
    type: 'symbol',
    source: 'prisons',
    layout: {
      'text-field': '{ruName}',
      'text-size': {
        stops: [[0, 8], [4, 10], [6, 14], [12, 22], [22, 28]]
      },
      'text-anchor': 'left',
      'text-justify': 'left',
      'text-offset': [1.5, 0]
    },
    paint: {
      'text-color': '#fff'
    },
    filter: ['==', 'id', '']
  },
  {
    id: 'prisonsNames_active',
    type: 'symbol',
    source: 'prisons',
    layout: {
      'text-field': '{ruName}',
      'text-size': 12,
      'text-anchor': 'left',
      'text-justify': 'left',
      'text-offset': [1.5, 0]
    },
    paint: {
      'text-color': '#fff'
    },
    filter: ['==', 'id', '']
  }
]);
