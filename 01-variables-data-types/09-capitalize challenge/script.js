/*Instructions:
Take the variable myString and capitalize the first letter of the word 
using some of the methods that we talked about in the last video. 
Put the result in a variable called myNewString.

Create multiple solutions if you would like.

Expected Result:
const myString = 'developer';
console.log(myNewString); // 'Developer' */

const myString = 'developer';

console.log(myString);

x = myString[0].toUpperCase();
console.log(x);

a = myString.slice(1);
console.log(a);

const myNewString = x + a;
console.log(myNewString);// 'Developer'

//second version
//const myNewString = myString[0].toUpperCase() + myString.substring(1);
//console.log(myNewString);

//third way
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
