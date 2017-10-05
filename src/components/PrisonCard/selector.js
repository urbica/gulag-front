export default (state, { match }) => {
  const prisonSelector = state.getIn(['data', 'prisons', match.params.id]);
  const activitiesSelector = state.getIn(['data', 'activities']);

  if (!prisonSelector) {
    return null;
  }

  const firstYear =
    prisonSelector
      .getIn(['features', 0, 'properties'])
      .keySeq()
      .first();
  const prison =
    prisonSelector
      .set('firstYear', firstYear);
  const activityId = prisonSelector.get('activity_id');

  if (activityId === null) {
    return prison;
  }

  const activityName =
    activitiesSelector
      .find(activity => activity.get('id') === activityId)
      .get('name');

  return prison
    .set('activity', activityName);
};
