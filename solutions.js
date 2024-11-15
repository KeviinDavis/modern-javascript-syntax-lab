// Question 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const newNumbers = nums.map(x => x * 2);
console.log(newNumbers);


// Question 7



//Question 9

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
// const result4 = myVar || 3000;

console.log('result1:', result1);  // foo
console.log('result2:', result2);  // 243
console.log('result3:', result3);  // false
// console.log('result4:', result4);  // 3000