const display = document.querySelector(".display");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const squaredButton = document.querySelector(".squared");
const plusMinus = document.querySelector(".plus-minus");
const inverseButton = document.querySelector(".inverse");

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
      }
      return divide(num1, num2);
      break;
  }
}

function updateNumber () {
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
    displayNumber = parseInt(displayArray.join(''));
    updateNumber();
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    if (currentOperator) {
      displayNumber = operate(firstNumber, currentOperator, secondNumber);
      display.textContent = displayNumber;
      firstNumber = displayNumber;
    }
    currentOperator = operatorButtons[i].textContent;
    displayArray = [];
  });
}

squaredButton.addEventListener("click", () => {
  displayNumber *= displayNumber;
  updateNumber();
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

plusMinus.addEventListener("click", () => {
  displayNumber *= -1;
  updateNumber();
});

equalButton.addEventListener("click", () => {
  if (currentOperator) {
    if (!secondNumber) { secondNumber = firstNumber};
    displayNumber = operate(firstNumber, currentOperator, secondNumber);
    display.textContent = displayNumber;
    firstNumber = displayNumber;
  }
  currentOperator = "";
});

clearButton.addEventListener("click", () => {
  display.textContent = 0;
  clear();
});