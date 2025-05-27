const $form = document.querySelector("form");

const $firstName = document.querySelector("#first-name");
const $firstNameSvg = document.querySelector(".first-name-svg");
const $firstNameText = document.querySelector(".first-name-text");

const $lastName = document.querySelector("#last-name");
const $lastNameSvg = document.querySelector(".last-name-svg");
const $lastNameText = document.querySelector(".last-name-text");

const $email = document.querySelector("#email");
const $emailSvg = document.querySelector(".email-svg");
const $emailText = document.querySelector(".email-text");

const $password = document.querySelector("#password");
const $passwordSvg = document.querySelector(".password-svg");
const $passwordText = document.querySelector(".password-text");

let isTrue = [];

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if ($firstName.value === "") {
    $firstNameSvg.classList.remove("hidden");
    $firstNameText.classList.remove("hidden");
    $firstName.classList.add("error.input");
    isTrue.push(false);
  } else {
    $firstNameSvg.classList.add("hidden");
    $firstNameText.classList.add("hidden");
    $firstName.classList.remove("error.input");
    isTrue.push(true);
  }

  if (isTrue.includes(false)) {
    $form.classList.add("error-class");
  }

  console.log(isTrue);
});
