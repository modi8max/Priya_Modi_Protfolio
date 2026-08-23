var typed = new Typed("#element", {
  strings: ["Manual Tester", "Qa Engineer", "Freelancer","Automation Tester","API Tester"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

document.addEventListener("DOMContentLoaded", function () {
  
  const right = document.querySelector(".right");
  const navbarLinks = document.querySelector(".navbar-links");

  right.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
  });
  navbarLinks.addEventListener("click", function () {
    navbarLinks.classList.remove("active");
  });
});

function openMenu(){
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeMenu(){
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}