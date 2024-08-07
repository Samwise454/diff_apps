//collection of elements
let noteDislay = document.querySelector(".note-display");
let noteArticle = document.querySelector("#note-article");
let noteTitleDisplay = document.querySelector("#note-title-display");
let postTime = document.querySelector("#post-time");

//now let's get the page url and pick our notes
let url = window.location.search.replaceAll("%20", " ");;
//we split to get our data
let splitUrl = url.split("_");//array with 4 elements
//remember we are getting 3 different data (note, title and time)
    let note = splitUrl[0].charAt(0).replace("?", "") + splitUrl[0].slice(1);
    let title = splitUrl[1];
    let timeOfPost = splitUrl[2];
    let dateOfPost = splitUrl[3];

    noteArticle.innerText = note;
    noteTitleDisplay.innerText = "Title: " + title;
    postTime.innerText = timeOfPost + " (" + dateOfPost + ")";

    noteDislay.style.display = "inline-block";
