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

    // Input value cannot exceed the display limt (global var)
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
            result = operate(operator, a, b);
        
            // Update result, update variables
            if (result) {
                a = result;
                result = handleResultLength(result);
                display.innerHTML = result;
                operator = null;
                b = null;
            }
        }
    } else {
        if (a != null && operator != null) {
            b = +(display_value);

            // If both operands and operator exist, perform calculation
            result = operate(operator, a, b);

            // Update result, update variables
            if (result) {
                a = result;
                result = handleResultLength(result);
                display.innerHTML = result;
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
const divide = (a, b) => {if (b !== 0) {
    return a / b;
} else {
        // Check for division by zero
        display.innerHTML = "NOPE";
        setTimeout(allClearDisplay, 1300);
        return false;
}}

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

function handleResultLength(result) {
    
    let display_result;
    result = result.toString(10);
    
    // Check if result is longer than display limit
    if (result.length > display_limit) {
        n = result.indexOf(".");

        // If the number is a decimal, round the decimal to fit the display screen
        if (n !== -1) {
            display_result = roundResultIfNecessary(result, display_limit-n);
            
        } else {
            // Display long numbers in scientific notation
            result = ((parseInt(result)) / (10 ** result.length)).toFixed(5);
            display_result = `${result} E${x}`;
        }
        
    } else {
        display_result = result;
    }
    return display_result;
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
