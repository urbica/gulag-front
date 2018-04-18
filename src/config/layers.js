import Immutable from 'immutable';
import campColors from './campsColors';

export default Immutable.fromJS({
  camps: {
    id: 'camps',
    type: 'circle',
    source: 'camps',
    paint: {
      'circle-radius': 1.75,
      'circle-color': [
        'match',
        ['get', 'typeId'],
        1,
        `rgb(${campColors[1]})`,
        2,
        `rgb(${campColors[2]})`,
        3,
        `rgb(${campColors[3]})`,
        4,
        `rgb(${campColors[4]})`,
        5,
        `rgb(${campColors[5]})`,
        6,
        `rgb(${campColors[6]})`,
        /* other */ '#ccc'
      ],
      'circle-opacity': 1
    }
  },
  campsHalo: {
    id: 'campsHalo',
    type: 'circle',
    interactive: true,
    source: 'camps',
    paint: {
      'circle-color': [
        'match',
        ['get', 'typeId'],
        1,
        `rgb(${campColors[1]})`,
        2,
        `rgb(${campColors[2]})`,
        3,
        `rgb(${campColors[3]})`,
        4,
        `rgb(${campColors[4]})`,
        5,
        `rgb(${campColors[5]})`,
        6,
        `rgb(${campColors[6]})`,
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
  campsHalo_hover: {
    id: 'campsHalo_hover',
    type: 'circle',
    source: 'camps',
    paint: {
      'circle-color': [
        'match',
        ['get', 'typeId'],
        1,
        `rgb(${campColors[1]})`,
        2,
        `rgb(${campColors[2]})`,
        3,
        `rgb(${campColors[3]})`,
        4,
        `rgb(${campColors[4]})`,
        5,
        `rgb(${campColors[5]})`,
        6,
        `rgb(${campColors[6]})`,
        /* other */ '#ccc'
      ],
      'circle-opacity': 0.5,
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
    filter: ['==', 'campId', '']
  },
  // prisonsHalo_active: {
  //   id: 'prisonsHalo_active',
  //   type: 'circle',
  //   source: 'camps',
  //   paint: {
  //     'circle-color': '#eb4200',
  //     'circle-opacity': 0.7,
  //     'circle-radius': {
  //       property: 'peoples',
  //       stops: [
  //         [{ zoom: 1, value: 0 }, 4],
  //         [{ zoom: 1, value: 200000 }, 20],
  //         [{ zoom: 18, value: 0 }, 32],
  //         [{ zoom: 18, value: 200000 }, 400]
  //       ]
  //     }
  //   },
  //   filter: ['==', 'id', '']
  // },
  campsNames: {
    id: 'campsNames',
    type: 'symbol',
    source: 'camps',
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
    filter: ['==', 'campId', '']
  }
  // prisonsNames_active: {
  //   id: 'prisonsNames_active',
  //   type: 'symbol',
  //   source: 'camps',
  //   layout: {
  //     'text-field': '{ruName}',
  //     'text-size': 12,
  //     'text-anchor': 'left',
  //     'text-justify': 'left',
  //     'text-offset': [1.5, 0]
  //   },
  //   paint: {
  //     'text-color': '#fff'
  //   },
  //   filter: ['==', 'id', '']
  // }
});
