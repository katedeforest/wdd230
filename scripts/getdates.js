// Get Current Year
const options = {
  year: "numeric",
};
document.querySelector("#currentYear").innerHTML =
  new Date().toLocaleDateString("en-US", options);

// Get Last Modified Date
document.querySelector("#lastModified").innerHTML = document.lastModified;

//
