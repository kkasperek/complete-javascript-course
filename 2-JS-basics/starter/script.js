console.log("hello world");

// ----------------------------------------------
// if() & else if() statements
// ----------------------------------------------

// create a function with an if statement
const whichDrink = age => {
  if (age < 21) {
    console.log("rootbeer for you");
  } else {
    console.log("beer me");
  }
};
whichDrink(21);

// ----------------------------------------------
// AND (&&), OR (||), NOT (!)
// ----------------------------------------------
/*  && - true if ALL are true
    || - true if ONE is true
    ! - inverts true/false values 
*/
const ageRange = age => {
  if (age < 13) {
    console.log("just a kid");
  } 
  else if (age >= 13 && age < 20) {
    console.log("irritable teen");
  } 
  else if (age >= 20 && age < 55) {
    console.log("hating my life");
  } 
  else {
    console.log("death");
  }
};
ageRange(21);

// ----------------------------------------------
// Ternary Operator
// ----------------------------------------------
let age = 10;
// [conditional] ? [statement1] : [statement2]
age >= 18 ? console.log("beer me") : console.log("juice box");

// same as ...
let drink = age >= 18 ? "beer me" : "juice box";
console.log(drink);

// ----------------------------------------------
// Truthy & Falsy
// ----------------------------------------------
// falsy values ---> undefinded, null, 0, '', NaN
// truthy values --> NOT falsy values 
var height;
if (height){                        // if this condition is true        
    console.log('var definded');
} else {                           // else the condition is false
    console.log('var is UNDEFINED');
}

// ----------------------------------------------
// Coding Challenge #2
// ----------------------------------------------
/* 
    johns team scored -- 89, 120, 103 points
    mikes team scored -- 116, 94, 123, points
    1. calculate the average score for each team
    2. avgScore = (total sum)/ (# games)
*/

//for loop for sum... 
// let sum = 0;
// const addArray = (scores) => {
//     for (let i = 0; i < scores.length; i++) {
//         sum += scores[i];
//         console.log(sum);  
//     }
// }
// addArray();

// ----------------------------------------------
// reduce() method to reduce our array to a single value
// ----------------------------------------------
const test = [10, 120, 10];

// array.reduce() --> sum of an array
const arraySum = arr => arr.reduce((a,b) => a + b, 0);   // 0 is the starting value
console.log(arraySum(test));    

// array.reduce()/.length --> average of array
const arrayAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length; // divide by array.length for avg
console.log(arrayAvg(test));    

/* PSEUDO CODE ------------------------------------------------------------------------------
    1. The function that we pass as the first parameter of the 
    reduce method receives two parameters, a and b. 
    ---> a is our accumulator. It will accumulate our sum as our function works. 
    ---> b is the current value being processed.

    2. The second parameter of the reduce method is the initial 
    value we wish to use. We’ve set our initial value to zero which 
    allows us to use empty arrays with our arrSum functions.

    3. In other words, we are simply going to start with zero and 
    one by one add each value of the array to our initial value until 
    we’ve looped through the entire array. 
    ---> When done, the accumulator value will be returned
*/ // ------------------------------------------------------------------------------