const modeSwitch = document.querySelector("#modeSwitch");

// discover page
const welcome = document.querySelector("#welcome");
const demographics = document.querySelector("#demographics");
const discover = document.querySelector("#discover");

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.classList.contains("dark-mode")) {
    // dark mode
    welcome.style.background = "#000022";
    welcome.style.color = "#fbf5f3";
    demographics.style.background = "#000022";
    demographics.style.color = "#fbf5f3";
    discover.style.background = "#000022";
    discover.style.color = "#fbf5f3";

    modeSwitch.classList.toggle("dark-mode");
  } else {
    // light mode
    welcome.style.background = "#fbf5f3";
    welcome.style.color = "#000022";
    demographics.style.background = "#fbf5f3";
    demographics.style.color = "#000022";
    discover.style.background = "#fbf5f3";
    discover.style.color = "#000022";

    modeSwitch.classList.toggle("dark-mode");
  }
});
