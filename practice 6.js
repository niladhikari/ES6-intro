const maxNumArray = (num1,num2) => {
    const numbers = [...num1,...num2];
    const max = Math.max(...numbers)
    return max;
}
const value1 = [3,5,7,10,24,5,7];
const value2 = [44,66,7,8,55,80,22,11];
console.log(maxNumArray(value1,value2));