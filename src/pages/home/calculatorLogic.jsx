export const buttons = document.querySelectorAll(".calculadora button");
let operator = null;
let currentNumber = "";
let oldNumber = "";
const result = document.querySelector("#resultado");

function setupKeyboardEvents() {
    document.addEventListener('keydown', function(event) {
      const keyToButtonMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '+': '+',
        '-': '-',
        'x': 'x',
        '/': '/',
        '0': '0',
        '.': '.',
        'C': 'C',
        'Enter': '='
      };
  
      const buttonText = keyToButtonMap[event.key] || event.key;
  
      if (buttonText) {
  
        const button = [...buttons]
          .find(btn => btn.textContent.trim() === buttonText);
        if (button) {
          button.click();
        };
      };
    });
  };

function updateDisplay(){
  result.textContent = currentNumber;
}

keyboardEvents.setupKeyboardEvents()

functions.buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const value = button.textContent.trim();
    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const validOperators = ["/", "+", "-", "x"];

    if (validValues.includes(value)){
      functions.addDigit(value);
    }
    if (validOperators.includes(value)){
      functions.setOperator(value);
    }
    else if (value === "c"){
      functions.clear();
    }
    else if (value === "<"){
      functions.erase();
    }
    else if (value === "="){
      functions.calculate();
    }
  });
});

export function clear (){
  currentNumber = "";
  updateDisplay();
};

export function erase (){
  currentNumber = currentNumber.slice(0, -1);
  console.log(currentNumber);
  updateDisplay();
};

export function setOperator(newOperator){
  if (currentNumber === ""){
    return
  }
  else if (operator !== null){
    calculate();
  };
  operator = newOperator;
  oldNumber = currentNumber;
  currentNumber = "";
  result.textContent += operator
  console.log(operator, oldNumber, currentNumber);
};

export function addDigit(value){
  currentNumber += value;
  updateDisplay();
};

export function calculate (){
  if (operator === null || currentNumber === "" || oldNumber === ""){
    return;
  };

  oldNumber = parseFloat(oldNumber);
  currentNumber = parseFloat(currentNumber);

  switch (operator){
    case "+":
      currentNumber = oldNumber + currentNumber;
      break;
    case "-":
      currentNumber = oldNumber - currentNumber;
      break;
    case "x":
      currentNumber = oldNumber * currentNumber;
      break;
    case "/":
      currentNumber = oldNumber / currentNumber;
      break;
  };

  updateDisplay();
  operator = null;
};