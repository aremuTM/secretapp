"use strict";
//post titles
const posts = document.querySelectorAll(".post-items");

const inputField = document.querySelector(".search-input");
const postBody = document.querySelector(".post-body");
const secretMessage = document.querySelector(".search-message");
// const itemContainer = document.querySelector(".item-container");
//search form
const searchForm = document.querySelector("#searchForm");
//addpost buttons
const addPostBtn = document.querySelector(".add-posts");
//add post overlay
const postOverLay = document.querySelector(".add-post");

const toggleBtn = document.querySelectorAll(".toggle-btn");

const closeBtn = document.querySelector(".close-btn");
// /////////// colour logic///////

//////////audio////////////////

//settings functionality
function handleSearch(event) {
  // Check if the key pressed is the Enter key (keyCode 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent default behavior for Enter key

    const searchTerm = inputField.value.trim().toLowerCase();

    posts.forEach((post) => {
      const postTitle = post.querySelector("h6").innerText.trim().toLowerCase();

      if (postTitle.includes(searchTerm)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });

    postBody.style.display = "none";
    secretMessage.classList.remove("hidden-items");
  }
}

inputField.addEventListener("keydown", handleSearch);
inputField.addEventListener("blur", function () {
  window.location.href = "index.html";
});

function togglePostOverlay() {
  itemContainer.classList.toggle("hidden-items");
  postOverLay.classList.toggle("hidden-items");
  searchForm.classList.toggle("hidden-items");
  addPostBtn.classList.toggle("hidden-items");
}

addPostBtn.addEventListener("click", togglePostOverlay);
closeBtn.addEventListener("click", togglePostOverlay);

// create unique id for each post                                                take note
let postIdCounter = 0; // Initialize a counter for generating unique IDs

function generateUniquePostId() {
  postIdCounter++;
  return `post-${postIdCounter}`;
}

/////////////////////////color logic////////////////////////////////////////////////////////

const recButtons = document.querySelectorAll(".rectangle-btn");

const postColour = document.querySelector(".add-colour");

// Function to set the background color based on the button clicked
function setPostContainerColor(color, id) {
  postColour.style.backgroundColor = color;
  // Save the color to local storage
  localStorage.setItem('postColor', color);
  // recently added
  localStorage.setItem('postColorId', id);

}

//looping through the buttons
recButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const color = this.dataset.color;

    // freshly added update 
    const id = this.dataset.id; // Get the unique ID from the data-id attribute
    setPostContainerColor(color, id);
  });
});


////////////////////////////////////////////////////////////
/////////////////////////////audio////////////////////////
const voiceInput = document.getElementById("voiceInput");
const recordingText = document.getElementById("recording-text");
const displayRecord = document.querySelector(".display-record");
const timer = document.getElementById("timer");
const delAudBtn = document.getElementById("delete-aud");

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
        const blob = new Blob(chunks, { type: "audio/webm" });
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
      console.error("Error accessing microphone:", error);
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
  timer.innerText = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function handleStartRecording() {
  if (!isRecording) {
    recordingText.classList.remove("hidden-items");
    displayRecord.classList.add("hidden-items");
    startRecording();
  }
}

function handleStopRecording() {
  if (isRecording) {
    recordingText.classList.add("hidden-items");
    stopRecording();
    displayRecord.classList.remove("hidden-items");
    delAudBtn.classList.remove("hidden-items");
  }
}

voiceInput.addEventListener("mousedown", handleStartRecording);
voiceInput.addEventListener("mouseup", handleStopRecording);
voiceInput.addEventListener("mouseout", handleStopRecording);
///////////////////////////////////////submit pin/////////////////////
const pinInput = document.querySelector(".pin");
const pinMessage = document.querySelector(".pin-message");

pinInput.addEventListener("click", function () {
  pinMessage.classList.remove("hidden-items");
});

pinInput.addEventListener("input", function () {
  const enteredPIN = pinInput.value;

  if (enteredPIN.length === 4 && /^\d+$/.test(enteredPIN)) {
    pinMessage.classList.add("hidden-items");
  } else {
    pinMessage.classList.remove("hidden-items");
  }
});

pinInput.addEventListener("blur", function () {
  pinMessage.classList.add("hidden-items");
});

// ///////////////////text field/////////////////////////
const titleInput = document.querySelector(".title");
const secretInput = document.querySelector(".bury-s");
const uploadBtn = document.querySelector(".send-text");
const itemContainer = document.querySelector(".post-items");
const defaultColor = "#ffffff"; // White color in hexadecimal

// Load existing items from local storage
const storedItems = JSON.parse(localStorage.getItem("items")) || [];
for (const item of storedItems) {
  createItemElement(item.title, item.date, item.color, item.colorId); // Pass the color and color ID
}
uploadBtn.addEventListener("click", function () {
  const title = titleInput.value;
  const secret = secretInput.value;

  if (!title || !secret) {
    // Display an error message or take appropriate action
    return; // Stop further execution of the event handler
  }

  if (title && secret) {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const selectedColor = localStorage.getItem('postColor');
    const selectedColorId = localStorage.getItem('postColorId');

    // Use the default color if no color was selected
    const colorToUse = selectedColor || defaultColor;
    const colorIdToUse = selectedColorId || 'default'; // Using 'default' as an identifier for the default color

    // Create item element and add to the container
    createItemElement(title, dateString, colorToUse, colorIdToUse); // Pass the color and color ID

    // Save item to local storage
    const newItem = { title, date: dateString, color: colorToUse, colorId: colorIdToUse };
    storedItems.push(newItem);
    localStorage.setItem("items", JSON.stringify(storedItems));

    titleInput.value = "";
    secretInput.value = "";

    // Clear color data from local storage
    localStorage.removeItem('postColor');
    localStorage.removeItem('postColorId');

    // Redirect to another page or take other appropriate action
    window.location.href = "index.html";
  }
});

function createItemElement(title, date, color, colorId) {
  const newItem = document.createElement("div");
  newItem.classList.add("posts", "items-post");
  const container = document.createElement("div");
  container.classList.add("container-colour");

  if (color === defaultColor) {
    container.style.backgroundColor = defaultColor;
  } else {
    container.style.backgroundColor = color;
  }

  const titleElement = document.createElement("h6");
  titleElement.textContent = title;

  const dateElement = document.createElement("span");
  dateElement.classList.add("add--date");
  dateElement.textContent = date;

  container.appendChild(titleElement);
  container.appendChild(dateElement);
  newItem.appendChild(container);

  // Set a data attribute to store the color ID
  newItem.setAttribute('data-color-id', colorId);

  itemContainer.appendChild(newItem);
}