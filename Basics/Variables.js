const accid = 'CB.EN.U4CYS22049';//Cannot reassignable and not redeclarable//
let accemail = "pavanshanmukhmadhav@gmail.com";//can be reassignable but not redeclarable//
var accpswd = "alpha@123456789";//can be reassignable and can be redeclarable//
acccity="hyderabad"
let accstate;
//accid=2345; not allowed to reassign to const 
console.log(accid);
accemail="cv@gmail.com";
console.log(accemail);

/*
Note
Preferred not to use var keyword due to issue in block scope and functiopnal scope// 
*/
console.table([accid,accemail,accpswd,acccity,accstate]);

