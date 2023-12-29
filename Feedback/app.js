const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container ");
const sendBtn = document.querySelector(".btn");
const panel = document.querySelector(".panel");

let selectedRating = "Satisfied";
ratingsContainer.addEventListener("click", (event) => {
  // To see if the clicked element's parent contains the class of rating
  // The clicked element is the div containing the class of icon
  if (event.target.parentNode.classList.contains("rating")) {
    //if it does, update the selectedRating to the next sibling which is the small element
    selectedRating = event.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class = "heart">💖</p>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
});
