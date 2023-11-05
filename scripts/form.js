const rating = document.querySelector("#rating");
rating.addEventListener("change", () => {
  document.querySelector("#current-rating").innerHTML = rating.value;
});

const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const message = document.querySelector("#message");
confirm.addEventListener("blur", () => {
  if (password.value != confirm.value) {
    message.textContent = "Passwords do not match!";
    password.focus();
  } else {
    message.textContent = "";
  }
});
