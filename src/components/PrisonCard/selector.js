export default (state, { match }) => {
  const prisonSelector = state.getIn(['data', 'prisons', match.params.id]);
  const activitiesSelector = state.getIn(['data', 'activities']);

  if (!prisonSelector) {
    return null;
  }

  const activityId = prisonSelector.get('activity_id');

  if (activityId === null) {
    return prisonSelector;
  }

  const activityName =
    activitiesSelector
      .find(activity => activity.get('id') === activityId)
      .get('name');

  return prisonSelector
    .set('activity', activityName);
};
