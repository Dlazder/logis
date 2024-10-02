const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let intervalId;

document.querySelector('.prev-btn').addEventListener('click', () => {
  clearInterval(intervalId); // stop the interval when user clicks
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  updateSlides();
  startInterval(); // restart the interval
});

document.querySelector('.next-btn').addEventListener('click', () => {
  clearInterval(intervalId); // stop the interval when user clicks
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlides();
  startInterval(); // restart the interval
});

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function startInterval() {
  intervalId = setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateSlides();
  }, 3000); // switch slides every 3 seconds
}

startInterval(); // start the interval initially