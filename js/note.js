//let's collect elements to be used
let noteTitleInput = document.querySelector("#note-title");
let noteTextInput = document.querySelector("#note-textarea");
let noteList = document.querySelector("#note-list");
let noteTitleDisplay = document.querySelector("#note-title-display");
let noteArticle = document.querySelector("#note-article");
let saveButton = document.querySelector("#save-button");
let postTime = document.querySelector("#post-time");

//this refreshes the page so as to run the mobile and desktop codes properly
window.onresize = function() {
    window.location.reload()
}

// localStorage.clear()  
const screenSize = window.innerWidth;//width of the browser

//let's get our already stored notes from localStorage on page load
let noteArchive = localStorage.getItem("notes");
let jsonNote = JSON.parse(noteArchive);

// now we map through the list to display the title on page load
if (jsonNote !== null) {
    jsonNote.map((data, dataIndex) => {
        noteList.innerHTML += '<li class="list-of-notes" id=note-'+dataIndex+' onclick="viewNote('+dataIndex+')" value='+dataIndex+' title="Click to view">'+data.noteTitle+'</li>';
    })
}

let noteTitleData = "";
let noteTextData = "";

function noteTitle() {
    noteTitleData = noteTitleInput.value.charAt(0).toUpperCase() + noteTitleInput.value.slice(1);
}

function noteText() {
    noteTextData = noteTextInput.value.charAt(0).toUpperCase() + noteTextInput.value.slice(1);
}

function saveNote() {
    function saveError() {
        saveButton.style.color = "red";
        saveButton.style.fontWeight = "bold";
        setTimeout(() => {
            saveButton.style.color = "black";
            saveButton.style.fontWeight = "normal";
        }, 4000)
    }

    if (noteTitleData.length == "") {
        noteTitleInput.setAttribute("placeholder", "Title cannot be empty");
        saveError();
        setTimeout(() => {
            noteTitleInput.setAttribute("placeholder", "Title");
        }, 4000);
    }
    else if (noteTextData.length == "") {
        noteTextInput.setAttribute("placeholder", "Note cannot be empty...");
        saveError();
        setTimeout(() => {
            noteTextInput.setAttribute("placeholder", "Enter notes here...");
        }, 4000);
    }
    else {
        let timePosted = new Date();
        let timeSent = timePosted.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        let dayPosted = timePosted.getDate();
        let monthPosted = timePosted.getMonth();
        let yearPosted = timePosted.getFullYear();
        let fullDate = dayPosted+"/"+(monthPosted + 1)+"/"+yearPosted;//we added 1 to month because it's an array

        let data = [];
        let notes = {
                        noteTime: timeSent,
                        noteDate: fullDate,
                        noteTitle: noteTitleData,
                        noteText: noteTextData
                    };
        
        //function below is for indicating that data is saved
        function saveData() {
            noteTitleInput.value = "";
            noteTextInput.value = "";
            saveButton.innerText = "Saved";
            saveButton.style.color = "green";
            setTimeout(() => {
                saveButton.innerText = "Save";
                saveButton.style.color = "black";
            }, 4000)
            location.reload();
        }

        if (noteArchive == null) {
            data.push(notes);
            let jsonData = JSON.stringify(data);
            localStorage.setItem("notes", jsonData);

            let storedNote = localStorage.getItem("notes");
            let jsonNote = JSON.parse(storedNote);
            noteList.innerHTML = '<li class="list-of-notes" id=note-'+0+' onclick="viewNote('+0+')" title="Click to view">'+jsonNote[0].noteTitle+'</li>';

            saveData();
        }
        else {
            let newNote = JSON.parse(localStorage.getItem("notes"));
            newNote.push(notes);
            let newData = JSON.stringify(newNote);
            localStorage.setItem("notes", newData);

            let storedNote = localStorage.getItem("notes");
            let jsonNote = JSON.parse(storedNote);
            jsonNote.map((data, dataIndex) => {
                noteList.innerHTML += '<li class="list-of-notes" id=note-'+dataIndex+' onclick="viewNote('+dataIndex+')" value='+dataIndex+' title="Click to view">'+data.noteTitle+'</li>';
            })

            saveData();
        }
    }
}

function viewNote(e) {
    //on click of the note list title, we use the id to display the note selected
    let note = jsonNote[e].noteText;
    let title = jsonNote[e].noteTitle;
    let timeOfPost = jsonNote[e].noteTime;
    let dateOfPost = jsonNote[e].noteDate;

    //if screen size is mobile, open in a fresh page
    if (screenSize <= 600) {
        //we redirect to reader page
        window.location.href = "reader.html?"+note+"_"+title+"_"+timeOfPost+"_"+dateOfPost;
    }
    else {
        noteArticle.innerText = note;
        noteTitleDisplay.innerText = "Title: " + title;
        postTime.innerText = timeOfPost + " (" + dateOfPost + ")";
    }
}


 //We can create a text file and download it using teh BrowserApi and the code below
        // function writeNote(content, fileName, contentType) {
        //     let newDocument = document.createElement("a");
        //     let file = new Blob([content], {type: contentType});
        //     newDocument.href = URL.createObjectURL(file);
        //     newDocument.download = fileName;
        //     newDocument.click();
        // }
        // writeNote(jsonData, '../notes/json.txt', 'text/plain');