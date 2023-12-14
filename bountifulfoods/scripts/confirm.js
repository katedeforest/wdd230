// Order Date
const fulldate = new Date();
const monthnow = fulldate.getMonth();
const daynow = fulldate.getDate();
const yearnow = fulldate.getFullYear();

const months = {
  1: ["January"],
  2: ["February"],
  3: ["March"],
  4: ["April"],
  5: ["May"],
  6: ["June"],
  7: ["July"],
  8: ["August"],
  9: ["September"],
  10: ["October"],
  11: ["November"],
  12: ["December"],
};
const monthname = months[monthnow];

const completedate = `${monthname} ${daynow}, ${yearnow}`;

const date = document.querySelector("#orderdate");
date.textContent = completedate;

// Customer order info
let url = new URL(window.location);
let params = url.searchParams;

const firstname = params.get("firstname");
const email = params.get("email");
const phone = params.get("phone");
const choice1 = params.get("choice1");
const choice2 = params.get("choice2");
const choice3 = params.get("choice3");
let instructions = "";

const yourname = document.querySelector("#yourname");
const youremail = document.querySelector("#youremail");
const yourphone = document.querySelector("#yourphone");
const yourchoice1 = document.querySelectorAll(".yourchoice1");
const yourchoice2 = document.querySelectorAll(".yourchoice2");
const yourchoice3 = document.querySelectorAll(".yourchoice3");

const yourinstructions = document.querySelector("#yourinstructions");

yourname.textContent = firstname;
youremail.textContent = email;
yourphone.textContent = phone;

yourchoice1.forEach((element) => {
  element.textContent = choice1;
});
yourchoice2.forEach((element) => {
  element.textContent = choice2;
});
yourchoice3.forEach((element) => {
  element.textContent = choice3;
});

if (params.get("instructions") == "") {
  instructions = "(none)";
} else {
  instructions = params.get("instructions");
}

yourinstructions.textContent = instructions;

// Total amount of carbohydrates, protein, fat, sugar, and calories
const dataURL = "./data/fruityvice.json";

const choices = [];
choices.push(choice1);
choices.push(choice2);
choices.push(choice3);

let totalcarbs = 0;
let totalprotein = 0;
let totalfat = 0;
let totalsugar = 0;
let totalcalories = 0;

async function getNutrition() {
  try {
    const response = await fetch(dataURL);
    if (response.ok) {
      const data = await response.json();
      getTotals(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function getTotals(data) {
  for (const choice of choices) {
    const object = data.filter((object) => object.name == choice);
    console.log(object);
    const carbs = object[0].nutritions.carbohydrates;
    const protein = object[0].nutritions.protein;
    const fat = object[0].nutritions.fat;
    const sugar = object[0].nutritions.sugar;
    const calories = object[0].nutritions.calories;

    totalcarbs += carbs;
    totalprotein += protein;
    totalfat += fat;
    totalsugar += sugar;
    totalcalories += calories;

    carbspan = document.querySelector("#carbs");
    proteinspan = document.querySelector("#protein");
    fatspan = document.querySelector("#fat");
    sugarspan = document.querySelector("#sugar");
    caloriespan = document.querySelector("#calories");

    carbspan.textContent = Math.round(totalcarbs);
    proteinspan.textContent = Math.round(totalprotein);
    fatspan.textContent = Math.round(totalfat);
    sugarspan.textContent = Math.round(totalsugar);
    caloriespan.textContent = Math.round(totalcalories);
  }
}

getNutrition();
