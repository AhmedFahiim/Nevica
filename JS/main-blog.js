let blog = document.querySelectorAll(".blog");
let animateBlog = document.querySelectorAll(".blog.animate");
let blogsContainer = document.querySelector(".main-view .container");
let viewMore = document.querySelector(".view-more");

viewMore.onclick = function () {
  viewMore.style.display = "none";
  animateBlog[0].classList.add("active");
  animateBlog[1].classList.add("active");
};
