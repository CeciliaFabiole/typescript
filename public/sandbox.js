"use strict";
// let character:string;
// let age:number;
// let isBlackBelt:boolean;
// character='Luigi'
// age=40
// isBlackBelt=true
// const circ = (diameter:number)=>{
//     return diameter * Math.PI
// }
// console.log(circ(7.5))
// let names:string[];
// names = ['luigi', 'mario','yoshi']
// names.push('toad')
// console.log(names)
// // names.push(3)
// // names[0] = 3
// let numbers:number[] = []
// numbers.push(25)
// // numbers.push('shau')
// let mixed:(string|number|boolean)[] = ['ken', 4, 'ciao', 8]
// mixed.push(0)
// mixed.push('buongiorno')
// console.log(mixed)
// let ninja : {
//     name:string,
//     belt:string,
//     age :number
// }
// ninja = {
//     name:'mario',
//     belt:'black',
//     age :30
// }
//------------------------------------------------------------------------------------------------
//FUNCTION BASICS
// let greet : Function
// greet = ()=>{
//     console.log('hello, again')
// }
// const add = (a:number = 5, b:number =10, c:number|string=15):void=>{
//     console.log(a+b+c) //=> perché no? faccio una soma e aggancio una stringa
// }
// add(7,10, 'd')
// const minus = (a:number, b:number):number=>{
//     return a-b
// }
// let result = minus(10,7)
//------------------------------------------------------------------------------
//TYPE ALIAS
//salvare un type da ripetere
// type StringOrNum = string|number
// type objWithName = {name:string, uid:StringOrNum}
// const logDetails =(uid:string|number,item:string)=>{
//     console.log(`${item} has a uid of ${uid}`)
// }
// logDetails(1,'ciao')
// const greet = (user:objWithName)=>{
//     console.log(`${user.name} says hello`)
// }
// const greetAgain = (user:objWithName) =>{
//     console.log(`${user.name} says hello`)
// }
//------------------------------------------------------------------------------
//FUNCTION SIGNATURE
//come creare un tipo di funzione
//associate variable to a general function
// let greet : Function
// //function with 2 parameters returning void
// let greetVoid : (a:string,b:string) => void
// greet = (name:string,greeting:string)=>{
//     console.log(`${name} says ${greeting}`)
// }
// greet('Cecilia', 'ciao!')
// //function with 3 parameters returning number
// let calc :(a:number,b:number,c:string) => number;
// calc = (numOne:number, numTwo:number, action:string)=>{
//     if(action === 'add'){
//         return numOne + numTwo
//     } else {
//         return numOne - numTwo
//     }
// }
// console.log(calc(20,10,'sub'))
// console.log(calc(20,10,'add'))
// //function with 2 parameters returning void
// let ninja = {
//     name:'Cecilia',
//     age:27
// }
// let logDetails:(obj:{name:string,age:number})=>void
// type person = {name:string, age:number}
// logDetails = (ninja:person)=>{
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }
// logDetails(ninja)
//------------------------------------------------------------------------------
//DOM and TYPE CASTING
const anchor = document.querySelector('a');
// != I know this exist
console.log(anchor);
console.log(anchor.href);
const form = document.querySelector('a');
