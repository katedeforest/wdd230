const banner = document.querySelector("#home-banner");
const button = document.querySelector("#hbanner-button");

// Close banner with button
button.addEventListener("click", () => {
  banner.style.display = "none";
});

// Only show banner M-W
const newDate = new Date();
console.log(newDate);
const weekday = newDate.getDay();
console.log(weekday);

if ((weekday > 0) & (weekday < 4)) {
  banner.style.display = "grid";
  console.log("show");
} else {
  banner.style.display = "none";
  console.log("none");
}
