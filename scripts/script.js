const display = document.querySelector(".display");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const squaredButton = document.querySelector(".squared");
const plusMinus = document.querySelector(".plus-minus");
const inverseButton = document.querySelector(".inverse");

console.log(display.textContent);

let displayArray = [];
let currentOperator = '';
let firstNumber = 0;
let secondNumber = 0;
let displayNumber = 0;

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (num1, operator, num2) {
  switch (operator) {
    case "+":
      secondNumber = 0;
      return add(num1, num2);
      break;
    case "-":
      secondNumber = 0;
      return subtract(num1, num2);
      break;
    case "*":
      secondNumber = 0;
      return multiply(num1, num2);
      break;
    case "/":
      secondNumber = 0;
      if (!num2) {
        return display.textContent = "Seriously?";
        break;
      } else {
      return divide(num1, num2);
      break;
      }
  }
}

function updateNumber () {
  if (displayNumber.toString().length > 9) {
    displayNumber = parseFloat(displayNumber).toExponential(2);
  }
  display.textContent = displayNumber;
  currentOperator ? secondNumber = displayNumber : firstNumber = displayNumber;
}

function clear () {
  displayArray = [];
  firstNumber = 0;
  secondNumber = 0;
  displayNumber = 0;
  currentOperator = "";
}

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    const numberText = numberButtons[i].textContent;
    displayArray.push(numberText);
    displayNumber = parseFloat(displayArray.join(''));
    updateNumber();
  });

  numberButtons[i].addEventListener("mousedown", () => {
    numberButtons[i].classList.toggle("number-pressed");
  });

  numberButtons[i].addEventListener("mouseup", () => {
    numberButtons[i].classList.toggle("number-pressed");
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    if (currentOperator) {
      if (!secondNumber) { secondNumber = firstNumber};
      displayNumber = operate(firstNumber, currentOperator, secondNumber);
      if (displayNumber.toString().length > 9) {
        displayNumber = parseFloat(displayNumber).toExponential(2);
      }
      display.textContent = displayNumber;
      firstNumber = displayNumber;
      currentOperator = "";
    }
    currentOperator = operatorButtons[i].textContent;
    displayArray = [];
  });

  operatorButtons[i].addEventListener("mousedown", () => {
    operatorButtons[i].classList.toggle("operator-pressed");
  });

  operatorButtons[i].addEventListener("mouseup", () => {
    operatorButtons[i].classList.toggle("operator-pressed");
  });
}

squaredButton.addEventListener("click", () => {
  displayNumber *= displayNumber;
  updateNumber();
});

squaredButton.addEventListener("mousedown", () => {
  squaredButton.classList.toggle("clear-pressed");
});

squaredButton.addEventListener("mouseup", () => {
  squaredButton.classList.toggle("clear-pressed");
});

inverseButton.addEventListener("click", () => {
  if (displayNumber) {
    displayNumber = 1 / displayNumber;
    updateNumber();
  } else {
    display.textContent = "Seriously?";
    clear();
  }
});

inverseButton.addEventListener("mousedown", () => {
  inverseButton.classList.toggle("clear-pressed");
});

inverseButton.addEventListener("mouseup", () => {
  inverseButton.classList.toggle("clear-pressed");
});

plusMinus.addEventListener("click", () => {
  displayNumber *= -1;
  updateNumber();
});

plusMinus.addEventListener("mousedown", () => {
  plusMinus.classList.toggle("plus-minus-pressed");
});

plusMinus.addEventListener("mouseup", () => {
  plusMinus.classList.toggle("plus-minus-pressed");
});

equalButton.addEventListener("click", () => {
  if (currentOperator) {
    if (!secondNumber) { secondNumber = firstNumber};
    displayNumber = operate(firstNumber, currentOperator, secondNumber);
    if (displayNumber.toString().length > 9) {
      displayNumber = parseFloat(displayNumber).toExponential(2);
    }
    display.textContent = displayNumber;
    firstNumber = displayNumber;
  }
  currentOperator = "";
  displayArray = [];
});

equalButton.addEventListener("mousedown", () => {
  equalButton.classList.toggle("plus-minus-pressed");
});

equalButton.addEventListener("mouseup", () => {
  equalButton.classList.toggle("plus-minus-pressed");
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  clear();
});

clearButton.addEventListener("mousedown", () => {
  clearButton.classList.toggle("clear-pressed");
});

clearButton.addEventListener("mouseup", () => {
  clearButton.classList.toggle("clear-pressed");
});