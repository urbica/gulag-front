export default (state, { match }) =>
  state.getIn(['data', 'periods', match.params.id]);
