const rating = document.querySelector("#rating");
rating.addEventListener("change", () => {
  document.querySelector("#current-rating").innerHTML = rating.value;
});
