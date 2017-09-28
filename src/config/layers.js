import Immutable from 'immutable';

export default Immutable.fromJS([
  {
    id: 'prisons',
    type: 'circle',
    source: 'prisons',
    paint: {
      'circle-radius': 1.75,
      'circle-color': '#ff2b00',
      'circle-opacity': 1
    }
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
