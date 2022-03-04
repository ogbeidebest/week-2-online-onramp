import "./styles.css";

const form = document.querySelector("form");

var h2Element = document.querySelector(".alert");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

function submitForm(event) {
  event.preventDefault();

  if (nameInput.value === "") {
    h2Element.textContent = "Name is required";

    return;
  }

  if (emailInput.value === "") {
    h2Element.innerText = "Email is required";

    return;
  }

  if (passwordInput.value === "") {
    h2Element.textContent = "Password is required";

    return;
  }

  var nameStr = nameInput.value;

  h2Element.textContent = "Welcome " + nameStr;
}

form.addEventListener("submit", submitForm);
