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
// means that the toggle will search for the headerEl element that has "nav-open", and if it doesn't find it, it will add it, and if it does, it will remove it. In this case, we add the class name without a dot in front.

/////////////////////////////////////////////////////////// STICKY NAVIGATION

const sectionMainEl = document.querySelector(".section-main");

// If we now add 'sticky' as an additional class to 'header', the menu will scroll along with the page scrolling. If we want the menu to start scrolling ONLY after "section-main", then:

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // Thanks to this, the nav bar will appear after surpassing section-main.
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    // Thanks to this, the nav bar will disappear upon returning to section-main.
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // To make the menu appear slightly earlier than after crossing the line with 'section-hero', simply add rootMargin. The value to add as rootMargin is the height value from 'header'.
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
