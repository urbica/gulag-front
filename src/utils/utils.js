export const splitDigits = digit => String(digit).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const getPeriods = prison =>
  (prison.toJS().features || [])
    .map(feature => Object.keys(feature.properties).map(year => parseInt(year, 10)))
    .filter(years => years.length > 0)
    .map((years) => {
      if (years.length === 1) {
        return `${years[0]};\n`;
      }
      return `${Math.min(...years)} — ${Math.max(...years)};\n`;
    });

