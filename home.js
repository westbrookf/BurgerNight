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
