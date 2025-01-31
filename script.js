let firstNum = getRandomNumber();
let secondNum = getRandomNumber();
let userInput;
let points = 0;

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}

function reset() {
    firstNum = getRandomNumber();
    secondNum = getRandomNumber();
    document.getElementById("number1").innerHTML = firstNum;
    document.getElementById("number2").innerHTML = secondNum;
}

function correctAnswer() {
    points++;
    document.getElementById("pointDiv").innerHTML = `Poeng: ${points}`;
    window.alert("Riktig");
    reset();
}

function wrongAnswer() {
    window.alert("Feil");
    reset();
}

function checkAnswer() {
    if (userInput == ">") {
        if (firstNum > secondNum) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    } else if (userInput == "<") {
        if (firstNum < secondNum) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    } else if (userInput == "=") {
        if (firstNum == secondNum) {
            points++;
            correctAnswer();
        } else {
            wrongAnswer();
        }
    } else {
        window.alert("Ugjyldig input")
    }
}