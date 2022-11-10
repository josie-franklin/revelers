const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementsByClassName("sidebar")[0];
const pageCover = document.getElementsByClassName("page-cover")[0];
const body = document.getElementsByClassName("body")[0];
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
  pageCover.classList.toggle("visible");
  body.classList.toggle("stop-scroll");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
  pageCover.classList.toggle("visible");
  body.classList.toggle("stop-scroll");
});
