// open  modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // close  modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  //function to control how slides are displayed once lightbox is brought up
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("lightbox");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}// this brings us back to the first picture if we click next on img4
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }