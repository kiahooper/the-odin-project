// Global variables //
const display = document.querySelector("#display");
const display_limit = 9;
let display_value = "";
let operator = null;
let a = null;
let b = null;
let result = null;


// Event listeners //
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.classList.contains("numbers")) {
            populateDisplay(button);

        } else if (button.classList.contains("operators")) {
            handleCalculation(button);

        } else {
            switch(button.id) {
                case 'ac':
                    allClearDisplay();
                    break;
                case 'ce':
                    clearDisplay();
                    break;
                case 'percentage':
                    calculatePercentageDisplay();
            }
        }
    });
});


// Functions //
function populateDisplay(button) {

    // If current displayed number is previous result, no more digits can be added
    if (display.innerHTML == result) {
        display_value = "";
    } 

    // If user presses number straight after calculation, result is not preserved
    if (a !== null && operator === null) {
        a = null;
    }

    // Display value cannot exceed the display limt (global var)
    if (display_value.length < display_limit) {

        const number = button.innerHTML;
        const point = calculator.querySelector("#point");

        // Ensure only one point can be added to display number
        if (display_value.includes(".")) {
            point.disabled = true;  
        } else {
            point.disabled = false;
        }

        // Update display element with value
        display_value += number;
        display.innerHTML = display_value;
    }
}

function handleCalculation(button) {

    chosen_operator = button.innerHTML;

    // Ensure that calculations are done in pairs with one operator no matter if user uses equal sign
    if (chosen_operator === "=") {
        if (a != null && operator != null) {
            b = +(display_value);

            // If both operands and operator exist, perform calculation
            if (ensureNoDivisionByZero(operator, b)) {
                result = roundResultIfNecessary(operate(operator, a, b), 5);

                // Update result, update variables
                display.innerHTML = result;
                a = result;
                operator = null;
                b = null;
            }   
        }
    } else {
        if (a != null && operator != null) {
            b = +(display_value);

            // If both operands and operator exist, perform calculation
            if (ensureNoDivisionByZero(operator, b)) {
                result = roundResultIfNecessary(operate(operator, a, b), 5);

                // Update result, update variables
                display.innerHTML = result;
                a = result;
                operator = chosen_operator;
                b = null;  
            }
    
        // If operator has been pressed and no first operand exists, update a
        } else if (a === null) {
            a = +(display_value);
            operator = chosen_operator;
            display_value = "";

        // If calculation has been executed and next event is operator, use result as first operand
        } else if (a === result) {
            operator = chosen_operator;
            display_value = "";
        }
    }

}

function operate(operator, a, b) {

    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b); 
            
    }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function allClearDisplay() {
    display_value = "";
    display.innerHTML = +(display_value);
    operator = null;
    a = null;
    b = null;
    result = null;
}

function clearDisplay() {
    display_value = "";
    display.innerHTML = +(display_value);
}

function calculatePercentageDisplay() {
    display_value = +(display_value) / 100
    display.innerHTML = display_value;
    display_value = display_value.toString();
}

function roundResultIfNecessary(value, decimals) {
    /* Technically some rounding inaccuracies due 
        to how floating points work on a computer */
    return +parseFloat(value).toFixed(decimals);
}

function ensureNoDivisionByZero(operator, b) {
    if (operator === "/" && b === 0) {
        display.innerHTML = "NOPE"
        setTimeout(allClearDisplay, 1300);
        return false;
    } else {
        return true;
    }
}
