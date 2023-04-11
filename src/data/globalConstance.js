export const INNER_WIDTH = window.innerWidth;
export const NUM_OF_ZOOM = 2;
export const WIDTH_CANVAS = INNER_WIDTH * NUM_OF_ZOOM;
export const HEIGHT_CHART = 250;
export const SECOND_PER_DAY = 86400;
export const MAX_WIDTH_OF_CANVAS = 1000;
export const CREATE_DATA = [
  {
    sunrise: 1586761513,
    sunset: 1586804953,
    startNight: 1586808553,
    startDay: 1586756812,
    data: [
      { point: 30, time: 1586736000, amountOfWater: "0.3m" },
      { point: 15, time: 1586745913, amountOfWater: "0.15m" },
      { point: 81, time: 1586763913, amountOfWater: "0.8m" },
      { point: 30, time: 1586778313, amountOfWater: "0.3m" },
      { point: 90, time: 1586789113, amountOfWater: "0.9m" },
      { point: 15, time: 1586807113, amountOfWater: "0.15m" },
      { point: 80, time: 1586817913, amountOfWater: "0.8m" },
    ],
  },
  {
    sunrise: 1586847913,
    sunset: 1586891353,
    startNight: 1586894953,
    startDay: 1586844013,
    data: [
      { point: 15, time: 1586832313, amountOfWater: "0.15m" },
      { point: 81, time: 1586850313, amountOfWater: "0.8m" },
      { point: 30, time: 1586864713, amountOfWater: "0.3m" },
      { point: 90, time: 1586875513, amountOfWater: "0.9m" },
      { point: 15, time: 1586893513, amountOfWater: "0.15m" },
      { point: 80, time: 1586904313, amountOfWater: "0.8m" },
    ],
  },
  {
    sunrise: 1586934313,
    sunset: 1586977753,
    startNight: 1586981353,
    startDay: 1586930413,
    data: [
      { point: 15, time: 1586918713, amountOfWater: "0.15m" },
      { point: 81, time: 1586936713, amountOfWater: "0.8m" },
      { point: 30, time: 1586951113, amountOfWater: "0.3m" },
      { point: 90, time: 1586961913, amountOfWater: "0.9m" },
      { point: 15, time: 1586979913, amountOfWater: "0.15m" },
      { point: 80, time: 1586990713, amountOfWater: "0.8m" },
      { point: 50, time: 1586995199, amountOfWater: "0.5m" },
    ],
  },
];
export const dataSun = [
  {
    name: "6h",
    sun: 0,
    tide: 1400,
  },
  {
    name: "8h",
    sun: 3000,
    tide: 1506,
  },
  {
    name: "10h",
    sun: 4500,
    tide: 989,
  },
  {
    name: "12h",
    sun: 5000,
    tide: 1228,
  },
  {
    name: "14h",
    sun: 4500,
    tide: 1100,
  },
  {
    name: "16h",
    sun: 3000,
    tide: 1700,
  },
  {
    name: "18h",
    sun: 0,
    tide: 1400,
  },
  {
    name: "20h",
    sun: 868,
    tide: 1506,
  },
  {
    name: "22h",
    sun: 868,
    tide: 989,
  },
  {
    name: "0h",
    sun: 868,
    tide: 1800,
  },
  {
    name: "2h",
    sun: 868,
    tide: 1100,
  },
  {
    name: "4h",
    sun: 868,
    tide: 1700,
  },
  {
    name: "6h",
    sun: 868,
    tide: 1700,
  },
];
