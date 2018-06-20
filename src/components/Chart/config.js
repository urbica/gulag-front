import { scaleLinear, scaleTime } from 'd3-scale';
import { max } from 'd3-array';

export const margin = {
  top: 5,
  right: 25,
  bottom: 50,
  left: 15
};
export const height = 210 - margin.top - margin.bottom;

export const chartData = [
  {
    year: 1918,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1919,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1920,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1921,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1922,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1923,
    prisoners: 3049,
    dead: 0
  },
  {
    year: 1924,
    prisoners: 5044,
    dead: 0
  },
  {
    year: 1925,
    prisoners: 7727,
    dead: 0
  },
  {
    year: 1926,
    prisoners: 10682,
    dead: 0
  },
  {
    year: 1927,
    prisoners: 14810,
    dead: 0
  },
  {
    year: 1928,
    prisoners: 21900,
    dead: 0
  },
  {
    year: 1929,
    prisoners: 53963,
    dead: 0
  },
  {
    year: 1930,
    prisoners: 179000,
    dead: 7980
  },
  {
    year: 1931,
    prisoners: 212000,
    dead: 7283
  },
  {
    year: 1932,
    prisoners: 268700,
    dead: 13267
  },
  {
    year: 1933,
    prisoners: 334300,
    dead: 67297
  },
  {
    year: 1934,
    prisoners: 510307,
    dead: 26295
  },
  {
    year: 1935,
    prisoners: 725483,
    dead: 28328
  },
  {
    year: 1936,
    prisoners: 839406,
    dead: 20595
  },
  {
    year: 1937,
    prisoners: 820881,
    dead: 25376
  },
  {
    year: 1938,
    prisoners: 996367,
    dead: 90546
  },
  {
    year: 1939,
    prisoners: 1317195,
    dead: 50502
  },
  {
    year: 1940,
    prisoners: 1344408,
    dead: 46665
  },
  {
    year: 1941,
    prisoners: 1500524,
    dead: 100997
  },
  {
    year: 1942,
    prisoners: 1415596,
    dead: 248887
  },
  {
    year: 1943,
    prisoners: 983974,
    dead: 166967
  },
  {
    year: 1944,
    prisoners: 663594,
    dead: 60948
  },
  {
    year: 1945,
    prisoners: 715506,
    dead: 43848
  },
  {
    year: 1946,
    prisoners: 600897,
    dead: 18154
  },
  {
    year: 1947,
    prisoners: 808839,
    dead: 35668
  },
  {
    year: 1948,
    prisoners: 1108057,
    dead: 27605
  },
  {
    year: 1949,
    prisoners: 1216361,
    dead: 15739
  },
  {
    year: 1950,
    prisoners: 1416300,
    dead: 14703
  },
  {
    year: 1951,
    prisoners: 1543382,
    dead: 15587
  },
  {
    year: 1952,
    prisoners: 1713614,
    dead: 13806
  },
  {
    year: 1953,
    prisoners: 1731693,
    dead: 5825
  },
  {
    year: 1954,
    prisoners: 884040,
    dead: 0
  },
  {
    year: 1955,
    prisoners: 748489,
    dead: 0
  },
  {
    year: 1956,
    prisoners: 557877,
    dead: 0
  },
  {
    year: 1957,
    prisoners: 492092,
    dead: 0
  },
  {
    year: 1958,
    prisoners: 409567,
    dead: 0
  },
  {
    year: 1959,
    prisoners: 388114,
    dead: 0
  },
  {
    year: 1960,
    prisoners: 276279,
    dead: 0
  }
];
export const PRISONERS_AMOUNT = 20839633;
export const DEAD_AMOUNT = 1727684;

export const yScale = scaleLinear()
  .domain([0, max(chartData, d => d.prisoners)])
  .range([height, 0]);

export const calculateXScale = width =>
  scaleTime()
    .domain([new Date(1918, 0, 1), new Date(1960, 11, 31)])
    .range([0, width - margin.left - margin.right])
    .clamp(true);
