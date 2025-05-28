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

  if ($lastName.value === "") {
    $lastNameSvg.classList.remove("hidden");
    $lastNameText.classList.remove("hidden");
    $lastName.classList.add("error.input");
    isTrue.push(false);
  } else {
    $lastNameSvg.classList.add("hidden");
    $lastNameText.classList.add("hidden");
    $lastName.classList.remove("error.input");
    isTrue.push(true);
  }

  if ($email.value === "") {
    $emailSvg.classList.remove("hidden");
    $emailText.classList.remove("hidden");
    $email.classList.add("error.input");
    isTrue.push(false);
  } else if (!$email.value.includes("@") || !$email.value.includes(".")) {
    $emailSvg.classList.remove("hidden");
    $emailText.classList.remove("hidden");
    $email.classList.add("error.input");
    $emailText.textContent = "Looks like this is not an email";
    isTrue.push(false);
  } else {
    $emailSvg.classList.add("hidden");
    $emailText.classList.add("hidden");
    $email.classList.remove("error.input");
    isTrue.push(true);
  }

  if ($password.value === "") {
    $passwordSvg.classList.remove("hidden");
    $passwordText.classList.remove("hidden");
    $password.classList.add("error.input");
    isTrue.push(false);
  } else if ($password.value.length < 8) {
    $passwordSvg.classList.remove("hidden");
    $passwordText.classList.remove("hidden");
    $password.classList.add("error.input");
    $passwordText.textContent = "Password must be at least 8 characters";
    isTrue.push(false);
  } else if ($password.value.includes(" ")) {
    $passwordSvg.classList.remove("hidden");
    $passwordText.classList.remove("hidden");
    $password.classList.add("error.input");
    $passwordText.textContent = "Password cannot contain spaces";
    isTrue.push(false);
  } else {
    $passwordSvg.classList.add("hidden");
    $passwordText.classList.add("hidden");
    $password.classList.remove("error.input");
    isTrue.push(true);
  }

  if (isTrue.includes(false)) {
    $form.classList.add("error-input");
    isTrue = [];
  } else {
    $form.classList.remove("error-input");
    setTimeout(() => {
      alert("Form submitted successfully!");
      $form.reset();
      isTrue = [];
    }, 1000);
  }
});
