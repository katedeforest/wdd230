// create a key
const VISITS_KEY = "site_visits";

function getSiteVisits() {
  // check to see if key exists in local storage (local storage is always string, thus the key created)
  let currentValue = localStorage.getItem(VISITS_KEY);

  // if the key doesn't exist, initialize the key to 1
  let siteVisits = 1;
  if (currentValue != null) {
    // if the key does exist add 1 to current value
    siteVisits = parseInt(currentValue) + 1;
  }

  // save the new value for current visits (use backtick/uptick to turn integer back to string)
  localStorage.setItem(VISITS_KEY, `${siteVisits}`);
  return siteVisits;
}

// update the html page with currect visits
document.getElementById("visitcount").textContent = `${getSiteVisits()}`;
