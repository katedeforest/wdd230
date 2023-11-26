// Get Current Year
const options = {
  year: "numeric",
};
console.log(new Date().toLocaleDateString("en-US", options));

currentYear = document.getElementById("current-year");
console.log(currentYear);
currentYear.innerHTML = new Date().toLocaleDateString("en-US", options);

// Get Last Modified Date
document.querySelector("#last-modified").innerHTML = document.lastModified;
