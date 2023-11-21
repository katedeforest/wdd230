const banner = document.querySelector("#home-banner");
const button = document.querySelector("#hbanner-button");

// Close banner with button
button.addEventListener("click", () => {
  banner.style.display = "none";
});

// Only show banner M-W
const weekDay = new Date().getDay();
console.log(weekDay);

if (weekDay > 0) {
  banner.style.display = "grid";
  console.log("show");
} else {
  banner.style.display = "none";
  console.log("none");
}
