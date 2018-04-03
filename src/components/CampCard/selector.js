// import activitiesEn from '../../config/i18n';

const campsSelector = state => state.getIn(['data', 'camps']);
// const activitiesSelector = (state) => {
//   if (state.getIn(['intl', 'locale']) === 'ru') {
//     return state.getIn(['data', 'activities']);
//   }
//   return activitiesEn;
// };

// const withFirstYear = (prison) => {
//   const firstYear = prison
//     .getIn(['features', 0, 'properties'])
//     .keySeq()
//     .first();
//
//   return prison.set('firstYear', firstYear);
// };

// const withActivityName = (activities, prison) => {
//   const activityId = prison.get('activityId');
//
//   if (activityId === null) {
//     return prison;
//   }
//
//   const activityName = activities
//     .find(activity => activity.get('id') === activityId)
//     .getIn(['title', 'ru']);
//
//   return prison.set('activity', activityName);
// };

export default (state, { match }) => {
  const camps = campsSelector(state);

  if (!camps) {
    return null;
  }

  const curentCamp = camps
    .filter(camp => camp.get('id') === Number.parseInt(match.params.id, 10))
    .first();
  // const activities = activitiesSelector(state);

  return curentCamp;
  // return withActivityName(
  //   activities,
  //   withFirstYear(curentCamp)
  //   curentCamp
  // );
};
