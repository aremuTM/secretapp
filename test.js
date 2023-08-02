// Define an array of colors corresponding to each button
const colors = ["#E2A2DC", "#E1E2A2", "#CFF3D0", "#A2ACE2", "#E2A2A2"];

// Select all the buttons
const recButtons = document.querySelectorAll(".rectangle-btn");

// Select the container element whose color you want to change
const postColour = document.querySelector(".post-colour");

// Function to set the background color based on the button clicked
function setPostContainerColor(color) {
  postColour.style.backgroundColor = color;
}

// Add click event listeners to the buttons using a loop
recButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    setPostContainerColor(colors[index]);
  });
});
