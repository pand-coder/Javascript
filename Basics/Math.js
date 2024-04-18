//const score=400
//console.log(score)
//const bal=new Number(100)
//console.log(bal);
//console.log(bal.toString);
//console.log(bal.toString().length);
//console.log(bal.toFixed(2));
//const othernum =24.5876457;
//console.log(othernum.toPrecision(3));//24.6


//const hun=1000000;
//console.log(hun.toLocaleString());//usa
//console.log(hun.toLocaleString('en-IN'));//india

///*************Maths*****************
/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.32));
console.log(Math.ceil(4.2));//Greatest value
console.log(Math.floor(4.99));//Lowest value
console.log(Math.max(4,6,90,287));
*/

console.log(Math.random());//This line prints a random decimal number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()*10+1);
//This line generates a random decimal number between 1 and 11 (both inclusive). The Math.random() method generates a number between 0 and 1, which is then multiplied by 10 to make it fall between 0 and 10. Adding 1 to this result shifts the range to be between 1 and 11.//
console.log(Math.floor(Math.random()*10)+1);
//This line generates a random decimal number between 1 and 11 (both inclusive). The Math.random() method generates a number between 0 and 1, which is then multiplied by 10 to make it fall between 0 and 10. Adding 1 to this result shifts the range to be between 1 and 11.//

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min);
//This line generates a random integer between 10 and 20 (both inclusive). (max - min + 1) calculates the range of numbers (inclusive of both max and min). 
//The rest of the logic is similar to the previous example, where the random number is generated within the specified range and then shifted to start from min using the addition at the end.




/*


A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....

similarly, is concept ko max min m bhi leke jaa skte hai
*/
