///////////////////////////////////////////////////////////
// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navContEl = document.querySelector(".nav-container");

btnNavEl.addEventListener("click", function () {
  navContEl.classList.toggle("nav-open");
});
// oznacza to, że toggle będzie szukać navContEl (nav-container - jako parent element) elementu, który ma "nav-open" i jeśli go nie będzie to go doda, a jeśli będzie to go usunie. W tym przypadku nazwę class'y dodajemy bez kropki z przodu.

///////////////////////////////////////////////////////////
// MULTISLIDER SECTION
const multiSlider = document.querySelector(".multi-slider");
const slideObject = [
  {
    img: "https://i.im.ge/2024/04/06/Wc6oCS.w1.png",
    model: "Fuji Wedding Dress",
    type: "£499",
  },
  {
    img: "https://i.im.ge/2024/04/06/WR4Udp.w2.png",
    model: "Hokkaido Wedding Dress",
    type: "£599",
  },
  {
    img: "https://i.im.ge/2024/04/05/WcIrE9.w3.png",
    model: "Honshu Wedding Dress",
    type: "£499",
  },
  {
    img: "https://i.im.ge/2024/04/05/WcIIEp.w4.png",
    model: "Kyushu Wedding Dress",
    type: "£549",
  },
  {
    img: "https://i.im.ge/2024/04/05/WcIj5W.w5.png",
    model: "Ryukyu Wedding Dress",
    type: "£599",
  },
  {
    img: "https://i.im.ge/2024/04/06/WRJEaL.w7.png",
    model: "Tsugaru Wedding Dress",
    type: "£599",
  },
  {
    img: "https://i.im.ge/2024/04/05/WcIEfJ.w6.png",
    model: "Nansei Wedding Dress",
    type: "£699",
  },
];

window.addEventListener("load", initializeMultislider());

function initializeMultislider() {
  let items = "";
  for (let item in slideObject) {
    items += `<div class="ms-slide">
              <img src="${slideObject[item].img}"
                alt="image">
              <br><br>
              <div class="slide-title">
                <h4>${slideObject[item].model}</h4>
                <p>${slideObject[item].type}</p>
              </div>
            </div>`;
  }
  multiSlider.innerHTML = items;
}

const tnslider = tns({
  container: ".multi-slider",
  autoWidth: true,
  gutter: 15,
  slideBy: 1,
  nav: true,
  speed: 400,
  controlsContainer: ".ms-controls",
  prevButton: ".ms-previous",
  nextButton: ".ms-next",
});
