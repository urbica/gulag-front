const prisonSelector = (state, id) => state.getIn(['data', 'prisons', id]);
const activitiesSelector = state => state.getIn(['data', 'activities']);

const withFirstYear = (prison) => {
  const firstYear = prison
    .getIn(['features', 0, 'properties'])
    .keySeq()
    .first();

  return prison.set('firstYear', firstYear);
};

const withActivityName = (activities, prison) => {
  const activityId = prison.get('activity_id');

  if (activityId === null) {
    return prison;
  }

  const activityName = activities
    .find(activity => activity.get('id') === activityId)
    .get('name');

  return prison.set('activity', activityName);
};

export default (state, { match }) => {
  const prison = prisonSelector(state, match.params.id);

  if (!prison) {
    return null;
  }

  const activities = activitiesSelector(state);

  return withActivityName(
    activities,
    withFirstYear(prison)
  );
};
