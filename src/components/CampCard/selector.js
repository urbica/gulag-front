import { filteredCampsSelector } from '../App/selectors';

export default (state, { match }) => {
  const camps = filteredCampsSelector(state);

  const curentCamp = camps
    .filter(camp => camp.get('id') === Number.parseInt(match.params.id, 10))
    .first();

  return curentCamp;
};
