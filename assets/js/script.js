const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // Move the carousel
  carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

// script.js
const sections = document.querySelectorAll("section");

function checkSections() {
  const triggerBottom = window.innerHeight * 0.9;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkSections);

// Run once on page load
checkSections();

// Select all project titles
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
  title.addEventListener('click', () => {
    const details = title.nextElementSibling;

    // Toggle display
    if(details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // optional
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

