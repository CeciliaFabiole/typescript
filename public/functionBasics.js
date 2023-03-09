"use strict";
// FUNCTION BASICS
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c) => {
    console.log(a + b + c);
};
add(7, 10, 'd');
add(7, 10, 12);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
