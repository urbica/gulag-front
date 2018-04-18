export default statistics =>
  statistics.reduce(
    (acc, stat) =>
      stat.get('prisonersCount') > acc ? stat.get('prisonersCount') : acc,
    0
  );
