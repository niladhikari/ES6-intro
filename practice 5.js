
const averageNumber = (number) =>{
    let sum = 0;
    for (const num of number) {
        const squer = num *2;
        sum = sum + squer;
    }
    const average = sum / number.length;
        return average.toFixed(2);
}
const num = [2,5,8,9,6,10];
console.log(averageNumber(num));