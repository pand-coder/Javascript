/*
JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
Primitive Datatypes(Call by value)
7 types
-------
String
Number
Boolean
null
undefined
Symbol
BigInt

Non-Primitive Datatypes (Call by reference)
Arrays
Objects
Functions

*/


const score=100;
const scored=1.08970;
const isloggedin=false;
const outsidetemp=null;
let u;

const rollnuber=Symbol('22049')
const rollnumber=Symbol('22049')
//console.log(rollnuber===rollnumber);




//datatypes are based on memory allocation
//Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

//Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

//JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it


let myname="Pavan"
let nn=myname
nn="quote_laws"
console.log(myname);
console.log(nn);

let user1={
    email:"pavanshanmukhmadhav@gmail.com",
    upi:"807123451@gbl"
}
let user2=user1;
console.log(user1);
user2.email="pavanshanxm@gmail.com"
console.log(user2);

