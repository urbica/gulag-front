import Immutable from 'immutable';

export default Immutable.fromJS([
  // {
  //   id: 'ussr',
  //   // before: 'waterway',
  //   type: 'fill',
  //   source: 'composite',
  //   'source-layer': 'NEWUSSR_BOUND',
  //   layout: {
  //     // visibility: 'visible'
  //   },
  //   paint: {
  //     'fill-color': '#1b2128', // 222933 #1b2128
  //     'fill-opacity': 1
  //   },
  //   filter: ['all',
  //     ['<=', 'year_start', 1960],
  //     ['>=', 'year_end', 1960]
  //   ]
  // },
  // {
  //   id: 'chukotka',
  //   before: 'water',
  //   type: 'fill',
  //   source: 'composite',
  //   'source-layer': 'chukotka_patch-4b7lx1',
  //   layout: {
  //     // visibility: 'visible'
  //   },
  //   paint: {
  //     'fill-color': '#1b2128',
  //     'fill-opacity': 1
  //   }
  // },
  {
    id: 'prisons',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-radius': 1.75,
      'circle-color': '#ff2b00',
      'circle-opacity': 1
    }
  },
  {
    id: 'prisonsHalo',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-color': '#eb4200',
      'circle-opacity': 0.3,
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
        stops: [
          [0, 8],
          [4, 10],
          [6, 14],
          [12, 22],
          [22, 28]
        ]
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
  // {
  //   id: 'ussr',
  //   type: 'fill',
  //   source: 'ussr',
  //   'source-layer': 'NEWUSSR_BOUND',
  //   layout: {},
  //   paint: {
  //     'fill-color': '#1b2128', // 222933 #1b2128
  //     'fill-opacity': 1
  //   },
  //   filter: ['all',
  //     ['<=', 'year_start', this.props.currentYear],
  //     ['>=', 'year_end', this.props.currentYear]
  //   ]
  // }
]);
