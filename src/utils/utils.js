export const splitDigits = digit =>
  String(digit).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const getPeriods = locations => {
  const loc = locations || [];
  return loc
    .sort((a, b) => {
      if (a.get('orderIndex') > b.get('orderIndex')) return 1;
      if (a.get('orderIndex') < b.get('orderIndex')) return -1;
      return 0;
    })
    .reduce((acc, location) => {
      const statistics = location.get('statistics');
      if (!statistics || statistics.size === 0) return acc;

      if (statistics.size === 1) {
        return [...acc, `${statistics.getIn([0, 'year'])}; `];
      }

      const sortedStatistics = statistics.sort((a, b) => {
        if (a.get('year') > b.get('year')) return 1;
        if (a.get('year') < b.get('year')) return -1;
        return 0;
      });

      const firstYear = sortedStatistics.first().get('year');
      const lastYear = sortedStatistics.last().get('year');

      return [...acc, `${firstYear}—${lastYear}; `];
    }, []);
};
