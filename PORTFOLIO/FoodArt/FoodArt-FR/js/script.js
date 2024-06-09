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

/////////////////////////////////////////////////////////// STICKY NAVIGATION

const sectionMainEl = document.querySelector(".section-main");

// Jeśli dodamy teraz 'sticky' jako dodatkową classę do 'header' to menu będzie nam się skrolować wraz ze scrollowaniem strony. Jeśli chcemy, aby menu zaczęło się scrollować, DOPIERO po "section-main" należy:

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // dzięki temu pasek nav pojawi się po przekroczeniu section-main:
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    // dzięki temu pasek nav zniknie się po powrocie do section-main:
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // aby menu pojawiło się odrobinę wcześniej niż po przekroczeniu linii z 'section-hero' wystarczy dodać rootMargin. Wartość jaką należy dodać jako rootMargin to wartość height z 'header':
    rootMargin: "-100px",
  }
);
obs.observe(sectionMainEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
