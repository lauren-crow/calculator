//todo : get = button working. +/- , % , decimals

const numbers = document.querySelectorAll(".digitBtn");
const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operator(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    }
    if (operator === '*') {
        return multiply(num1, num2);
    }
    if (operator === '/') {
        return divide(num1, num2);
    }
}

//display textcontent of clicked button
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.innerHTML == null){
            display.innerHTML=number.textContent;
        } else {
            display.innerHTML+=number.textContent;
        }
    });
});

//clear calc when user clicks AC button
clearBtn.addEventListener('click', () => {
    display.innerHTML = null
});

//on 'equal's buttonclick, calculate and return to display
equals.addEventListener('click', () => {
    //answer = operator(display.innerHTML - "=");
    console.log(display.innerHTML - "=");
});



