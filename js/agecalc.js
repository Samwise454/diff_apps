let yearInput = document.querySelector("#age-year");
let monthInput = document.querySelector("#age-month");
let displayBar = document.querySelector(".answer-display");

let yearData = "";
let monthData = "";

function checkYear() {
    yearData = yearInput.value;
}

function checkMonth() {
    monthData = parseInt(monthInput.value);//to convert data to number
}

function submitAge() {
    let monthArray = [0,1,2,3,4,5,6,7,8,9,10,11];
    if (yearData.length == "" || monthData.length == "") {//checking whether any input is left vacant
        displayBar.style.color = "red";
        displayBar.innerText = "Enter valid year and select month";
    }
    else if (yearData.length !== 4) {//whether year is valid
        displayBar.style.color = "red";
        displayBar.innerText = "Invalid year selected";
    }
    else if (!monthArray.includes(monthData)) {
        displayBar.style.color = "red";
        displayBar.innerText = "Invalid month selected";
    }
    else {
        let thisYear = new Date().getFullYear();//to get current year (2024)
        let thisMonth = new Date().getMonth();//to get current month which is a number ranging from 0 - 11
        let age = "";

        if (monthData > thisMonth) {//if my month of birth is greater than current month
            age = ((thisYear - yearData) - 1);
        }
        else {//if my month of birth is equal to the present month or higher
            age = thisYear - yearData;
        }

        displayBar.style.color = "green";
        displayBar.style.fontSize = "17px";
        displayBar.innerText = age + " years old";

    }
}