// JavaScript to toggle the pop-up and overlay
const button = document.getElementById("btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  popup.classList.toggle("visible");
  overlay.classList.toggle("visible");
});

// Close the pop-up when clicking outside (on the overlay)
overlay.addEventListener("click", () => {
  popup.classList.remove("visible");
  overlay.classList.remove("visible");
});
