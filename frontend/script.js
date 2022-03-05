
const form = document.querySelector('#myform');
const cancelBtn = document.querySelector('#cancel');

const sendBtn = document.querySelector('#send');
let namef = document.querySelector('input[type=text]');
let email = document.querySelector('input[type=email]');
let phone = document.querySelector('input[type=tel]');
let message = document.querySelector('#message');





function cancel(e) {
  // e.preventDefault();
  namef.value= '';
  email.value = '';
  phone.value = '';
  message.value = '';
}
cancelBtn.addEventListener('click', cancel())

let msgArr = Array.from(message.value)

function send(e) {
  // e.preventDefault();
  if (namef=== ''|| email.value === '' || phone.value === '' || message.value === '') {
    alert("all input boxes must be filled");
  }
  else if (phone.value[type] !== Number) {
    alert("phone number field must only contain numbers");
  }
  else if (msgArr.length > 100) {
    alert("message field cannot have more than 100 characters");
  } else {
    alert(`welcome ${namef.value}`);
  }
}