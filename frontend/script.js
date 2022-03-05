import "./styles.css";

const form = document.querySelector("form");
var input = document.getElementsByTagName('input')
var name = document.querySelector('#name');
var email = document.querySelector('#email');
var phone = document.querySelector('#phone');
var message = document.querySelector('#message');
var send = document.querySelector('send')

function submitForm(event) {
  event.preventDefault();

  if (name.value ==='') {
    // alert("all input boxes must be filled");
console.log("i am here");
    // return;
  }

  // if (emailInput.value === "") {
  //   h2Element.innerText = "Email is required";

  //   return;
  // }

  // if (passwordInput.value === "") {
  //   h2Element.textContent = "Password is required";

  //   return;
  // }

  // var nameStr = nameInput.value;

  // h2Element.textContent = "Welcome " + nameStr;
}

form.addEventListener("submit", submitForm());
