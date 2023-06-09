window.addEventListener('DOMContentLoaded', function () {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slideshow-image");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
  });
  
  
  function showImage(imageSrc) {
        var lightbox = document.querySelector('.lightbox');
        var lightboxImage = document.querySelector('#lightboxImage');
  
  
         var previousSelected = document.querySelector('.selected-image');
        if (previousSelected) {
          previousSelected.classList.remove('selected-image');
        }
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'flex';
      }
  
      function hideImage() {
        var lightbox = document.querySelector('.lightbox');
  
        lightbox.style.display = 'none';
      }
  
  
          window.addEventListener('scroll', function() {
              var movingText = document.querySelector('.moving-text');
              var windowHeight = window.innerHeight;
              var textHeight = movingText.offsetHeight;
              var scrollPosition = window.scrollY;
  
              // Calculate the position where the text should disappear
              var disappearPosition = windowHeight - textHeight;
  
              if (scrollPosition >= disappearPosition) {
                  movingText.style.display = 'none';
              } else {
                  movingText.style.display = 'block';
              }
          });
  