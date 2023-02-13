// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", (event) => {
//   const xPos = event.offsetX;
//   const yPos = event.offsetY;
//   const spanEl = document.createElement("span");
//   spanEl.style.left = xPos + "px";
//   spanEl.style.top = yPos + "px";
//   const size = Math.random() * 100;
//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   bodyEl.appendChild(spanEl);
//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// });
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
 // inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}