const url = "data/members.json";
const spotlightsContainer = document.querySelector("#spotlights");

async function displaySpotlights(members) {
  const response = await fetch(url);

  const spotlightData = {
    names: [],
    addresses: [],
    phones: [],
    websites: [],
    memberships: [],
  };

  let spotlightOne = {};
  let spotlightTwo = {};
  let spotlightThree = {};

  if (response.ok) {
    const memberData = await response.json();
    console.log(memberData);

    for (let i = 0, spot; i < 7; i++) {
      let key = i;
      let value = memberData.members[key];

      let name = value.name;
      let address = value.address;
      let phone = value.phone;
      let website = value.websiteurl;
      let membership = value.membershiplevel;

      spotlightData.names.push(name);
      spotlightData.addresses.push(address);
      spotlightData.phones.push(phone);
      spotlightData.websites.push(website);
      spotlightData.memberships.push(membership);
    }
    // Access the data using the keys
    // console.log(spotlightData.names);
    // console.log(spotlightData.addresses);
    // console.log(spotlightData.phones);
    // console.log(spotlightData.websites)

    const keyList = [0, 1, 2, 3, 4, 5, 6];
    const shuffledList = keyList.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledList);

    spotlightOne = {
      name: spotlightData.names[shuffledList[0]],
      address: spotlightData.addresses[shuffledList[0]],
      phone: spotlightData.phones[shuffledList[0]],
      website: spotlightData.websites[shuffledList[0]],
      membership: spotlightData.memberships[shuffledList[0]],
    };
    spotlightTwo = {
      name: spotlightData.names[shuffledList[1]],
      address: spotlightData.addresses[shuffledList[1]],
      phone: spotlightData.phones[shuffledList[1]],
      website: spotlightData.websites[shuffledList[1]],
      membership: spotlightData.memberships[shuffledList[1]],
    };
    spotlightThree = {
      name: spotlightData.names[shuffledList[2]],
      address: spotlightData.addresses[shuffledList[2]],
      phone: spotlightData.phones[shuffledList[2]],
      website: spotlightData.websites[shuffledList[2]],
      membership: spotlightData.memberships[shuffledList[2]],
    };
  }
  //   Section One
  let sectionOne = document.createElement("section");
  sectionOne.classList.add("spotlight");
  sectionOne.classList.add(`spot-one`);
  let sectionOneHTML = `
          <h3 class="${spotlightOne.membership}">${spotlightOne.name}</h3>
          <p>${spotlightOne.address}</p>
          <p>${spotlightOne.phone}</p>
          <p><a href="${spotlightOne.website}" class="spot-link">${spotlightOne.website}</a></p>
        `;
  sectionOne.innerHTML = sectionOneHTML;
  spotlightsContainer.appendChild(sectionOne);
  //   Section Two
  let sectionTwo = document.createElement("section");
  sectionTwo.classList.add("spotlight");
  sectionTwo.classList.add(`spot-two`);
  let sectionTwoHTML = `
          <h3 class="${spotlightTwo.membership}">${spotlightTwo.name}</h3>
          <p>${spotlightTwo.address}</p>
          <p>${spotlightTwo.phone}</p>
          <p><a href="${spotlightTwo.website}" class="spot-link">${spotlightTwo.website}</a></p>
        `;
  sectionTwo.innerHTML = sectionTwoHTML;
  spotlightsContainer.appendChild(sectionTwo);
  //   Section Three
  let sectionThree = document.createElement("section");
  sectionThree.classList.add("spotlight");
  sectionThree.classList.add(`spot-three`);
  let sectionThreeHTML = `
          <h3 class="${spotlightThree.membership}">${spotlightThree.name}</h3>
          <p>${spotlightThree.address}</p>
          <p>${spotlightThree.phone}</p>
          <p><a href="${spotlightThree.website}" class="spot-link">${spotlightThree.website}</a></p>
        `;
  sectionThree.innerHTML = sectionThreeHTML;
  spotlightsContainer.appendChild(sectionThree);
}

displaySpotlights();
