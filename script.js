'use strict';
//post titles
const posts = document.querySelectorAll(".post-items");

const inputField = document.querySelector(".search-input");
const postBody = document.querySelector(".post-body");
const secretMessage = document.querySelector(".search-message");
const itemContainer = document.querySelector(".item-container");
//search form
const searchForm = document.querySelector("#searchForm");
//addpost buttons
const addPostBtn = document.querySelector(".add-posts");
//add post overlay
const postOverLay = document.querySelector(".add-post"); 

const toggleBtn = document.querySelectorAll(".toggle-btn");

const closeBtn = document.querySelector(".close-btn");
// /////////// colour logic///////
const recButtons = document.querySelectorAll(".rectangle-btn");

const postColour = document.querySelector(".add-colour");

//////////audio////////////////


//settings functionality
function handleSearch(event) {
    // Check if the key pressed is the Enter key (keyCode 13)
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevent default behavior for Enter key
  
      const searchTerm = inputField.value.trim().toLowerCase();
  
      posts.forEach(post => {
        const postTitle = post.querySelector('h6').innerText.trim().toLowerCase();
  
        if (postTitle.includes(searchTerm)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
  
      postBody.style.display = 'none';
      secretMessage.classList.remove("hidden-items");
    }
  }
  
inputField.addEventListener('keydown', handleSearch);
  
function togglePostOverlay() {
    itemContainer.classList.toggle("hidden-items");
    postOverLay.classList.toggle("hidden-items");
    searchForm.classList.toggle("hidden-items");
}
  
addPostBtn.addEventListener('click', togglePostOverlay);
closeBtn.addEventListener('click', togglePostOverlay);
  
/////////////////////////color logic////////////////////////////////////////////////////////


// Function to set the background color based on the button clicked
function setPostContainerColor(color) {
  postColour.style.backgroundColor = color
}
//looping through the buttons 
recButtons.forEach(button => {
  button.addEventListener('click', function() {
    const color = this.dataset.color;
    setPostContainerColor(color);
  });
});



// //////////audio////////////////

// const voiceInput = document.getElementById("voiceInput");
// const recordingText = document.getElementById("recording-text");
// const displayRecord = document.querySelector(".display-record");
// const timer = document.getElementById("timer");

// let mediaRecorder;
// let chunks = [];
// let isRecording = false;
// let seconds = 0;
// let timerInterval;

// function startRecording() {
//   const constraints = { audio: true };

//   navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((stream) => {
//       mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (event) => {
//         chunks.push(event.data);
//       };

//       mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { type: 'audio/webm' });
//         chunks = [];
//         const audioURL = URL.createObjectURL(blob);
//         displayRecord.src = audioURL;
//         displayRecord.controls = true;
//         clearInterval(timerInterval);
//         seconds = 0;
//         updateTimer();
//       };

//       mediaRecorder.start();
//       isRecording = true;
//       recordingText.classList.remove("hidden-items");
//       recordingText.classList.add("blinking");
//       timerInterval = setInterval(updateTimer, 1000);
//     })
//     .catch((error) => {
//       console.error('Error accessing microphone:', error);
//     });
// }

// function stopRecording() {
//   if (isRecording) {
//     mediaRecorder.stop();
//     isRecording = false;
//     recordingText.classList.add("hidden-items");
//     recordingText.classList.remove("blinking");
//     clearInterval(timerInterval);
//   }
// }

// function updateTimer() {
//   seconds++;
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   timer.innerText = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
// }

// voiceInput.addEventListener("mousedown", function () {
//   recordingText.classList.remove("hidden-items");
//   startRecording();
// });

// // Add event listener to handle when the mouse is released or moved out of the icon
// voiceInput.addEventListener("click", function () {
//   recordingText.classList.add("hidden-items");
//   stopRecording();
//   displayRecord.classList.remove("hidden-items");
// });

// voiceInput.addEventListener("mousedown", function () {
//     if (!isRecording) {
//       recordingText.classList.remove("hidden-items");
//       displayRecord.classList.add("hidden-items");
//       startRecording();
//     }
//   });
  
//   voiceInput.addEventListener("click", function () {
//     if (isRecording) {
//       recordingText.classList.add("hidden-items");
//       stopRecording();
//       displayRecord.classList.remove("hidden-items");
//     }
//   });

// const voiceInput = document.getElementById("voiceInput");
// const recordingText = document.getElementById("recording-text");
// const displayRecord = document.querySelector(".display-record");
// const timer = document.getElementById("timer");

// let mediaRecorder;
// let chunks = [];
// let isRecording = false;
// let seconds = 0;
// let timerInterval;

// function startRecording() {
//   const constraints = { audio: true };

//   navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((stream) => {
//       mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (event) => {
//         chunks.push(event.data);
//       };

//       mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { type: 'audio/webm' });
//         chunks = [];
//         const audioURL = URL.createObjectURL(blob);
//         displayRecord.src = audioURL;
//         displayRecord.controls = true;
//         clearInterval(timerInterval);
//         seconds = 0;
//         updateTimer();
//       };

//       mediaRecorder.start();
//       isRecording = true;
//       recordingText.classList.remove("hidden-items");
//       recordingText.classList.add("blinking");
//       timerInterval.classList.remove("hidden-items")
//       timerInterval = setInterval(updateTimer, 1000);
//     })
//     .catch((error) => {
//       console.error('Error accessing microphone:', error);
//     });
// }

// function stopRecording() {
//   if (isRecording) {
//     mediaRecorder.stop();
//     isRecording = false;
//     recordingText.classList.add("hidden-items");
//     recordingText.classList.remove("blinking");
//     clearInterval(timerInterval);
//   }
// }

// function updateTimer() {
//   seconds++;
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   timer.innerText = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
// }

// voiceInput.addEventListener("mousedown", function () {
//   if (!isRecording) {
//     recordingText.classList.remove("hidden-items");
//     displayRecord.classList.add("hidden-items");
//     startRecording();
//   }
// });

// // Add event listener to handle when the mouse is released
// voiceInput.addEventListener("mouseup", function () {
//   if (isRecording) {
//     recordingText.classList.add("hidden-items");
//     stopRecording();
//     displayRecord.classList.remove("hidden-items");
//   }
// });

// // Add event listener to handle when the mouse leaves the icon
// voiceInput.addEventListener("mouseout", function () {
//   if (isRecording) {
//     recordingText.classList.add("hidden-items");
//     stopRecording();
//     displayRecord.classList.remove("hidden-items");
//   }
// });

const voiceInput = document.getElementById("voiceInput");
const recordingText = document.getElementById("recording-text");
const displayRecord = document.querySelector(".display-record");
const timer = document.getElementById("timer");

let mediaRecorder;
let chunks = [];
let isRecording = false;
let seconds = 0;
let timerInterval;

function startRecording() {
  const constraints = { audio: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        displayRecord.src = audioURL;
        displayRecord.controls = true;
        clearInterval(timerInterval);
        seconds = 0;
        updateTimer();
        timer.classList.add("hidden-items"); // Hide the timer when recording is over
      };

      mediaRecorder.start();
      isRecording = true;
      recordingText.classList.remove("hidden-items");
      recordingText.classList.add("blinking");
      timer.classList.remove("hidden-items"); // Show the timer when recording starts
      timerInterval = setInterval(updateTimer, 1000);
    })
    .catch((error) => {
      console.error('Error accessing microphone:', error);
    });
}

function stopRecording() {
  if (isRecording) {
    mediaRecorder.stop();
    isRecording = false;
    recordingText.classList.add("hidden-items");
    recordingText.classList.remove("blinking");
    clearInterval(timerInterval);
  }
}

function updateTimer() {
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timer.innerText = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

voiceInput.addEventListener("mousedown", function () {
  if (!isRecording) {
    recordingText.classList.remove("hidden-items");
    displayRecord.classList.add("hidden-items");
    startRecording();
  }
});

// Add event listener to handle when the mouse is released
voiceInput.addEventListener("mouseup", function () {
  if (isRecording) {
    recordingText.classList.add("hidden-items");
    stopRecording();
    displayRecord.classList.remove("hidden-items");
  }
});

// Add event listener to handle when the mouse leaves the icon
voiceInput.addEventListener("mouseout", function () {
  if (isRecording) {
    recordingText.classList.add("hidden-items");
    stopRecording();
    displayRecord.classList.remove("hidden-items");
  }
});


  

