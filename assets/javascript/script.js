document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");
  var scrollToTopBtn = document.getElementById("scroll-to-top");
  console.log("Scroll to top button:", scrollToTopBtn);
  
  window.addEventListener("scroll", function() {
    console.log("Scroll event detected, window.pageYOffset:", window.pageYOffset);
    if (window.pageYOffset > 100) {
      console.log("Adding 'visible' class to button");
      scrollToTopBtn.classList.add("visible");
    } else {
      console.log("Removing 'visible' class from button");
      scrollToTopBtn.classList.remove("visible");
    }
  });
  
  scrollToTopBtn.addEventListener("click", function() {
    console.log("Scroll to top button clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});