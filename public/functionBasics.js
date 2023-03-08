"use strict";
//ONLY NUMBERS
let arr = [0, 1, 2, 3, 4];
let getLessThan3 = (item) => {
    return item < 3;
};
let get3 = (item) => {
    return item < 4 && item > 2;
};
let filter;
filter = (array, cb) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = cb(array[i]);
        if (element === true) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};
console.log(filter(arr, getLessThan3));
console.log(filter(arr, get3));
//----------------------------------------------------------------------------------------------
//ONLY STRING
let arrString = ['a', 'b', 'c', 'd', 'a', 'a'];
let getA = (item) => {
    return item === 'a';
};
let filterString = (array, cb) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = cb(array[i]);
        if (element === true) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};
console.log(filterString(arrString, getA));
//-------------------------------------------------------------------------------------
//GENERIC
