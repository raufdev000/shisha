
  const tabs = document.querySelectorAll('.desserts__tab');
  const lists = document.querySelectorAll('.desserts__list');
  const title = document.getElementById('dessertsPanelTitle');

  const titles = {
    waffles: 'Waffle &amp; Cookie Dough',
    cheesecakes: 'Cheesecakes',
    cakes: 'Luxury Cakes',
    desi: 'Desi Traditional',
    cookies: 'Mayfair Cookies'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      lists.forEach(l => l.classList.remove('is-active'));
      document.querySelector(`.desserts__list[data-list="${key}"]`).classList.add('is-active');

      title.innerHTML = titles[key];
    });
  });


  /* ============================================================
   Cafe Moishi — Scroll Fade + Blur Reveal
   ------------------------------------------------------------
   Adds a smooth fade + blur-in effect to every major section on
   the page EXCEPT:
     - the hero (.home-hero)
     - the section right after the hero (.moishi-carousel)
     - the footer (.mun-footer)

   The effect replays every single time a section enters or
   leaves the viewport — scrolling down plays it in, scrolling
   back up and down again replays it, exactly like a proper
   scroll-triggered reveal system (not a "once only" animation).

   This file is self-contained: it only adds/toggles a class
   (".scroll-fade-blur" / ".is-visible") on the target sections.
   It does not touch any existing markup, styles, or the site's
   other scripts (Lenis, carousel, tabs, FAQ accordion, etc.).
   ============================================================ */
(function () {
  "use strict";

  // Sections to animate — hero, the section right after hero,
  // and the footer are intentionally excluded.
  var SELECTORS = [
    "#about",            // About Cafe Moishi
    "#lounge",           // Shisha lounge
    "#drinks",           // Drinks tabs
    "#desserts",         // Desserts tabs
    ".menu-section",     // Flip cards (Shisha / Drinks / Food)
    "#qawali",           // Qawwali night
    ".gallery-section",  // Photo gallery grid
    "#faq",              // FAQ
    "#testimonials"      // Testimonials
  ];

  var sections = Array.prototype.slice.call(
    document.querySelectorAll(SELECTORS.join(","))
  );

  if (!sections.length) return;

  // Tag every target section with the reveal class.
  sections.forEach(function (section) {
    section.classList.add("scroll-fade-blur");
  });

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // No IntersectionObserver support, or reduced motion requested —
  // just show everything, no animation.
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    sections.forEach(function (section) {
      section.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // toggle (not just add) — this is what makes the fade+blur
        // replay every time you scroll back up or down past it.
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
// ── Navbar sticky (har page pe hai)
var navbar = document.getElementById('mainNavbar');
if (navbar) {
  function checkScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', checkScroll);
  checkScroll();
}
