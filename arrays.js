
const array = ['arsen', 'aldabric', 'john'];
let arrayNew = array.splice (2, 1);
array.push ('Aelis')
console.log (array);

//write an algorithm which prints everything in an array.

const names = ["Vita", 'katja', 'olja'];
 console.log (names);

 //Write an algorithm which receives an array of integers and prints its maximum.

 const cars = [1, 2, 3, 4, 5];
 cars.forEach ((item,index) => {
  if (item === cars.length){
    console.log(item)
  }
 }
 )

 const numers =[1,4,120];
 const maxNumber = Math.max(...numers)
 console.log (maxNumber)
 
//Write an algorithm which receives an array of integers and prints its minimum.

const num =[1,4,120];
const minNumber = Math.min(...num)
console.log(minNumber)

//Write an algorithm which receives an array of integers and prints the position of its minimum.

const positionArray = [3,2,6,9,-1];
const minNum = Math.min(...positionArray)
console.log(minNum);
 const minNumIndex = positionArray.indexOf(minNum)
 console.log (minNumIndex)

 //Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.
 //const numberOrder = [1, 2, 3,4,5];
 
//sec
const numbOrder = [1, 2, 3,4,5];
 function sorted(numbOrder){
  let second_index; //second item of array
for(let first_index = 0; first_index < numbOrder.length; first_index+=1){
    second_index = first_index + 1;
    if(numbOrder[second_index] - numbOrder[first_index] < 0) return false;
  }
  return true;
}

console.log('is array sorted ? '+ sorted(numbOrder))



 
 