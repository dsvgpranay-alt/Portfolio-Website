const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close the mobile menu whenever a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const roles = [
  "Software Developer",
  "Full Stack Enthusiast",
  "AI/ML Enthusiast",
  "Aspiring SDE"
];

const roleText = document.getElementById("roleText");

let roleIndex = 0;   
let charIndex = 0;   
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  roleText.textContent = currentRole.substring(0, charIndex);

  let typingSpeed = isDeleting ? 60 : 100;

  // Once the full word is typed, pause, then start deleting
  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1400;
    isDeleting = true;
  }

  // Once the word is fully deleted, move to the next role
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


document.getElementById("year").textContent = new Date().getFullYear();
