function square(number){
    return number*number
}
console.log(square(2)) // 4

function changeAttrObject(theObject){
    theObject.make = "Toyota";
    return theObject
}
const myCar={
    make: "Honda",
    model: "Accord",
    year: 1998,
}
console.log(myCar.make)
console.log(changeAttrObject(myCar).make)

// Function can be nested
function addSquare(a, b){
    function square2(x){
        return x*x 
    }
    return square2(a) + square2(b)
}
console.log(addSquare(2, 3)) // 13

const square_anonymus = function (number) {
    return number * number
}
console.log(square_anonymus(4))
const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n-1);
}
console.log(factorial(3)); // 6

// can make function become parameter for another function

function map(f, a){
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++){
        result[i] = f(a[i])
    }
    return result;
}
const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function(x){
    return x * x * x;
}, numbers);
console.log(cubedNumbers)

/*
 * function scope for variables
 * - this means variables defined inside a function cannot be accessed from anywhere outside the function.
 * - The function scope inherits from all the upper scopes.
 * */
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
