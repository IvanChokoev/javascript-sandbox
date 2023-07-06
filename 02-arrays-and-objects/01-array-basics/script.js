// Array Literal
const numbers = [12, 59, 65, 34, 90];
const mixed =[23, 'Hello', true, null]

// Array Constructor
const fruits = new Array('apple', 'pear', 'banana');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'watermelon';

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits; 

console.log(x);