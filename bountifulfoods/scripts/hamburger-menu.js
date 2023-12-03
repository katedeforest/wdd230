const hideButton = document.querySelector(".menu-hide");
const showButton = document.querySelector(".menu-show");
const navMenu = document.querySelector("#header-nav");

hideButton.addEventListener("click", () => {
  hideButton.classList.toggle("showing");
  showButton.classList.toggle("showing");
  navMenu.classList.toggle("showing");
});

showButton.addEventListener("click", () => {
  hideButton.classList.toggle("showing");
  showButton.classList.toggle("showing");
  navMenu.classList.toggle("showing");
});
