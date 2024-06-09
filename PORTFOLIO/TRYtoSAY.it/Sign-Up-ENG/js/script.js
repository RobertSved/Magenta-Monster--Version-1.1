"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    // Removing 'hidden' class from Modal
    modal.classList.remove("hidden");
    // Removing 'hidden' class from Overlay
    overlay.classList.remove("hidden");
  });

// Closing Modal by 'X button':
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Closing Modal by clicking 'overlay':
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Button ESC closing Modal
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

/* 
// KRÓTSZA WERSJA POWYŻSZEGO ZAPISU --> REFACTORING CODE

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// KRÓTSZA OPCJA - Removing 'hidden' class from Modal:
const openModal = function () {
  console.log("Button clicked");
    // Removing 'hidden' class from Modal
    modal.classList.remove("hidden");
    // Removing 'hidden' class from Overlay
    overlay.classList.remove("hidden");
}

// KRÓTSZA OPCJA - Closing Modal:
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

*/

///////////////////////////////////////////////////////////
// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
