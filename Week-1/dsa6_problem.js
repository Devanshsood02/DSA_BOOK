let a = Number(prompt("Enter the first value"));
let b = Number(prompt("Enter the second value"));
let sum = a + b;

// const swapping = (a, b) => {
//   console.log(`first value is ${a} and second value is ${b}`);
//   b = sum - b;
//   a = sum - a;
//   console.log(` After Swapping ---> first value is ${a} and second value is ${b}`);
// };

// swapping(a, b);


// now with xor operator better appraoch

console.log(`Before Swapping: a = ${a}, b = ${b}`);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`After Swapping: a = ${a}, b = ${b}`);