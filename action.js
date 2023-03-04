let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
function data() {
  let firstName = document.querySelector(".fName").value;
  let lastName = document.querySelector(".lName").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".pass").value;
  let confirmPass = document.querySelector(".cPass").value;

  if (password !== confirmPass) {
    alert("Password not matching");
  } else {
    document.querySelector(".para1").innerText = firstName;
    document.querySelector(".para2").innerText = lastName;
    document.querySelector(".para3").innerText = email;
    document.querySelector(".para4").innerText = password;
  }
}

// let firstName = document.querySelector(".fName");
// let first = document.querySelector(".para1");
// firstName.addEventListener("change", () => {
//   first.innerHTML = firstName.value;
// });
// /////////////////////////////
// let lastName = document.querySelector(".lName");
// let last = document.querySelector(".para2");
// lastName.addEventListener("change", () => {
//   last.innerHTML = lastName.value;
// });
// ////////////////////////////
// let email = document.querySelector(".email");
// let mail = document.querySelector(".para3");
// email.addEventListener("change", () => {
//   mail.innerHTML = email.value;
// });
// /////////////////////////////
// let password = document.querySelector(".pass");
// let pass = document.querySelector(".para4");
// password.addEventListener("change", () => {
//   pass.innerHTML = password.value;
// });
