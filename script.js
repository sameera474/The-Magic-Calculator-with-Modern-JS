// let dom = document.getElementById('colours')
// dom.innerHTML = colous;

let num1 = '';
let num2 = '';
// let arithmeticOpe = (add || subtract || multiply || divide );




function add (num1, num2) {
    return (`${num1} plus ${num2} equals ${num1+num2}`);
}

function subtract (num1, num2) {
    return (`${num1} minus ${num2} equals ${num1-num2}`);
}

function multiply (num1, num2) {
    return (`${num1} times ${num2} equals ${num1*num2}`);
}

function divide (num1, num2) {
    return (`${num1} division ${num2} equals ${num1/num2}`);
   
}

console.log("Welcome to the Magic Calculator !");
while(userWantsToContinue){
    switch(operation){
        case 'add':
            console.log(add(num1, num2));
            break;
        case'subtract':
            console.log(subtract(num1, num2));
            break;
        case'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            if ( num2 === 0 && operation === 'divide')  {
                console.log('Cannot divide by zero, Try another operation');
                continue;
            }
            break;
        case 'exit':
            console.log("Exiting. Goodbye !!")
            userWantsToContinue = false;
            break;
        default:
            console.log('Please enter a valid operation');
    }
}


// Magical operation function 

function magicOperation(num) {
    switch(true) {
        case num < 10:
            return "Magic dust makes the number grow:" + (num*10);
        case num >= 10 && num <= 100:
            return "A Magic gnome double the number: " + (num*2);
        default: 
            return " The number is too mighty for magic and remains unchanged.";
    }
}



// let num2 = '';

// function add(num1, num2) {
//     return `${num1} plus ${num2} equals ${Number(num1) + Number(num2)}`;
// }

// console.log(add(num1, num2));