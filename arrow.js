//normal function

function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);


// Function as a variable

const double = function(num){ // This is function declaration
    return num * 2; // This is function expression.
}
const result = doubleIt(5);
console.log(result);


// using es6 (1 parameter)

const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

// using 2 parameter

const add = (x, y) => x + y;
const result = add(50, 50);
console.log(result);

// no parameter

const give5 = () => 5;
const giveResult = give5();
console.log(giveResult);

// big function using arrow

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const resultMath = doMath(7, 5);
console.log(resultMath);