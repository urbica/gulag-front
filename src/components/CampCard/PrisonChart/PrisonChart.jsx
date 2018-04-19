import React from 'react';
import PropTypes from 'prop-types';
import { scaleTime, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

import { margin, width } from './config';

import Axis from './Axis/Axis';
import PrisonersArea from './PrisonersArea/PrisonersArea';

const PrisonChart = ({ locations, lang }) => {
  const data = locations
    .reduce(
      (acc, location) => [...acc, ...location.get('statistics').toJS()],
      []
    )
    .sort((a, b) => a.year > b.year);

  const firstYear = data[0].year;
  const lastYear = data[data.length - 1].year;

  const height = (lastYear - firstYear + 1) * 26;

  const yScale = scaleTime()
    .domain([new Date(firstYear, 0, 1), new Date(lastYear, 11, 31)])
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.prisonersCount)])
    .range([0, width]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <Axis ticks={lastYear - firstYear + 1} scale={yScale} height={height} />
      <PrisonersArea
        lang={lang}
        data={data}
        height={height}
        xScale={xScale}
        yScale={yScale}
      />
    </svg>
  );
};

PrisonChart.propTypes = {
  locations: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

export default PrisonChart;
