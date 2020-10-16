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
    if (result) {
        if (display.innerHTML == handleResultLength(result)) {
            display_value = "";
        } 
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
                display_value = handleResultLength(result);
                console.log(display_value);
                display.innerHTML = display_value;
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
                display_value = handleResultLength(result);
                console.log(display_value);
                display.innerHTML = display_value;
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
            console.log('a === result');
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
    display_value = handleResultLength(+(display_value) / 100);
    display.innerHTML = display_value;
    display_value = display_value.toString();
}


/* handleResultLength does not work with javascript scientific notation */
function handleResultLength(l_result) {
    
    let display_result;
    l_result = l_result.toString(10);
    
    // Check if result is longer than display limit
    if (l_result.length > display_limit) {
        n = l_result.indexOf(".");

        // If the number is a decimal depending on if...
        if (n !== -1) {
            // it's scientific notation
            if (l_result.includes("e")){                
                let result_arr = l_result.split("e");
                display_result =`${parseFloat(result_arr[0]).toFixed(3)} E${result_arr[1]}`
            }
            // or a "normal" deciaml
            else {
                // Display long numbers in scientific notation
                display_result = roundResultIfNecessary(l_result, display_limit-n);

            }
        
        // If not a decimal
        } else {
            /* ** UPDATE ** Display long numbers in scientific notation, 
            (only handles large numbers, need to handle small numbers eventually) */
            x = l_result.length-1;
            if (x < 21) {
                l_result = ((parseInt(l_result)) / (10 ** x)).toFixed(3);
                display_result = `${l_result} E+${x}`;
            } else {
                let result_arr = l_result.split("e");
                display_result =`${parseFloat(result_arr[0]).toFixed(3)} E${result.arr[1]}`
            }
        }
    } else {
        display_result = l_result;
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
