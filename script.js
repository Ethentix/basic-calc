let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function calculate() {
  try {
    let expression = result.value;
    let operators = /[*/+-]/;
    let parts = expression.split(operators);
    let operator = expression.match(operators);

    if (parts.length === 2 && operator) {
      let num1 = parseFloat(parts[0]);
      let num2 = parseFloat(parts[1]);
      operator = expression.match(operators)[0];

      let resultValue = 0;
      switch (operator) {
        case '/':
          resultValue = num1 / num2;
          break;
        case '*':
          resultValue = num1 * num2;
          break;
        case '+':
          resultValue = num1 + num2;
          break;
        case '-':
          resultValue = num1 - num2;
          break;
      }

      result.value = resultValue;
    } else {
      result.value = 'Invalid expression';
    }
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}
