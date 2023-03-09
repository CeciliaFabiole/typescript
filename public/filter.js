"use strict";
//ONLY NUMBERS
// let arr:number[] = [0, 1, 2, 3, 4];
// type callback = (a:number) => boolean
// let getLessThan3 : callback = (item) => {
// 	return item < 3;
// };
// let get3 : callback = (item) => {
// 	return item < 4 && item > 2;
// };
// let filter : (a:number[], b:callback) => number[]
// filter = (array, cb) => {
// 	let filteredArray: number[] = [];
// 	for (let i = 0; i < array.length; i++) {
// 		const element = cb(array[i]);
// 		if (element === true) {
// 			filteredArray.push(array[i]);
// 		}
// 	}
// 	return filteredArray;
// };
// console.log(filter(arr, getLessThan3));
// console.log(filter(arr, get3));
//----------------------------------------------------------------------------------------------
//ONLY STRING
// let arrString:string[] = ['a','b','c','d','a','a']
// type callbackString = (a:string) => boolean
// let getA : callbackString = (item) => {
// 	return item === 'a';
// };
// let filterString : (a:string[], b:callbackString) => string[] = (array, cb) => {
// 	let filteredArray: string[] = [];
// 	for (let i = 0; i < array.length; i++) {
// 		const element = cb(array[i]);
// 		if (element === true) {
// 			filteredArray.push(array[i]);
// 		}
// 	}
// 	return filteredArray;
// };
// console.log(filterString(arrString, getA));
//-------------------------------------------------------------------------------------
//GENERIC
let arrString = ['a', 'b', 'c', 'd', 'a', 'a'];
let arr = [0, 1, 2, 3, 4];
let getLessThan3 = (item) => {
    return item < 3;
};
let get3 = (item) => {
    return item < 4 && item > 2;
};
let getA = (item) => {
    return item === 'a';
};
let filter = (array, cb) => {
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
console.log(filter(arrString, getA));
