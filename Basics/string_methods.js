let str = "   Hello, India!   ";
// concat() - Joins two or more strings.
let concatStr = str.concat(" Welcome");
// charAt() - Returns the character at a specified index in a string.
let charAtIndex = str.charAt(8);
// charCodeAt() - Returns the numeric Unicode value of the character at a specified index in a string.
let charCodeAtIndex = str.charCodeAt(8);
// indexOf() - Returns the first index at which a specified substring occurs in a string.
let firstIndex = str.indexOf("l");
// lastIndexOf() - Returns the last index at which a specified substring occurs in a string.
let lastIndex = str.lastIndexOf("l");
// slice() - Extracts a section of a string and returns a new string.
let slicedStr = str.slice(3, 8);
// substring() - Extracts a section of a string and returns a new string.
let subStr = str.substring(3, 8);
// toLowerCase() - Converts a string to lowercase letters.
let lowerCaseStr = str.toLowerCase();
// toUpperCase() - Converts a string to uppercase letters.
let upperCaseStr = str.toUpperCase();
// trim() - Removes whitespace from both ends of a string.
let trimmedStr = str.trim();
// replace() - Searches a string for a specified value, and replaces it with a new value.
let replacedStr = str.replace("World", "Universe");
// match() - Searches a string for a pattern, and returns an array of results.
let matchedStr = str.match(/[A-Z]/g);
// split() - Splits a string into an array of substrings.
let splitStr = str.split(",");
let len=str.length
console.log("Original String:", str);
console.log("concat():", concatStr);
console.log("charAt():", charAtIndex);
console.log("charCodeAt():", charCodeAtIndex);
console.log("indexOf():", firstIndex);
console.log("lastIndexOf():", lastIndex);
console.log("slice():", slicedStr);
console.log("substring():", subStr);
console.log("toLowerCase():", lowerCaseStr);
console.log("toUpperCase():", upperCaseStr);
console.log("trim():", trimmedStr);
console.log("replace():", replacedStr);
console.log("match():", matchedStr);
console.log("split():", splitStr);
console.log("Length:", len);


