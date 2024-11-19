// Question 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const newNumbers = nums.map(x => x * 2);
console.log(newNumbers);


// Question 7



//Question 9

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
let pizza = 'not tasty';

pizza === 'tasty' && console.log('yum') || console.log('yuck');