export const splitDigits = digit =>
  String(digit).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const getPeriods = locations => {
  const loc = locations || [];
  return loc.reduce((acc, location) => {
    if (location.get('statistics')) {
      if (location.get('statistics').size === 1) {
        return [...acc, `${location.getIn(['statistics', 0, 'year'])}; `];
      }
      if (location.get('statistics').size > 1) {
        const sortedStatistics = location.get('statistics').sort((a, b) => {
          if (a.get('year') > b.get('year')) return 1;
          if (a.get('year') < b.get('year')) return -1;
          return 0;
        });

        const firstYear = sortedStatistics.first().get('year');
        const lastYear = sortedStatistics.last().get('year');

        return [...acc, `${firstYear}—${lastYear}; `];
      }
      return acc;
    }
    return acc;
  }, []);
};
