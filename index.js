const texts = [
  "Hi, I'm Festus😎👑",
  "A Passionate Learner👨‍🎓",
  "Welcome to My Portfolio📑"
];

let count = 0;
let index = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function typeEffect() {
  const current = texts[count % texts.length];
  const text = isDeleting ? current.slice(0, index--) : current.slice(0, index++);

  typingElement.textContent = text;

  if (!isDeleting && index === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before delete
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count++;
    setTimeout(typeEffect, 50); // pause before typing next
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100); // speed
  }
}
typeEffect();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});





const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
