import React from 'react';
import { scaleTime } from 'd3-scale';

import { height, margin } from './config';

import PrisonersArea from './PrisonersArea/PrisonersArea';
import Axis from './Axis/Axis';
import Slider from './Slider/Slider';
import Periods from './Periods/Periods';

// styled
import Container from './Container';

let width;
const { innerWidth } = window;

if (innerWidth < 1024) {
  width = innerWidth - 40 - margin.left - margin.right;
} else if (innerWidth < 1280) {
  width = innerWidth - 150 - margin.left - margin.right;
} else {
  width = innerWidth - 200 - margin.left - margin.right;
}

const xScale = scaleTime()
  .domain([new Date(1918, 0, 1), new Date(1960, 11, 31)])
  .range([0, width])
  .clamp(true);

const Chart = () => (
  <Container>
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <defs>
        <linearGradient
          id='Gradient'
          x1='0%'
          y1='31%'
          x2='10%'
          y2='0%'
          spreadMethod='repeat'
        >
          <stop offset='0%' stopColor='rgb(225,225,225)' />
          <stop offset='12%' stopColor='rgb(225,225,225)' />
          <stop offset='13%' stopColor='rgb(0,0,0)' />
          <stop offset='25%' stopColor='rgb(0,0,0)' />
          <stop offset='26%' stopColor='rgb(225,225,225)' />
          <stop offset='38%' stopColor='rgb(225,225,225)' />
          <stop offset='39%' stopColor='rgb(0,0,0)' />
          <stop offset='51%' stopColor='rgb(0,0,0)' />
          <stop offset='52%' stopColor='rgb(225,225,225)' />
          <stop offset='64%' stopColor='rgb(225,225,225)' />
          <stop offset='65%' stopColor='rgb(0,0,0)' />
          <stop offset='77%' stopColor='rgb(0,0,0)' />
          <stop offset='78%' stopColor='rgb(225,225,225)' />
          <stop offset='90%' stopColor='rgb(225,225,225)' />
          <stop offset='91%' stopColor='rgb(0,0,0)' />
          <stop offset='100%' stopColor='rgb(0,0,0)' />
        </linearGradient>
        <filter
          id='gaussianBlur'
          width='185.7%'
          height='400%'
          x='-42.9%'
          y='-150%'
          filterUnits='objectBoundingBox'
        >
          <feGaussianBlur stdDeviation='5' in='SourceGraphic' />
        </filter>
      </defs>
      <PrisonersArea
        width={width}
        xScale={xScale}
      />
      <Axis
        width={width}
        xScale={xScale}
      />
      <Slider
        width={width}
        xScale={xScale}
      />
    </svg>
    <Periods
      width={width}
      xScale={xScale}
    />
  </Container>
);

export default Chart;
