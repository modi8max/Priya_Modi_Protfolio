var typed = new Typed("#element", {
  strings: ["Manual Tester", "Qa Engineer", "Freelancer","Automation Tester","API Tester"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
  const right = document.querySelector(".right");
  const navbarLinks = document.querySelector(".navbar-links");

  right.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
  });
  navbarLinks.addEventListener("click", function () {
    navbarLinks.classList.remove("active");
  });
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
  

});
