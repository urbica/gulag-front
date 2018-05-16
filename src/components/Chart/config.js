import { scaleLinear, scaleTime } from 'd3-scale';
import { max } from 'd3-array';

export const margin = {
  top: 5,
  right: 25,
  bottom: 50,
  left: 15
};
export const height = 300 - margin.top - margin.bottom;

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
    prisoners: 0,
    dead: 0
  },
  {
    year: 1924,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1925,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1926,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1927,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1928,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1929,
    prisoners: 0,
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
    prisoners: 965742,
    dead: 32659
  },
  {
    year: 1936,
    prisoners: 1296494,
    dead: 26479
  },
  {
    year: 1937,
    prisoners: 1196369,
    dead: 33499
  },
  {
    year: 1938,
    prisoners: 1881570,
    dead: 126585
  },
  {
    year: 1939,
    prisoners: 2024946,
    dead: 65301
  },
  {
    year: 1940,
    prisoners: 1846270,
    dead: 56703
  },
  {
    year: 1941,
    prisoners: 2400422,
    dead: 120864
  },
  {
    year: 1942,
    prisoners: 2045575,
    dead: 382348
  },
  {
    year: 1943,
    prisoners: 1721716,
    dead: 288599
  },
  {
    year: 1944,
    prisoners: 1331115,
    dead: 124725
  },
  {
    year: 1945,
    prisoners: 1736187,
    dead: 87903
  },
  {
    year: 1946,
    prisoners: 1355739,
    dead: 33066
  },
  {
    year: 1947,
    prisoners: 1996641,
    dead: 62007
  },
  {
    year: 1948,
    prisoners: 2449626,
    dead: 53102
  },
  {
    year: 1949,
    prisoners: 2587732,
    dead: 30688
  },
  {
    year: 1950,
    prisoners: 2760095,
    dead: 25354
  },
  {
    year: 1951,
    prisoners: 2705439,
    dead: 24090
  },
  {
    year: 1952,
    prisoners: 2662402,
    dead: 21221
  },
  {
    year: 1953,
    prisoners: 2624537,
    dead: 10369
  },
  {
    year: 1954,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1955,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1956,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1957,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1958,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1959,
    prisoners: 0,
    dead: 0
  },
  {
    year: 1960,
    prisoners: 0,
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
