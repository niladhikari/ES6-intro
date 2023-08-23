
let even = [];
const evenNum = (number) => {
    for (const num of number) {
        if (num % 2 == 0) {
          even.push(num)
        }
        
    }
    return even;
  };

  const num = [2,5,8,9,6,10];
  console.log(evenNum(num));
