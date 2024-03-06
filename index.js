// EXAMPLE 1 - Convert a Unix timestamp to Time using JavaScript

const unixTimestamp = 1664000732;

const date = new Date(unixTimestamp * 1000);

const enUS = date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
console.log(enUS); // 👉️ 09:25:32 AM

const enGB = date.toLocaleTimeString('de-DE', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
console.log(enGB); // 👉️ 09:25:32

const deDE = date.toLocaleTimeString('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
console.log(deDE); // 👉️ 오전 09:25:32

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert a Unix timestamp to Time using getHours, getMinutes and getSeconds

// const unixTimestamp = 1664000732;

// const date = new Date(unixTimestamp * 1000);

// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// // 👇️ Format as hh:mm:ss
// const time = `${padTo2Digits(hours)}:${padTo2Digits(
//   minutes,
// )}:${padTo2Digits(seconds)}`;

// console.log(time); // 👉️ 09:25:32

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Timestamp to Relative Time (time ago) in JS

// function relativeDays(timestamp) {
//   const rtf = new Intl.RelativeTimeFormat('en', {
//     numeric: 'auto',
//   });
//   const oneDayInMs = 1000 * 60 * 60 * 24;
//   const daysDifference = Math.round(
//     (timestamp - new Date().getTime()) / oneDayInMs,
//   );

//   return rtf.format(daysDifference, 'day');
// }

// // (Today is 13th Jan, 2023)

// // 👇️ 7 days ago
// console.log(relativeDays(new Date('2023-01-07').getTime()));

// // 👇️ 3 days ago
// console.log(relativeDays(new Date('2023-01-11').getTime()));

// // 👇️ 2 days ago
// console.log(relativeDays(new Date('2023-01-12').getTime()));

// // 👇️ today
// console.log(relativeDays(new Date().getTime()));

// // 👇️ in 91 days
// console.log(relativeDays(new Date('2023-04-15').getTime()));
