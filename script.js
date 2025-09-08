document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navIcon = navToggle.querySelector("i");
  
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
  
      // Swap icons for FA6
      if (navMenu.classList.contains("active")) {
        navIcon.classList.remove("fa-bars");
        navIcon.classList.add("fa-xmark");
      } else {
        navIcon.classList.remove("fa-xmark");
        navIcon.classList.add("fa-bars");
      }
    });
  });
  