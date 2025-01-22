const defaultResult = 0;
let currentResult = defaultResult; 

function add(num1,num2) {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');

}


addBtn.addEventListener('click', add);

// currentResult = (currentResult + 10) * 3 / 2 - 1; 

let calculatedDescription = `(${defaultResult} + 10) * 3 / 2 - 1`



