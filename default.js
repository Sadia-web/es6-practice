function add(num1, num2){
    return num1 + num2;
}
const total = add(15);
console.log(total);

function add(num1,num2){
    if(num2 == undefined){
        //num2 = num2 || 0;
        num2 = 0;
    }
    
    return num1 + num2;
}
const total = add(15);
console.log(total);

// Using ES6

function add(num1, num2 = 20){
    return num1 + num2;
}

const total = add(15, 1);
console.log(total);
    
