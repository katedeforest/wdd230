// "name": "Example Name 1",
// "address": "123 Main Street, Rexburg, ID 83440",
// "phone": "123-456-7890",
// "webisteurl": "https://www.rexburg.org",
// "imageurl": "images/exmaple.jpg",
// "membershiplevel": "gold"

const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

function displayProphets(prophets) {
  prophets.forEach((prophet) => {
    let section = document.createElement("section");
    section.classList.add("card");
    let sectionHTML = `
    <h3>${prophet.name} ${prophet.lastname}</h3>
    <p>Date of Birth: ${prophet.birthdate}</p>
    <p>Place of Birth: ${prophet.birthplace}</p>
    <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy"/>`;
    section.innerHTML = sectionHTML;
    cards.appendChild(section);
  });
}

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
  } else {
    console.error("Response Invalid");
  }
}

getProphetData();
