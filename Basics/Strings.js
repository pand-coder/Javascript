const name = "G PAVAN SHANMUKHA MADHAV" 
const rollno=22049
//console.log("Name: " + name + " Rollno: " + rollno);
console.log(`Hello my name is ${name} and my roll number is ${rollno}`) //recommednded practice for better readability//

const cn = new String("PANDU-babu") //Another way of declaring a string
console.log(cn);
//Output : [String: 'PANDU'] Key:value pair 
/*
String {'PANDU'}
0: "P"
1: "A"
2: "N"
3: "D"
4: "U"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "PANDU"
*/
console.log(cn[3]);
console.log(cn.__proto__);
console.log(cn.length);
console.log(cn.toLowerCase());
console.log(cn.toUpperCase());
console.log(cn.charAt(4));//give the index as input to find the character//
console.log(cn.indexOf('N'));//give character as input and you'll get the index as output//
const str=cn.substring(0,4)
console.log(str);

const str_=cn.slice(-8,5)
console.log(str_);

const new_str1="   Pavan    "
console.log(new_str1.trim());

const domain="https://www.amrita.edu%task=off"
console.log(domain.replace('task','*(&)'))

console.log(domain.includes('www'))

console.log(cn.split('-'));





