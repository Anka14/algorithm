const name = 'Tymur';
if (name){
  console.log ('yes, i am ' + name)
} else {
  console.log ('no, i am not' + name )
}

//In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.

let tarif = 10;
let discount = 8;
let age = 0;

function price (age) {
if (age > 10) {
  console.log ('total price ' ,tarif,);
} else {
  console.log ('total price is ' + discount)
}
}
price (11);

//Write an algorithm which given 3 numbers finds the maximum.
function maxNumber (x, y, z) {
  if (x > y && x > z) {
    console.log ('MaxNumber is ' ,x,)
  } else if  (y > x && y > z) {
console.log ('maxNumber is ' ,y,)
  }
  else {
    console.log ('MaxNumber is ' ,z,)
  }
}
 maxNumber (100, 2, 6)

 // Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.
const maxNum = 6;
const minNum = 1;
let y = Math.round (Math.random () * (maxNum -minNum) + minNum);
let t = Math.round (Math.random () * (maxNum -minNum) + minNum);
let k = Math.round (Math.random () * (maxNum -minNum) + minNum);

console.log (y, t, k);
function identycalNumber () {
  if ( y === t && y === k) {
    console.log ('identical number = 3')
  }
  else if (y === t || y === k) {
    console.log ('identical number = 2')
  } else {
    console.log ('identical number = 0')
  }

}

identycalNumber (y, t, k);



// Write an algorithm which given the number of a day returns its name.

const weekDay = 4;
let currentDay;

switch (weekDay) {
  case 1: 
  currentDay = 'sunday'
  break;
  case 2:
    currentDay = 'monday'
    break;
  case 3 : 
  currentDay = 'tuesday'
  break;
  case 4 :
    currentDay ='thursday'
    break;
    case 5 :
      currentDay = 'friday'
      break;
      case 6:
        currentDay = 'saturday'
        break;
}

console.log (currentDay)

//A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.
function copyPrice (c) {
const price10 = 0.12;
const price20 = 0.11;
const priceOther = 0.10 
 if (c === 10) {
   console.log ( price10)
 } else if (c === 20) {
   console.log (price20)
 } else console.log (priceOther)
}

copyPrice(3)


