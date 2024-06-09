"use strict";

///////////////////////////////////////////////////////////
// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////////////
///////////////////////////////  PORTFOLIO SLIDER + DOTS

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide_img");
  const dots = document.querySelectorAll(".dots");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
      dots[i].classList.toggle("active", i === index);
    });
  }

  document.querySelector(".prev").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  document.querySelector(".next").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Initialize the first slide
  showSlide(0);
});

/////////////////////////////////////////////////////////////////////
///////////////////////////////  FAQ ACCORDION

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

/////////////////////////////////////////////////////////////////////
////////////////////////////// SCROLL ACTIVATED COUNTER

// Get elements from the DOM
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
// Variable that tracks if the counters have beed activated
let activated = false;

// Add scroll event to the page
window.addEventListener("scroll", () => {
  /* If the page is scrolled to the containers element and the counters are not activated */
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 600 &&
    activated === false
  ) {
    // Select all counters
    counters.forEach((counter) => {
      // Set counter values to zero
      counter.innerText = 0;
      /* Set count variable to track the count */
      let count = 0;

      // Update count function
      function updateCount() {
        // Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        // As long as the count is below the target number
        if (count < target) {
          // Increment the count
          count++;
          // Set the counter text ti the count
          counter.innerText = count;
          // Repeat this every 10 miliseconds
          setTimeout(updateCount, 10);
        } else {
          // Set the counter text to the target number
          counter.innerText = target;
        }
      }
      // Run the function initialy
      updateCount();
      // Set activated to true
      activated = true;
    });
    /*If the page is scrolled back a certain ammount or to the top and activated is true: */
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 800 ||
    (pageYOffset === 0 && activated === true)
  ) {
    // Select all counters
    counters.forEach((counter) => {
      // Set counter text back to zero
      counter.innerText = 0;
    });
    // Set activated to false
    activated = false;
  }
});

/////////////////////////////////////////////////////////////
///////////////////////////// TO THE TOP BTN

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1200) {
    // means that after 1200px scrolling to-top btn will activate
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

/////////////////////////////////////////////////////////////
///////////////////////////// SHOW MODAL

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
