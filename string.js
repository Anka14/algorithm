const text = 'hello';
console.log (text[1]);

//

  console.log(typeof 'hello');
  console.log (typeof 3)

  let str = 'MA';
  if (str === str.toUpperCase()) {
    console.log ('upper true')
  } else {
    
    console.log ('lowercase')
  }
  
  let phraze = 'tyma';
  if (phraze === phraze.toLowerCase()) {
    console.log ('lower true')
  } else {
    
    console.log ('upper')
  }
  
  const letter = 'A';
  console.log (letter.toLowerCase());

let sentence = 'hello world!';
let result = sentence.substring(6);
console.log (result)

let txt = "Hello world, welcome to the universe.";
let rsult = txt.indexOf("welcome");
console.log(rsult);

//Write a function which receives two strings and returns them as one string.
//1
const oneSent = 'I love my son Tymur';
let secondSent = 'most of all in the world';
const joinSent = () => {
  console.log (`${oneSent} ${secondSent}`)
}
joinSent();
//2
function  joinword (onephraze){
return onephraze.toUpperCase();
 
}
console.log(joinword ('i love my son, most of all in the world'));

//Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"


const receiveName = (name, surname) => {
 return  (`${surname} ${name}`);
}
console.log(receiveName('Doe', 'John'));


//Write a function which receives a sentence full of whitespace and returns it without them.

let letters = 'a lovely boy '
console.log(letters.split(' ').join(''));