const PopUpBtn = document.querySelector("#MessagePopupBtn");
const popup = document.querySelector(".popup");
const ClosePopup = document.querySelector(".Close__Popup");

PopUpBtn.addEventListener("click", function () {
  popup.style.display = "flex";
});

ClosePopup.addEventListener("click", function () {
  popup.style.display = "none";
});
