let expression = '';

function appendNumber(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    // evaluate safely
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').value = expression;
  } catch (e) {
    alert('Invalid Expression');
    clearDisplay();
  }
}
