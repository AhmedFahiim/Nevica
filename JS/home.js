// ---------------- Home Page ---------------------//
// ---------------- landing Page change ---------------------//
let textBox = document.querySelectorAll(".textbox");
let activeBox = 0;
let imgs = ["url(../Imgs/Main.jpg)", "url(../Imgs/Main1.jpg)"];
let angles = document.querySelectorAll(".angles");
let landing = document.querySelector(".landing");
let activeImg = 0;

landing.style.cssText = `background-image:${imgs[activeImg]};`;

// add click event to the angles
angles.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.currentTarget === angles[0]) {
      checkRightArrow();
    } else {
      checkLeftArrow();
    }
    landingChange();
  });
});

function landingChange() {
  landing.style.backgroundImage = imgs[activeImg];
  textBox.forEach((box) => {
    box.style.transition = "none";
    box.classList.remove("active");
  });
  textBox[activeBox].classList.add("active");
  textBox[activeBox].style.cssText =
    "transition: 1s ease-in-out; transition-delay:0.1s; transition-property:opacity,left";
}
landingChange();

// check the counter in left click
function checkLeftArrow() {
  if (activeBox === 0) {
    activeBox = textBox.length - 1;
  } else activeBox--;
  if (activeImg === 0) {
    activeImg = imgs.length - 1;
  } else activeImg--;
}

// check the counter in right click
function checkRightArrow() {
  if (activeImg === imgs.length - 1) {
    activeImg = 0;
  } else activeImg++;
  if (activeBox === textBox.length - 1) {
    activeBox = 0;
  } else activeBox++;
}

// set the interval change
setInterval(function () {
  checkRightArrow();
  landingChange();
}, 5000);
// ---------------- Premium section ---------------------//
let slideHolder = document.querySelector(".options-holder"),
  slideItem = slideHolder.querySelectorAll(".opt"),
  buttons = document.querySelectorAll(".rental-options .arrow"),
  itemWidth = slideItem[0].clientWidth,
  slideCounter = 0;

function prev() {
  if (slideCounter == 0) return;
  slideCounter--;
  slideHolder.style.transition = `0.5s  ease-in-out transform`;
  slideHolder.style.transform = `translateX(${-itemWidth * slideCounter}px)`;
}

function next() {
  if (slideCounter == slideItem.length - 3) return;
  slideCounter++;
  slideHolder.style.transition = `0.5s  ease-in-out transform`;
  slideHolder.style.transform = `translateX(${-itemWidth * slideCounter}px)`;
}
buttons[0].onclick = next;
buttons[1].onclick = prev;

// ---------------- Gallery section ---------------------//

let zoomIcons = document.querySelectorAll(".zoom");

zoomIcons.forEach((i) => {
  i.addEventListener("click", (e) => {
    let overLay = document.createElement("div");
    overLay.className = "galeryOverLay";
    document.body.append(overLay);
    // -------------------------------------------------
    let imgBox = document.createElement("div");
    imgBox.className = "imgBox";
    overLay.append(imgBox);
    // -------------------------------------------------
    let activeImage = document.createElement("img");
    activeImage.src = e.currentTarget.previousElementSibling.src;
    activeImage.className = "activeImage";
    imgBox.append(activeImage);
    // -------------------------------------------------
    let closeButton = document.createElement("span");
    closeButton.className = "closeSpan";
    closeButton.textContent = "X";
    imgBox.append(closeButton);
    closeButton.onclick = function () {
      overLay.remove();
    };
  });
});

// ---------------- What people say section ---------------------//

let slider = document.querySelector(".reviews-container .slider"),
  psSlideItem = slider.querySelectorAll(".review"),
  psSlideItemWidth = psSlideItem[0].clientWidth,
  pscounter = 1;

//------------------ cloning
let firstClone = psSlideItem[0].cloneNode(true),
  lastClone = psSlideItem[1].cloneNode(true);

firstClone.classList.add("firstClone");
lastClone.classList.add("lastClone");

slider.append(firstClone);
slider.prepend(lastClone);

psSlideItem = slider.querySelectorAll(".review");
// ----------------------

slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;

function slides() {
  if (pscounter === psSlideItem.length - 1) return;
  slider.style.transition = "0.7s ease-in-out";
  pscounter++;
  slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
}

slider.addEventListener("transitionend", () => {
  if (psSlideItem[pscounter].classList.contains("firstClone")) {
    slider.style.transition = "none";
    pscounter = 1;
    slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
  }
});

setInterval(slides, 5000);

window.addEventListener("resize", () => {
  (psSlideItemWidth = psSlideItem[0].clientWidth), (pscounter = 0);
});

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

// -------------------- services Done
let counter = document.querySelectorAll(".counter");
let deal = document.querySelector(".deal");

window.onscroll = function () {
  // -------------------- Countdown
  let offsetHeight = deal.offsetTop;
  let servicesHeight = deal.clientHeight;
  let windowHeight = this.innerHeight;
  let scrolledPixs = window.scrollY;
  if (scrolledPixs > offsetHeight + servicesHeight - windowHeight) {
    counter.forEach((count) => {
      function CountUpdate() {
        let speed = 200;
        let addition = Number(count.dataset.target / speed);
        let target = Number(count.dataset.target);
        let initial = +count.textContent;
        if (initial < target) {
          count.textContent = Math.ceil(initial + addition);
          setTimeout(CountUpdate, 60);
        }
      }
      CountUpdate();
    });
  }
  // -------------------- scrollTop
  scrollTop();
  // -------------------- scrolldown
  navScrolling();
};
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

// --------------------PlayVideo--------------------

let icon = document.getElementById("play-video");
let popUp = document.getElementById("popup");
let closeVideo = document.getElementById("closePop");

function playVideoFun() {
  popUp.classList.add("play");
}
function closeVideoFun() {
  popUp.classList.remove("play");
}

icon.onclick = playVideoFun;
closeVideo.onclick = closeVideoFun;
