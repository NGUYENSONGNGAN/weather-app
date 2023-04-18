//create data

let DATE_START = new Date("August 19, 2023 07:00");
export let DATE_MIN = new Date("August 19, 2023 00:00");
export let dataNew = [];
for (var i = 0; i < 3960; i++) {
  let y = Math.sin((i * Math.PI) / 720);
  const newdate = DATE_START.setMinutes(DATE_START.getMinutes() + 1);
  const myDate = new Date(newdate);
  dataNew.push({
    time: myDate,
    valueSunMon: y,
  });
}

export const pointArray = dataNew.reduce((newArray, current) => {
  if (current.valueSunMon > 0) {
    newArray.push(current.valueSunMon * 3000);
  }
  if (current.valueSunMon < 0) {
    newArray.push(current.valueSunMon * 0);
  }
  return newArray;
}, []);

export const lableArray = dataNew.reduce((newArray, current) => {
  newArray.push(current.time);
  return newArray;
}, []);
/* data tide */
export const dataTide = [
  { x: DATE_MIN, y: 1000 },
  { x: lableArray[0], y: 500 },
  { x: lableArray[100], y: 1000 },
  { x: lableArray[200], y: 800 },
  { x: lableArray[300], y: 900 },
  { x: lableArray[400], y: 1200 },
  { x: lableArray[500], y: 1300 },
  { x: lableArray[600], y: 800 },
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
  { x: lableArray[3900], y: 900 },
  { x: lableArray[3959], y: 4500 },
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
  return scrollPercentage * 60 + 7;
};
//data background
export const dataBackGround = [
  { id: 1, left: "0px", width: "400px", opacity: 0.7 },
  { id: 2, left: "0px", width: "450px", opacity: 0.4 },
  { id: 3, left: "1450px", width: "600px", opacity: 0.7 },
  { id: 4, left: "1380px", width: "665px", opacity: 0.4 },
  { id: 5, left: "3055px", width: "650px", opacity: 0.7 },
  { id: 6, left: "3000px", width: "700px", opacity: 0.4 },
  { id: 7, left: "4600px", width: "385px", opacity: 0.7 },
  { id: 8, left: "4600px", width: "385px", opacity: 0.4 },
];
export const convertScrollIconMoonSun = (scrollPercentage) => {
  let next = 0;
  if (
    scrollPercentage < 0.1 ||
    (scrollPercentage > 0.4 && scrollPercentage < 0.5) ||
    (scrollPercentage > 0.8 && scrollPercentage < 0.89)
  ) {
    next = scrollPercentage * 1000;
    return { moonSun: "sun", next: 0 - next };
  }
  if (
    (scrollPercentage > 0.1 && scrollPercentage < 0.2) ||
    (scrollPercentage > 0.5 && scrollPercentage < 0.6) ||
    (scrollPercentage > 0.89 && scrollPercentage < 0.99)
  ) {
    next = scrollPercentage * 1000;
    return { moonSun: "sun", next: 0 - next };
  }
  if (
    (scrollPercentage > 0.23 && scrollPercentage < 0.38) ||
    (scrollPercentage > 0.62 && scrollPercentage < 0.78)
  ) {
    next = 180;
    return { moonSun: "moon", next: 0 - next };
  }
  return { moonSun: "sun", next: 0 };
};
