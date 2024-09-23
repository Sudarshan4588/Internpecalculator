let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function pressNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function pressOperator(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    currentInput = '';
    operator = op;
    display.value = operator;
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result = eval(previousInput + operator + currentInput);
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
}

function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
    }
}

function pressDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculatePercentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
    }
}
