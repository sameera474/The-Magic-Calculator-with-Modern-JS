// let dom = document.getElementById('colours')
// dom.innerHTML = colous;

console.log("Welcome to the Magic Calculator !");



let continueCalculating = true;

while (continueCalculating) {
    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic, or exit:");
    
    if (operation === 'exit') {
        console.log("Exiting. Goodbye !!");
        continueCalculating = false;
        break;
    }

    if (operation === 'magic') {
        let num = Number(prompt("Enter a number for the magic operation:"));
        console.log(magicOperation(num));
    }

    if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') {
        let num1 = Number(prompt("Enter the first number:"));
        let num2 = Number(prompt("Enter the second number:"));

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