//  ! Header navbar

let navbar = document.querySelector(".navigation-wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
};

// ! Navbar Hide

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});
