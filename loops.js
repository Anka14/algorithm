

//Write an algorithms which receives an integers n and prints:
//n = n +1
for (let n = 1; n < 11; n+=1) {
  console.log (n)
};

//the numbers from 1 to n in descending order
for (let a = 10; a > 0; a-=1 ){
  console.log (a)
};

//the numbers from -n to n
for (let b = -1; b < 10; b +=1) {
  console.log (b)
};

//the odd numbers from 1 to n
for (let i = 1; i < 10; i+=1){
  if ((i % 2) !== 0) {
    console.log (i)
  }
}

//Write an algorithm which receives an random integer and prints from 0 to it.

const enterNumber = require('prompt-sync')();
let inputNum = prompt ('Enter the number from 0 to 10');
let numEntered = Number (inputNum);
for (numEntered = 0; numEntered < 10; numEntered += 1) {
  console.log ( numEntered)
}

//Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.

let thr = prompt ('enter the number of throws');
let check = prompt ('enter the number of check');
let count = 0;
for (let i = 1; i <= thr; i+=1) {
  let minimum = 1;
  let maximum = 6;
  let randomNumber = Math.round(Math.random() * (maximum - minimum)+ minimum);
  if (randomNumber === parseInt(check)) {
    count+=1;
    console.log ('the Dices' + count)
  }
}

//Write an algorithm which prints all the even numbers from 0 to a given number.
for (let evenNum = 0; evenNum < 7; evenNum +=1) {
  if ((evenNum % 2) === 0) {
    console.log (evenNum)
  }
}

//Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

function isperfect(inputnumber)
{
  //sum of inputnumber
  let sum = 0; 
  for (let i = 1; i <= inputnumber/2; i+=1) {
    if (inputnumber % i === 0) {
      sum +=i;
    }
  }
  if (sum === inputnumber && sum !== 0) {
    console.log ("it is perfect number" ,sum, )
  }
  else {
    ('it is not a perfect number')
  }
}

isperfect(6);



