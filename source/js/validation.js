var requiredId = ["sur-name", "name", "mail"];
var form = document.querySelector("form");
var succesPopUp = form.querySelector(".pop-up--success");
var failurePopUp = form.querySelector(".pop-up--failure");
var popups = form.querySelectorAll(".pop-up");

for (var i = 0; i < popups.length; i++) {
  var popupBtn = popups[i].querySelector("button");
  addClickHandler(popupBtn, popups[i]);
}

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (isValue()) {
    succesPopUp.classList.remove("pop-up--close");
    succesPopUp.classList.add("pop-up--open");
  } else {
    failurePopUp.classList.remove("pop-up--close");
    failurePopUp.classList.add("pop-up--open");
  }
});

function addClickHandler(popupBtn, popup) {
  popupBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (popup.classList.contains("pop-up--open")) {
      popup.classList.remove("pop-up--open");
      popup.classList.add("pop-up--close");
    }
  });
}

function isValue() {
  for (var i = 0; i < requiredId.length; i++) {
    var input = document.getElementById(requiredId[i]);
    if (!input.value) {
      return false;
    }
  }
  return true;
}
