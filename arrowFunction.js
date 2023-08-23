// function declaration 

// function add (a, b){
//     const result = a + b;
//     return result;
// }
function add (a, b){
    return a + b;
}

// function expression 
const add2 = function(a, b){
    return a + b;
}

// arrow function 
const add3 = (num1,num2) => num1 + num2;

const sum = add3(3, 12)
console.log(sum);

const add4 = (num1,num2,num3,num4) => num1 + num2 + num3 + num4;
const total = add4(3, 12, 4, 7)
console.log(total);

const multiply = (num1, num2) => num1 * num2;
const mult = multiply(3, 12)
console.log(mult)