// Get the input display element
const dial = document.getElementById('dial');

// Append value to the input when a button is clicked
function appendValue(value) {
    dial.value += value;
}

// Calculate the expression in the input field
function calculateValue() {
    try {
        // Replace 'x' with '*' for correct multiplication
        let expression = dial.value.replace(/x/g, '*');
        // Evaluate the expression and display the result
        dial.value = eval(expression);
    } catch (error) {
        dial.value = 'Error';
    }
}

// Clear the input field
function clearDisplay() {
    dial.value = '';
}
