// find a max num in array

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

// use spread operator to copy
const arr1 = [3,5,7,9];
const arr2 = [2,4,6,8];
const array = [...arr1 , ...arr2];
console.log(array);

const friends = [4,5,6,7,8];
const dost = [...friends];
friends.push(12);
console.log(friends);
console.log(dost);

// advanced 
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)