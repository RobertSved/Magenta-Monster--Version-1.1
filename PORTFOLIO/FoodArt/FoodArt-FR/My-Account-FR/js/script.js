///////////////////////////////////////////////////////////
// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// oznacza to, że toggle będzie szukać headerEl elementu, który ma "nav-open" i jeśli go nie będzie to go doda, a jeśli będzie to go usunie. W tym przypadku nazwę class'y dodajemy bez kropki z przodu.
