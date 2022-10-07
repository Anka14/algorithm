
//***Write an algorithm which calculates:

//the sum of two chosen number

const a = 2;
const b =5;
const sum = a + b;
console.log (sum);

//the division of two chosen number
const q = 10; 
const v = 2;
const dev = q/v;
console.log (dev);

//the modulo of two inputed numbers
const d = 10;
const g = 3; 
const mdulo = 10%2;
console.log (mdulo);

//Write an algorithm which receives the radius of a circle and calculate its surface.
let radius = 10;
const Pi = 3.14;
console.log ( Math.PI * Math.pow (radius, 2));

//Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight.
let number;
const hour = 10;
const minute = 20;
const second = 2;
number = hour * 3600 + 60 * minute + second;
console.log(number);

//fnction
 function secondsCount (m,h,s){
  const hourToSeconds = h *3600;
  const minutToSeconds = m * 60;
  return hourToSeconds + minutToSeconds + s;
 }
 console.log (secondsCount(1,1,1));


