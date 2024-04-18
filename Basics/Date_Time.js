let d=new Date()
console.log(d);
console.log(d.toString());
console.log(d.toISOString());
console.log(d.toJSON());
console.log(typeof d);//date is a object//
let bdate=new Date('2004-11-10'); //Alt: Date(2004, 10, 10); // Month is 0-indexed (10 represents November)//
console.log(bdate);
console.log(d.toDateString());
let newd=new Date(2023,0,23,5,3)
console.log(newd.toDateString());
let pdate=new Date('11-10-2004'); //India - MM-DD-YYYY
/*
2024-04-18T17:26:32.055Z
2024-04-18 is the date in the format YYYY-MM-DD.
T is a separator indicating the beginning of the time part.
17:26:32.055 is the time in the format HH:MM:SS.SSS.
Z indicates that the time is in UTC (Coordinated Universal Time).
*/
let mytstamp = Date.now()
console.log(mytstamp);
console.log(pdate.getTime());
console.log(Math.floor(Date.now()/1000));






 

