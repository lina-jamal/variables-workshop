// simple example to illustrate a basic idea about scope
// var x = 5; // I'm globally scoped, you can use me everywhere

// var findSum = function (a, b) {
//   var y = 10; // You can only use me inside the findSum function
//   console.log(x); // ??
//   console.log(y); // ??
//   return a + b; // ??
// };

// console.log(x); // Logs: ??
// console.log(y); // Logs: ??

//**********************************************/

// 1 ** Re-declare var **//

// var greeter = "hey hi";

// var greeter = "say Hello instead";

// console.log(greeter); // result: ??

// What about let ???

// let greeter = "hey hi";

// let greeter = "say Hello instead";

// console.log(greeter); // result: ??

//but let can be re-declared within a different-scope

// let greeting = "say Hi"; // scope A
// function sayGreeting(){ // scope B
// let greeting = "say Hello instead"; // re-declared within a different scope.
// }

//2 ** Update var  **//

// var greeter = "hey hi";

// greeter = "say Hello instead";

// console.log(greeter); // result: ??

///// what about let ??

// let greeter = "hey hi";

// greeter = "say Hello instead";

// console.log(greeter); // result: >??

/////  3** Hoisting of var:

// console.log(greeter); // result:??

// var greeter = "say hello";

// console.log(greeter); // result:??

// what happened  ???

// var greeter;

// console.log(greeter); // result: ??

// greeter = "say hello";

// console.log(greeter); // result: ??

//// whatt about Hoisting with let ???

// console.log(greeting); //????

// let greeting = "say Hello instead";

//////////// const//////////////

// const can update ???

// const greeting = "say Hi";

// greeting = "say Hello instead"; //??

// const can redeclare ???

// const greeting = "say Hi";

// const greeting = "say Hello instead"; // ???

//  const and hoisting ??

// console.log(greeting); //  ???

// const greeting = "say Hello instead";
