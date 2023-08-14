const pinInput = document.querySelector(".pin");
const pinMessage = document.querySelector(".pin-message");

pinInput.addEventListener("input", function () {
  const enteredPIN = pinInput.value;

  if (enteredPIN.length === 4 && /^\d+$/.test(enteredPIN)) {
    pinMessage.classList.add("hidden-items");
    // Store the enteredPIN in local storage
    localStorage.setItem("userPIN", enteredPIN);
  } else {
    pinMessage.classList.remove("hidden-items");
  }
});

// If you want to load the PIN from local storage on page load, you can add this code:
document.addEventListener("DOMContentLoaded", function () {
  const storedPIN = localStorage.getItem("userPIN");
  if (storedPIN) {
    pinInput.value = storedPIN;
  }
});
