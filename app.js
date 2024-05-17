// Task 1 

function ifEqual(a, b) {
    if(a === b) {
        return "Equal"
    } else {
        return "Not Equal"
    }
}
ifEqual()

// Task 2

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Task 3

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof operation !== 'string') {
        return false;
    }

    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : false;
        default: return false;
    }
}