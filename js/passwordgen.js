//let's collect elements
let passwordInput = document.querySelector("#password-length");
let passwordDisplay = document.querySelector("#password-text");
let generateButton = document.querySelector("#generate-pass");
let passwordStrength = document.querySelector("#pass-strength");
let callbackNote = document.querySelector("#callback-note");
let copyPass = document.querySelector("#copy-password");

let passLength = "";//this holds the lenght of password we wish to generate
let passStrength = "";

function setPasswordLenght() {
    passLength = passwordInput.value;
}

function setPassStrength() {
    passStrength = passwordStrength.value;
}

function hideCallback() {
    callbackNote.style.transition = "all 0.5s easi-in-out";
    callbackNote.style.visibility = "hidden";
    generateButton.style.backgroundColor = "green";
}

function generatePassword() {
    //let's check if length is expected data
    let passStrengthArray = ["1", "2", "3", "4", "5"];
    if (passLength.length == "") {
        generateButton.style.backgroundColor = "red";
        callbackNote.innerText = "Empty password length";
        callbackNote.style.transition = "all 0.5s ease-in-out";
        callbackNote.style.visibility = "visible";
        setTimeout(() => {
            hideCallback();
        }, 4000)
    }
    else if (passLength <= 0) {
        generateButton.style.backgroundColor = "red";
        callbackNote.innerText = "Invalid password";
        callbackNote.style.transition = "all 0.5s ease-in-out";
        callbackNote.style.visibility = "visible";
        setTimeout(() => {
            hideCallback();
        }, 4000)
    }
    else if (passStrength.length == "") {
        generateButton.style.backgroundColor = "red";
        callbackNote.innerText = "Select password strength";
        callbackNote.style.transition = "all 0.5s ease-in-out";
        callbackNote.style.visibility = "visible";
        setTimeout(() => {
            hideCallback();
        }, 4000)
    }
    else if (!passStrengthArray.includes(passStrength)) {
        generateButton.style.backgroundColor = "red";
        callbackNote.innerText = "Select valid pass strength";
        callbackNote.style.transition = "all 0.5s ease-in-out";
        callbackNote.style.visibility = "visible";
        setTimeout(() => {
            hideCallback();
        }, 4000)
    }
    else {
        //we now generate password here
        let capitalAlphabet = [
            "A", "B", "C", "D", "E", "F", "G", "H", 
            "I", "J", "K", "L", "M", "N", "O", "P", 
            "Q", "R", "S", "T", "U","V", "W", "X", 
            "Y", "Z"    
        ];
        let capAlphaLength = capitalAlphabet.length;

        let bigSmallAlphabet = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", 
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
            "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", 
            "j", "k", "l", "m", "n", "o", "p", "q", "r", 
            "s", "t", "u","v", "w", "x", "y", "z"    
        ];
        let bigSmallAlphaLength = bigSmallAlphabet.length;

        let specialChar = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", 
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
            "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", 
            "j", "k", "l", "m", "n", "o", "p", "q", "r", 
            "s", "t", "u","v", "w", "x", "y", "z",
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "."
        ];
        let specialCharLength = specialChar.length;

        let smartPass = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", 
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
            "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", 
            "j", "k", "l", "m", "n", "o", "p", "q", "r", 
            "s", "t", "u","v", "w", "x", "y", "z",
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", ".", ",",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
        ];
        let smartPassLength = smartPass.length;

        //this function randomizes the characters
        function randomArray(data, arrayLength) {
            while (arrayLength != 0) {
                let randomArray = Math.floor(Math.random() * arrayLength);
                arrayLength--;

                [data[arrayLength], data[randomArray]] = [data[randomArray], data[arrayLength]]
            }
        }

        randomArray(capitalAlphabet, capAlphaLength);
        randomArray(bigSmallAlphabet, bigSmallAlphaLength);
        randomArray(specialChar, specialCharLength);
        randomArray(smartPass, smartPassLength);

        function passGenerated(newPassword) {
            callbackNote.innerText = "Password Generated";
            callbackNote.style.visibility = "visible";
            passwordDisplay.innerText = newPassword;
            setTimeout(hideCallback, 4000);
        }

        function showCallbackError() {
            generateButton.style.backgroundColor = "red";
            callbackNote.style.transition = "all 0.5s ease-in-out";
            callbackNote.style.visibility = "visible";
            setTimeout(() => {
                hideCallback();
            }, 4000)
        }

        let passData = [];
        let newPassword = "";
        //now we switch between password strengths and then loop through length
        switch(passStrength) {
            case '1'://weak password
                if (passLength > 26) {
                    callbackNote.innerText = "Password Length must not be more than 26";
                    showCallbackError();
                }
                else {
                    //we now loop through to get data
                    for (let i = 0; i < passLength; i++) {
                        //now becasue the password strength is weak, we select just from capital alphabets
                        let weakPass = capitalAlphabet[i];
                        passData.push(weakPass);
                    }
                    newPassword = passData.join("");
                    passGenerated(newPassword);
                }
                break;
            case '2'://poor password
                if (passLength > 30) {
                    callbackNote.innerText = "Password Length must not be more than 30";
                    showCallbackError();
                }
                for (let i = 0; i < passLength; i++) {
                    //now becasue the password strength is weak, we select just from capital alphabets
                    let weakPass = bigSmallAlphabet[i];
                    passData.push(weakPass);
                }
                newPassword = passData.join("");
                passGenerated(newPassword);
                break;
            case '3'://good password
                if (passLength < 8 || passLength > 63) {
                    callbackNote.innerText = "Password Length must not be less than 8 or greater than 63";
                    showCallbackError();
                }
                else {
                    for (let i = 0; i < passLength; i++) {
                        //now becasue the password strength is weak, we select just from capital alphabets
                        let weakPass = specialChar[i];
                        passData.push(weakPass);
                    }
                    newPassword = passData.join("");
                    passGenerated(newPassword);
                }
                break;
            case '4'://strong password
                if (passLength < 12 || passLength > 63) {
                    callbackNote.innerText = "Password Length must not be less than 12 or greater than 63";
                    showCallbackError();
                }
                else {
                    for (let i = 0; i < passLength; i++) {
                        //now becasue the password strength is weak, we select just from capital alphabets
                        let weakPass = specialChar[i];
                        passData.push(weakPass);
                    }
                    newPassword = passData.join("");
                    passGenerated(newPassword);
                }
                break;
            case '5'://sharp password
                if (passLength < 16) {
                    callbackNote.innerText = "Password Length must not be less than 16 or greater than 74";
                    showCallbackError();
                }
                else {
                    for (let i = 0; i < passLength; i++) {
                        //now becasue the password strength is weak, we select just from capital alphabets
                        let weakPass = smartPass[i];
                        passData.push(weakPass);
                    }
                    newPassword = passData.join("");
                    passGenerated(newPassword);
                }
                break;
        }
        copyPass.style.display = "inline-block";
    }
}

function copyPassword() {
    //copy the password inside this div: passwordDisplay
    let password = passwordDisplay.innerText;
    navigator.clipboard.writeText(password);
    callbackNote.innerText = "Password copied";
    callbackNote.style.visibility = "visible";
    setTimeout(hideCallback, 4000);
}