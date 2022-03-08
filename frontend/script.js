
// const form = document.querySelector('#myform');
const cancelBtn = document.getElementById("cancel");

const sendBtn = document.querySelector("#send");
let namef = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");





// function cancel(e) {
//   // e.preventDefault();
//   namef.value= '';
//   email.value = '';
//   phone.value = '';
//   message.value = '';
// }
cancelBtn.addEventListener('click', () => {
  namef.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
})

// let msgArr = Array.from(message.value)

sendBtn.addEventListener( 'click', ()=> {

  if (namef=== ''|| email.value === '' || phone.value === '' || message.value === '') {
    window.alert("all input boxes must be filled");
   
  }
  else if (isNaN(phone.value)) {
  
    window.alert("phone number field must only contain numbers");
  }
  else if (message.value.length > 100) {
    window.alert("message field cannot have more than 100 characters");
  } else {
    window.alert(`welcome ${namef.value}`);
  }
})




