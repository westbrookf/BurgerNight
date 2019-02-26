//Event Slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("event");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.height = "0%";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = 1;
  slides[slideIndex - 1].style.height = "70%";
  setTimeout(showSlides, 4000);
}
//Testimonials Slide
let slideBase = 0;
showTest();

function showTest() {
  let i;
  const slides = document.getElementsByClassName("testimonial");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideBase++;
  if (slideBase > slides.length) {
    slideBase = 1;
  }
  slides[slideBase - 1].style.display = "block";
  setTimeout(showTest, 3000);
}
