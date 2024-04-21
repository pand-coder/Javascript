//Arrays are objects  but their memory allocation is not necessarily contiguous in JavaScript.
const arr=[0,1,2,3,4,5,false,true,NaN,"String"];
n=arr.length;
for(let i=0;i<n;i++)
{
console.log(arr[i]);
}
// Shallow copy of an array does not create a new copy of the array.
// Instead, it creates a new reference to the same array, so changes to one affect the other.
let a=arr;
a[1]=49;
console.log(a);
console.log(arr);
// Both 'a' and 'arr' will reflect the change in the second element.

/*

Instead, you are creating a new reference (or pointer) to the same array in memory. This means that both the original array and the shallow copy point to the same underlying array object.

Because both the original array and the shallow copy reference the same array object, any changes made to the elements of the array through one reference will be reflected in the other reference. 
*/
