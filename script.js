// ==========================
// SMOOTH ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  } else {
    navbar.style.boxShadow = "none";
  }

});

// ==========================
// IMAGE LIGHTBOX
// ==========================

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
  <span id="closeLightbox">&times;</span>
  <img id="lightboxImg" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");

images.forEach(image => {

  image.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

  });

});

document
  .getElementById("closeLightbox")
  .addEventListener("click", () => {

    lightbox.style.display = "none";

  });

lightbox.addEventListener("click", e => {

  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }

});

// ==========================
// FADE IN ANIMATION
// ==========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

document
  .querySelectorAll(
    ".project-card, .timeline-item, .skill-block, .gallery-grid img"
  )
  .forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

  });

// ==========================
// CURRENT YEAR FOOTER
// ==========================

const footer = document.querySelector("footer");

if (footer) {

  footer.innerHTML =
    `© ${new Date().getFullYear()} Prajval Bari`;

}