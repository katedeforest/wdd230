const modeSwitch = document.querySelector("#modeSwitch");
const elementsToStyle = [
  document.querySelector("header"),
  ...document.querySelectorAll(
    ".navlist, .link, .card, .event-link, .spot-link"
  ),
  document.querySelector("footer"),
  document.querySelector("#welcome"),
  document.querySelector("#demographics"),
  document.querySelector("#discover"),
];

function applyStyles(styles) {
  elementsToStyle.forEach((element) => {
    Object.assign(element.style, styles);
  });
}

function toggleDarkMode() {
  if (modeSwitch.classList.contains("dark-mode")) {
    // dark mode styles
    applyStyles({
      background: "#000022",
      color: "#fbf5f3",
      // add more styles as needed
    });
  } else {
    // light mode styles
    applyStyles({
      background: "#fbf5f3",
      color: "#000022",
      // add more styles as needed
    });
  }

  modeSwitch.classList.toggle("dark-mode");
  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", modeSwitch.classList.contains("dark-mode"));
}

// Check if the user has a preference stored in localStorage
const storedDarkMode = localStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  // If the preference is true, set dark mode
  toggleDarkMode();
}

modeSwitch.addEventListener("change", toggleDarkMode);
