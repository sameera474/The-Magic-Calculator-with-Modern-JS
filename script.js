// let dom = document.getElementById('colours')
// dom.innerHTML = colous;

// welcome note 
console.log("Welcome to the Magic Calculator !");

// calculation boolean variable initialization

let continueCalculating = true;

while (continueCalculating) {
// add prompt varialbe 

    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic, or exit:");
    
// exite operation 
    if (operation === 'exit') {
        console.log("Exiting. Goodbye !!");
        continueCalculating = false;
        break;
    }
// magic operation 
    if (operation === 'magic') {
        let num = Number(prompt("Enter a number for the magic operation:"));
        console.log(magicOperation(num));
    }
// arithmetic operations 
    if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') {
// number veriable initialization         
        let num1 = Number(prompt("Enter the first number:"));
        let num2 = Number(prompt("Enter the second number:"));
// switch operations for arithmetic operations 
        switch (operation) {
            case 'add':
                console.log(add(num1, num2));
                break;
            case 'subtract':
                console.log(subtract(num1, num2));
                break;
            case 'multiply':
                console.log(multiply(num1, num2));
                break;
            case 'divide':
                console.log(divide(num1, num2));
                break;
            default:
                console.log('Please enter a valid operation');
        }
    }
    break;

// function for magic operations
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

    // functions for arithmetic operations

    function add(num1, num2) {
        return `${num1} plus ${num2} equals ${Number(num1) + Number(num2)}`;
    }

    function subtract(num1, num2) {
        return `${num1} minus ${num2} equals ${Number(num1) - Number(num2)}`;
    }

    function multiply(num1, num2) {
        return `${num1} times ${num2} equals ${Number(num1) * Number(num2)}`;
    }

    function divide(num1, num2) {
        if (num2 === 0) {
            return 'Cannot divide by zero. Try another operation.';
        }
        return `${num1} division ${num2} equals ${Number(num1) / Number(num2)}`;
    }

}