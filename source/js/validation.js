var inputs = document.querySelectorAll("input:required");
var form = document.querySelector("form");
var succesPopUp = form.querySelector(".pop-up--success");
var popup = form.querySelector(".pop-up");
var popupBtn = popup.querySelector("button");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  succesPopUp.classList.remove("pop-up--close");
  succesPopUp.classList.add("pop-up--open");
});

popupBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popup.classList.contains("pop-up--open")) {
    popup.classList.remove("pop-up--open");
    popup.classList.add("pop-up--close");
  }
});
