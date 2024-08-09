let bmiWeight = document.querySelector("#bmi-weight");//in kg
let bmiHeight = document.querySelector("#bmi-height");//in cm
let answerDisplay  = document.querySelector(".answer-display");

let weight = "";
let height = "";

function checkWeight() {
    weight = bmiWeight.value;
}

function checkHeight() {
    height = bmiHeight.value;
}

function submitBmi() {
    if (weight.length == "") {
        answerDisplay.style.color = "red";
        answerDisplay.innerText = "Enter weight data";
    }
    else if (height.length == "") {
        answerDisplay.style.color = "red";
        answerDisplay.innerText = "Enter height data";
    }
    else {
        let heightSquare = height * height;
        let bmi = ((weight / heightSquare) * 10000);
        let bmiRound = Math.floor(bmi);

        if (bmiRound <= parseFloat(18.4)) {
            answerDisplay.style.backgroundColor = "rgb(255, 208, 0)";
            answerDisplay.style.color = "black";
        }
        else if (bmiRound >= parseFloat(18.5) && bmiRound < 25) {
            answerDisplay.style.backgroundColor = "green";
            answerDisplay.style.color = "white";
        }
        else if (bmiRound >= 25 && bmiRound < 40) {
            answerDisplay.style.backgroundColor = "rgb(102, 83, 0)";
            answerDisplay.style.color = "white";
        }
        else if (bmiRound >= 40) {
            answerDisplay.style.backgroundColor = "rgb(165, 0, 0)";
            answerDisplay.style.color = "white";
        }
        answerDisplay.style.fontSize = "16px";
        answerDisplay.innerText = bmi.toFixed(1);
    }
}
