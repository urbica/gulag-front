import { createSelector } from 'reselect';

import { campsSelector, langSelector } from '../App/selectors';

export default createSelector(
  campsSelector,
  langSelector,
  (state, { match }) => match,
  (camps, lang, match) => {
    if (!camps) return null;

    const curentCamp = camps
      .filter(camp => camp.get('id') === Number.parseInt(match.params.id, 10))
      .filter(camp => camp.getIn(['published', lang]))
      .first();

    return curentCamp;
  }
);
