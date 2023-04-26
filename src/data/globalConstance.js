//create data

let DATE_START = new Date("August 19, 2023 07:00");
export let DATE_MIN = new Date("August 19, 2023 00:00");
export let DATE_MAX = new Date("August 22, 2023 00:00");
export let dataNew = [];
for (var i = 0; i < 3960; i++) {
  let y = Math.sin((i * Math.PI) / 720);
  const newdate = DATE_START.setMinutes(DATE_START.getMinutes() + 1);
  const myDate = new Date(newdate);
  dataNew.push({
    x: myDate,
    y: y,
  });
}

export const pointArray = dataNew.reduce((newArray, current) => {
  if (current.y > 0) {
    newArray.push(current.y * 3000);
  }
  if (current.y < 0) {
    newArray.push(current.y * 0);
  }
  return newArray;
}, []);

export const lableArray = dataNew.reduce((newArray, current) => {
  newArray.push(current.x);
  return newArray;
}, []);
/* data tide */
export const dataTide = [
  { x: DATE_MIN, y: 1800 },
  { x: lableArray[0], y: 1500 },
  { x: lableArray[100], y: 2500 },
  { x: lableArray[200], y: 1000 },
  { x: lableArray[300], y: 1900 },
  { x: lableArray[400], y: 2200 },
  { x: lableArray[500], y: 1300 },
  { x: lableArray[600], y: 1800 },
  { x: lableArray[700], y: 700 },
  { x: lableArray[900], y: 500 },
  { x: lableArray[1200], y: 600 },
  { x: lableArray[1800], y: 1000 },
  { x: lableArray[2200], y: 1100 },
  { x: lableArray[2500], y: 1700 },
  { x: lableArray[2800], y: 500 },
  { x: lableArray[2900], y: 600 },
  { x: lableArray[3400], y: 1000 },
  { x: lableArray[3500], y: 400 },
  { x: lableArray[3700], y: 1000 },
  { x: lableArray[3800], y: 500 },
  { x: lableArray[3900], y: 7000 },
  { x: lableArray[3959], y: 7000 },
];
//set time

export const formatTime = (time) => {
  const fmTime = time % 24;
  const decimal = fmTime % 1;
  const hr = Math.floor(fmTime);
  const min = Math.floor(60 * decimal);
  if (hr > 12) {
    return `${hr - 12}:${min > 10 ? "" : "0"}${min} pm`;
  } else if (hr === 0) {
    return `${12}:${min > 10 ? "" : "0"}${min} pm`;
  }
  return `${hr}:${min > 10 ? "" : "0"}${min} am`;
};

export const convertScrollToTime = (scrollPercentage) => {
  return scrollPercentage * 58 + 7;
};
//data background
export const dataBackGround = [
  { id: 1, xMIn: DATE_MIN, xMax: new Date("August 19, 2023 06:00") },
  {
    id: 2,
    xMIn: new Date("August 19, 2023 20:00"),
    xMax: new Date("August 20, 2023 06:00"),
  },
  {
    id: 3,
    xMIn: new Date("August 20, 2023 20:00"),
    xMax: new Date("August 21, 2023 06:00"),
  },
];

export const convertScrollIconMoonSun = (scrollPercentage) => {
  let next = 0;
  next = Math.sin((scrollPercentage * 3600 * Math.PI) / 720);
  next *= 142;
  if (next < 0) return { moonSun: "moon", next: -180 };

  return { moonSun: "sun", next: 0 - next };
};
//474px , 1298px , 2108px , 2930px ,3740px,4563px
/* const morningGen = line()
  .x((p) => p.x)
  .y((p) => p.y)
  .curve(curveCardinal); */