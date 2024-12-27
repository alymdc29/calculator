// create  three variables for each part of the operation
let num1 = '';
let num2 = '';
let operator = '';
//function to store the numbers and operators
function storeValue(value) {
  if (value == "+" || value == "-" || value == "/" || value == "x") {
    operator = value;
  }
  else if (operator === "") {
    num1 += value;
  }
  else {
    num2 += value;
  }
  display.textContent = `${num1} ${operator} ${num2}`;
}
// create math functions
function addNum(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtractNum(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiplyNum(num1, num2) {
  return Number(num1) * Number(num2);
}

function divideNum(num1, num2) {
  return Number(num1) / Number(num2);
}
// create a new function that takes an operator and 2 numbers
let result = '';
function calcNum(num1, operator, num2) {
  if (operator == "+") {
    result = addNum(num1, num2);
  }
  else if (operator == "-") {
    result = subtractNum(num1, num2);
  }
  else if (operator == "x") {
    result = multiplyNum(num1, num2);
  }
  else if (operator == "/") {
    result = divideNum(num1, num2);
  }
  return result
};
//function for result and call the calcNum function
const operateBtn = document.querySelector("#operate");
const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear-btn");
const resultDisplay = document.createElement("div");
operateBtn.addEventListener('click', () => {
  result = calcNum(num1, operator, num2);
  num1 = result;
  num2 = '';
  operator = '';
  resultDisplay.textContent = `${result}`
  display.insertAdjacentElement("afterend", resultDisplay)
})
//clear function
clearBtn.addEventListener('click', () =>{
  result = ''
  num1 = ''
  num2 = ''
  operator = ''
  display.innerHTML = "";
  resultDisplay.innerHTML = "";
})