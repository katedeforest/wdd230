const url = "data/members.json";
const directorycards = document.querySelector("#directory-cards");
function displayMembers(members) {
  members.forEach((member) => {
    let section = document.createElement("section");
    section.classList.add("directory-card");
    let sectionHTML = `
    <p><a href="${member.websiteurl}">${member.name}</a></p>
    <p>${member.address}</p>
    <p>${member.phone}</p>
    <img src="${member.imageurl}" alt="${member.name}" loading="lazy" width="200"/>`;
    section.innerHTML = sectionHTML;
    directorycards.appendChild(section);
  });
}
async function getMemberData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
  } else {
    console.error("Response Invalid");
  }
}
getMemberData();

const gridbutton = document.querySelector("#d-gridbutton");
const listbutton = document.querySelector("#d-listbutton");
const listhead = document.querySelector("#directory-listhead");
gridbutton.addEventListener("click", () => {
  if (directorycards.classList.contains("directory-grid")) {
    return;
  } else {
    directorycards.classList.toggle("directory-grid");
    directorycards.classList.toggle("directory-list");
    listhead.classList.toggle("listheadhide");
    listhead.classList.toggle("listheadshow");
  }
});
// gridbutton.addEventListener("mousedown", () => {
//   gridbutton.style.background = "red";
// });
listbutton.addEventListener("click", () => {
  if (directorycards.classList.contains("directory-list")) {
    return;
  } else {
    directorycards.classList.toggle("directory-grid");
    directorycards.classList.toggle("directory-list");
    listhead.classList.toggle("listheadhide");
    listhead.classList.toggle("listheadshow");
  }
});
// listbutton.addEventListener("mousedown", () => {
//   listbutton.style.background = "red";
// });
