let numberOnScreen = ""; 
let formatedNumber = 0;
let finalNumber = 0;
let operation = null;

function buttonPressed(numberInButton) {
    let displayInput = document.getElementById("calcDisplay");
    numberOnScreen += numberInButton;
    displayInput.innerText = numberOnScreen; 
}

function clearCalc() {
    let displayInput = document.getElementById("calcDisplay");
    displayInput.innerText = "";
    numberOnScreen = "";
    formatedNumber = 0;
    finalNumber = 0;
    operation = null;
}

function adjust() {
    if (numberOnScreen !== "") {
        if (operation === null) {
            finalNumber = Number(numberOnScreen);
        } else {
            finalise();
        }
    }
    numberOnScreen = "";
    operation = 1;
}

function substract() {
    if (numberOnScreen !== "") {
        if (operation === null) {
            finalNumber = Number(numberOnScreen);
        } else {
            finalise();
        }
    }
    numberOnScreen = "";
    operation = 2;
}

function multiply() {
    if (numberOnScreen !== "") {
        if (operation === null) {
            finalNumber = Number(numberOnScreen)
        } else {
            finalise();
        }
    }
    numberOnScreen = "";
    operation = 3;
}

function divide() {
    if (numberOnScreen !== "") {
        if (operation === null) {
            finalNumber = Number(numberOnScreen)
        } else {
            finalise();
        }
        numberOnScreen = "";
        operation = 4;
    }
}

function finalise() {
    if (numberOnScreen !== "") {
        let currentNumber = Number(numberOnScreen);
        switch (operation) {
            case 1: // Seštevanje
                finalNumber += currentNumber;
                break;
            case 2: // Odštevanje
                finalNumber -= currentNumber;
                break;
            case 3: // Mnozenje
                finalNumber *= currentNumber;
                break;    
            case 4: // Deljenje
                finalNumber /= currentNumber;
                break;
            default:
                console.log("Napaka: Neznana operacija");
                return;
        }
    }
    numberOnScreen = "";
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    let displayInput = document.getElementById("calcDisplay");
    displayInput.innerText = finalNumber;
}
