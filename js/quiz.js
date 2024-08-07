//let's collect element tags
let subjectSelect = document.querySelector("#quiz-subject");
let startQuizDiv = document.querySelector(".start-quiz-section");
let quizQuestionDiv = document.querySelector(".quiz-question");
let quizTimer = document.querySelector("#quiz-timer");
let quizTitle = document.querySelector("#quiz-subject-name");
let quizProperDiv = document.querySelector(".quiz-proper");
let callbackNote = document.querySelector("#callback-note");
let quizSubmitNote = document.querySelector("#quiz-submit-note");
let quizStarterDiv = document.querySelector(".quiz-starter-div");

const quizTime = 5;//how long the quiz should stay before submitting

let subject = "";//just declared the subject variable

function hideCallback() {
    callbackNote.style.display = "none";
    callbackNote.innerText = "";
}

function selectSubject() {
    subject = subjectSelect.value;
}

function startQuiz() {
    let subjectArray = ["agr", "eng", "mth", "ict", "igb"];

    if (subject.length == "") {
        callbackNote.innerText = "No subject selected!";
        callbackNote.style.display = "inline-block";
        setTimeout(hideCallback, 4000);
    }
    else if (!subjectArray.includes(subject)) {
        callbackNote.innerText = "Invalid subject selected!";
        callbackNote.style.display = "inline-block";
        setTimeout(hideCallback, 4000);
    }
    else {
        //let's get full names of the subject
        let fullSubject = "";
        switch(subject) {
            case 'agr':
                fullSubject = "Agriculture";
                break;
            case 'eng':
                fullSubject = "English";
                break;
            case 'mth':
                fullSubject = "Mathematics";
                break;
            case 'ict':
                fullSubject = "Computer Studies";
                break;
            case 'igb':
                fullSubject = "Igbo";
                break;
        }

        quizTitle.innerText = fullSubject;

        let timer = new Date();//we initialize the date/time object
        timer.setMinutes(timer.getMinutes() + quizTime);//we add 5 minutes to current time
        let countDown = Date.parse(timer);//we convert to unix 

        //this setInterval function will do the counting down
        let countDownTimer = setInterval(() => {
            let now = new Date().getTime();//current time
            let timeDifference = countDown - now;//let's get the time difference
            
            //now let's get minutes and seconds for the countdown display
            //note that a day is equivalent to 86400 seconds
            let min = Math.floor((timeDifference % (3600000)) / (60000));//
            let sec = Math.floor((timeDifference % (60000)) / 1000);

            //let's make sure the seconds is always diplaying 2 digits
            if (sec.toString().length < 2) {
                sec = "0"+sec;
            }
            
            if (min <= 1) {
                quizTimer.style.color = "red";
            }
            else {
                quizTimer.style.color = "rgb(0, 255, 0)";
            }

            let timeDisplay = min + ":" + sec;


            //display the time
            quizTimer.innerText = timeDisplay;
            
            //now what happens when time is up
            //we run the submit function and close the quiz
            // if (timeDifference )
            if (timeDifference < 0) {
                clearInterval(countDownTimer);
                submitQuiz();
            }
        }, 1000);
        
        //a little delay added to allow the timer start
        setTimeout(() => {
            quizQuestionDiv.style.display = "block";
            quizStarterDiv.style.display = "none";
        }, 1000)
    }
}

function submitQuiz() {
    quizSubmitNote.innerText = "Quiz submitted";
    quizSubmitNote.style.display = "block";
    quizStarterDiv.style.display = "block";
    quizQuestionDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    setTimeout(() => {
        window.location.reload()
    }, 4000)
}