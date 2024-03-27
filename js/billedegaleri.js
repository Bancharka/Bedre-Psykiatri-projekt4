let billedeSerie = 1;
showSlides2(billedeSerie);


function plusSlides2(n) {
  showSlides2(billedeSerie += n);
}


function currentSlide(n) {
  showSlides2(billedeSerie = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("billedegalleri");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("selveSkriften");
  if (n > slides.length) {billedeSerie = 1}
  if (n < 1) {billedeSerie = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[billedeSerie-1].style.display = "block";
  dots[billedeSerie-1].className += " active";
  captionText.innerHTML = dots[billedeSerie-1].alt;
}

