const modeButton = document.querySelector("#modeButton");
const modeSwitch = document.querySelector("#modeSwitch");
const header = document.querySelector("header");
const navListItems = document.querySelectorAll(".navlist");
const links = document.querySelectorAll(".link");
const cards = document.querySelectorAll(".card");
const eventlink = document.querySelectorAll(".event-link");
const spotlink = document.querySelectorAll(".spot-link");
const footer = document.querySelector("footer");

// discover page
const welcome = document.querySelector("#welcome");
const demographics = document.querySelector("#demographics");
const discover = document.querySelector("#discover");

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.classList.contains("dark-mode")) {
    // dark mode
    header.style.background = "#000022";
    header.style.color = "#fbf5f3";
    navListItems.forEach((item) => {
      item.style.color = "#fbf5f3";
    });
    links.forEach((link) => {
      link.style.color = "#fbf5f3";
    });
    cards.forEach((card) => {
      card.style.background = "#000022";
      card.style.color = "#fbf5f3";
    });
    eventlink.forEach((anEvent) => {
      anEvent.style.color = "#fbf5f3";
    });
    spotlink.forEach((spot) => {
      spot.style.color = "#fbf5f3";
    });
    footer.style.background = "#000022";
    footer.style.color = "#fbf5f3";
    welcome.style.background = "#000022";
    welcome.style.color = "#fbf5f3";
    demographics.style.background = "#000022";
    demographics.style.color = "#fbf5f3";
    discover.style.background = "#000022";
    discover.style.color = "#fbf5f3";

    modeSwitch.classList.toggle("dark-mode");
  } else {
    // light mode
    header.style.background = "#fbf5f3";
    header.style.color = "#000022";
    navListItems.forEach((item) => {
      item.style.color = "#000022";
    });
    links.forEach((links) => {
      links.style.color = "#000022";
    });
    cards.forEach((card) => {
      card.style.background = "#fbf5f3";
      card.style.color = "#000022";
    });
    footer.style.background = "#fbf5f3";
    footer.style.color = "#000022";
    welcome.style.background = "#fbf5f3";
    welcome.style.color = "#000022";
    demographics.style.background = "#fbf5f3";
    demographics.style.color = "#000022";
    discover.style.background = "#fbf5f3";
    discover.style.color = "#000022";

    modeSwitch.classList.toggle("dark-mode");
  }
});
