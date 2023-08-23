// default --> if value is not provided, take this as a default.
function add(num1,num2=2) {
   let sum = num1+num2;
   console.log(num1, num2, sum);
    return sum;
}

// const total = add(5,5);
const total = add(5);
console.log(total);

//string default parameter
function fullName(first, last =''){
    const full = first + ' ' + last;
    return full;
}

//array default parameter
function friends(numbs = []){

}

//object default parameter
function person(human = {}){
    
}