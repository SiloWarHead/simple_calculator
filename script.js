let currentInput = '';
let currentOperation = '';
let previousInput = '';

const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperation(operation) {
    if (currentInput === '') return; // Prevent setting operator if no number is entered
    if (previousInput !== '') {
        calculate(); // Calculate if there's a previous operation pending
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    display.value = `${previousInput} ${currentOperation}`; // ✅ FIXED: added backticks
}

function calculate() {
    if (previousInput === '' || currentInput === '') return; // Nothing to calculate

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    display.value = '';
}