// ------------------ filters -----------------
let filterButtons = document.querySelectorAll(".drop-down"),
  insideList = document.querySelectorAll(".options-list"),
  options = document.querySelectorAll(".options-list li"),
  selectedOption = document.querySelectorAll(".selected");
//  --------- add click event to the buttons

filterButtons.forEach((button, index) => {
  button.onclick = function () {
    insideList.forEach((r) => {
      if (insideList[index] != r) {
        r.classList.remove("active");
      }
    });
    insideList[index].classList.toggle("active");
  };
});

//  --------- add click event to the options

options.forEach((li) => {
  li.onclick = function (e) {
    options.forEach((opt) => {
      opt.removeAttribute("selected");
    });
    e.currentTarget.setAttribute("selected", "");
    selectedOption[e.currentTarget.parentElement.dataset.index].textContent =
      e.currentTarget.textContent;
  };
});
//  --------- set the selected value onload

window.onload = function () {
  options.forEach((li) => {
    if (li.hasAttribute("selected")) {
      selectedOption[li.parentElement.dataset.index].textContent =
        li.textContent;
    }
  });
};

// ------------------ show boat details ----------------

let showIcon = document.querySelectorAll(".show-icon");
let details = document.querySelectorAll(".details");
let closeButton = document.querySelectorAll(".close");

function showAndHide(icon, item) {
  icon.forEach((i, index) => {
    i.addEventListener("click", () => {
      if (icon === closeButton) {
        item[index].classList.remove("active");
      } else item[index].classList.add("active");
    });
  });
}
// show Details
showAndHide(showIcon, details);
// Hide Details
showAndHide(closeButton, details);

//---------------------boot list two

let rangeInputs = document.querySelectorAll("[type='range']");
let progressBar = document.getElementById("progress");
let minInput = document.getElementById("min-price");
let maxInput = document.getElementById("max-price");
let minValue = document.getElementById("minValue");
let maxValue = document.getElementById("maxValue");
let km = document.getElementById("KM");
let reset = document.getElementById("reset");
let resetItems = document.querySelectorAll(".reset-item");

// print the range values oninput
rangeInputs.forEach((range) => {
  range.oninput = function (e) {
    if (e.currentTarget === minInput) {
      progressBarMin();
    } else if (e.currentTarget === maxInput) {
      progressBarMax();
    } else km.textContent = e.currentTarget.value;
  };
});

// calculate the range values
function progressBarMin() {
  putSuger(minInput, minValue);
  progressBar.style.left = `${(minInput.value / minInput.max) * 100}%`;
}
function progressBarMax() {
  putSuger(maxInput, maxValue);
  progressBar.style.right = `${(1 - maxInput.value / maxInput.max) * 100}%`;
}

// add the number sugers
function putSuger(element, input) {
  let newValue = element.value.split("");
  if (element.value.length === 4) {
    newValue.splice(1, 0, ",");
    input.value = `$${newValue.join("")}`;
  }
  if (element.value.length === 5) {
    newValue.splice(2, 0, ",");
    input.value = `$${newValue.join("")}`;
  }
}

// Reset the values onclick
reset.onclick = () => {
  resetItems.forEach((i) => {
    i.value = "";
    i.textContent = "";
  });
};

// print the values onload
window.onload = () => {
  progressBarMin();
  progressBarMax();
};
