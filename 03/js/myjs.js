let firstArr = [1, 'hello', true, null, [1,2]];
for(let i =0; i< firstArr.length; i++){
   console.log(`My array item ${firstArr[i]}`);
}
let sg = firstArr.join('|');
console.log(sg);

let firstConcatArr = [1,2,3];
let secondArr = [4,5,6];
let res = firstConcatArr.concat(secondArr, 6,7,[8,9]);
console.log(res.toString());
let myNewArray = new Array('a', 'b');
myNewArray.push(34);
myNewArray.push(11);
myNewArray.push('aaa34');
myNewArray.push(3);
myNewArray.push(true);
console.log(myNewArray.toString());

let sliceArr = [1,2,3,4,'A', true, 'False str'];
// let slicePart = sliceArr.slice(0,2);
let slicePart = sliceArr.slice(4).reverse(); 

console.log(slicePart.toString());
console.log(Array.isArray(sliceArr));