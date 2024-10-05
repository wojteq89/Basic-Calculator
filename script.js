const display = document.getElementById("display");
const calcEstimation = document.getElementById("calcEstimation");

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value[display.value.length - 1];

    if (operators.includes(lastChar) && operators.includes(input)) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
    calculate();
}

function clearDisplay() {
    display.value = '';
    calcEstimation.value = '';
}

function finalResult() {
    try {
        if(display.value === ""){
            display.value = "";
        }if (display.value.includes("/0")) {
            display.value = "";
            calcEstimation.value = "";
        }else {
            const calc = eval(display.value);
            display.value = calc;
            calcEstimation.value = "";
        }
    } catch (e) {
        calcEstimation.value = "Błąd";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
    calculate();
}

function calculate() {
    if (display.value === "") {
        calcEstimation.value = "";
        return;
    }

    try {
        if (display.value.includes("/0")) {
            calcEstimation.value = "Nie dzieli się przez zero";
        } else {
            const calc = eval(display.value);
            calcEstimation.value = calc;
        }
    } catch (e) {
        calcEstimation.value = "";
    }
}
