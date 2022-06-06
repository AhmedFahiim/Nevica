let landing = document.querySelector(".landing");
landing.style.backgroundImage = "url(../Imgs/Main.jpg)";

// ---------------- scrolling Event ---------------------//
// bars icon
let barsIcon = document.querySelector(".bars-icon");
let links = document.querySelector(".links");

barsIcon.onclick = function () {
  links.classList.toggle("active");
};

// -------------------- scrollTop
let goUp = document.querySelector(".scroll-top");

function scrollTop() {
  if (window.scrollY >= 1000) {
    goUp.classList.add("scrolling");
  } else goUp.classList.remove("scrolling");
  goUp.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
// -------------------- nav Scrolling

let scrollItems = document.querySelectorAll(".scroll-event");
let logo = document.querySelector(".logo");

function navScrolling() {
  if (window.scrollY >= 100) {
    scrollItems.forEach((i) => {
      i.classList.add("scrolling");
    });
    logo.src = "../Imgs/logo-dark.png";
    barsIcon.style.color = "#222";
  } else {
    scrollItems.forEach((i) => {
      i.classList.remove("scrolling");
    });
    logo.src = "../Imgs/logo-light.png";
    barsIcon.style.color = "#fff";
  }
}

window.onscroll = function () {
  scrollTop();
  navScrolling();
};

// -------------- search icon

let searchOverlay = document.querySelector(".search-overLay");
let searchIcon = document.getElementById("search");
let closeSearch = document.querySelector(".close-Overlay");

searchIcon.onclick = function () {
  searchOverlay.classList.add("show");
};

closeSearch.onclick = function () {
  searchOverlay.classList.remove("show");
};
