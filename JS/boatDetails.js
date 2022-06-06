let activeImg = document.querySelector("#active-pic"),
  picSlider = document.getElementById("pics-slider"),
  imgs = picSlider.querySelectorAll(".slide-item"),
  buttons = document.querySelectorAll("button.arrow"),
  counter = 0;
let imgWidth = imgs[0].clientWidth + 6;

// start clooning
let [firstClone, secClone, thirdClone, fourthClone] = [
  imgs[0].cloneNode(true),
  imgs[1].cloneNode(true),
  imgs[2].cloneNode(true),
  imgs[3].cloneNode(true),
];
picSlider.append(firstClone, secClone, thirdClone, fourthClone);
firstClone.classList.add("firstClone");
(imgs = picSlider.querySelectorAll(".slide-item")),
  // end clooning
  //----------set the rightAndleft function
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.currentTarget === buttons[0]) {
        if (counter >= imgs.length - 4) return;
        counter++;
      } else {
        if (counter === 0) return;
        counter--;
      }
      picSlider.style.cssText = `transition: 0.4s ease-in-out; transform:translateX(${
        -imgWidth * counter
      }px)`;
      activeImg.style.cssText = `background-image:url(${imgs[counter].src}); background-size: cover; transition:0.4s ease-in-out`;
    });
  });
// check if the transition end
picSlider.addEventListener("transitionend", () => {
  if (imgs[counter].classList.contains("firstClone")) {
    counter = 0;
    picSlider.style.cssText = `transition:none; transform:translateX(${
      -imgWidth * counter
    }px)`;
  }
});
//put the click Event on the images
imgs.forEach((img, index) => {
  img.onclick = () => {
    activeImg.style.cssText = `background-image:url(${imgs[index].src}); background-size: cover; transition:0.4s ease-in-out`;
  };
});

//----------set the active li onclick
let viewArea = document.querySelector(".view-area"),
  list = document.querySelectorAll(".nav li"),
  items = document.querySelectorAll(".item");

//put the click Event on the nav lists
list.forEach((li, index) => {
  li.addEventListener("click", () => {
    //   remove active class from nav li
    list.forEach((li) => {
      li.classList.remove("active");
    });
    //   remove active class from items
    items.forEach((item) => {
      item.classList.remove("active");
    });
    //   add active class to nav li and item
    li.classList.add("active");
    items[index].classList.add("active");
    viewArea.style.height = `${items[index].clientHeight}px`;
  });
});

//------set the default values on window-load
window.onload = function () {
  activeImg.style.cssText = `background-image: url(${imgs[counter].src}); background-size: cover;`;
  items.forEach((item) => {
    if (item.classList.contains("active")) {
      viewArea.style.height = `${item.clientHeight}px`;
    }
  });
};
